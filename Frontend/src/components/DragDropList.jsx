import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2 } from 'lucide-react';

function SortableItem({ id, children, onRemove }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
    >
      <button
        {...attributes}
        {...listeners}
        className="p-2 hover:bg-gray-100 rounded-lg cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-5 h-5 text-gray-400" />
      </button>
      <div className="flex-1">{children}</div>
      {onRemove && (
        <button
          onClick={() => onRemove(id)}
          className="p-2 hover:bg-red-100 rounded-lg text-red-500"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default function DragDropList({ items, setItems, renderItem }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-3">
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} onRemove={handleRemove}>
              {renderItem ? renderItem(item) : item.content}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
