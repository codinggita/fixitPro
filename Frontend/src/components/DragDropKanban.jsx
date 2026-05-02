import React from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Plus } from 'lucide-react';

const initialColumns = {
  todo: { id: 'todo', title: 'To Do', items: [] },
  inProgress: { id: 'inProgress', title: 'In Progress', items: [] },
  done: { id: 'done', title: 'Done', items: [] },
};

export default function DragDropKanban() {
  const [columns, setColumns] = React.useState(initialColumns);
  const [activeItem, setActiveItem] = React.useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveItem(event.active.data.current);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeColumn = Object.values(columns).find((col) =>
      col.items.some((item) => item.id === activeId)
    );
    const overColumn = Object.values(columns).find((col) =>
      col.items.some((item) => item.id === overId) || col.id === overId
    );

    if (!activeColumn || !overColumn) return;

    if (activeColumn.id !== overColumn.id) {
      setColumns((columns) => {
        const activeItems = [...activeColumn.items];
        const overItems = [...overColumn.items];

        const activeIndex = activeItems.findIndex((item) => item.id === activeId);
        const overIndex = overItems.findIndex((item) => item.id === overId);

        const [movedItem] = activeItems.splice(activeIndex, 1);
        overItems.splice(overIndex >= 0 ? overIndex : overItems.length, 0, movedItem);

        return {
          ...columns,
          [activeColumn.id]: { ...activeColumn, items: activeItems },
          [overColumn.id]: { ...overColumn, items: overItems },
        };
      });
    }
  };

  const handleDragEnd = (event) => {
    setActiveItem(null);
  };

  const addItem = (columnId) => {
    const newItem = {
      id: `item-${Date.now()}`,
      content: 'New Task',
    };

    setColumns((columns) => ({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: [...columns[columnId].items, newItem],
      },
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Task Board</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.values(columns).map((column) => (
            <div
              key={column.id}
              className="bg-gray-50 rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{column.title}</h3>
                <button
                  onClick={() => addItem(column.id)}
                  className="p-2 hover:bg-gray-200 rounded-lg"
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="space-y-3">
                {column.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-xl shadow-sm border border-gray-200"
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DragOverlay>
          {activeItem ? (
            <div className="p-4 bg-white rounded-xl shadow-lg border border-blue-500">
              {activeItem.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
