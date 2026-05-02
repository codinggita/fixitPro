import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ 
  center = { lat: 0, lng: 0 }, 
  zoom = 13, 
  markers = [],
  onMarkerClick,
  className = '' 
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!window.google) {
      console.error('Google Maps API not loaded');
      return;
    }

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ lightness: '-5%' }],
          },
        ],
      });
    }

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // Add new markers
    markers.forEach((markerData) => {
      const marker = new window.google.maps.Marker({
        position: markerData.position,
        map: mapInstanceRef.current,
        title: markerData.title,
      });

      if (onMarkerClick) {
        marker.addListener('click', () => onMarkerClick(markerData));
      }

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
    };
  }, [center, zoom, markers, onMarkerClick]);

  return (
    <div
      ref={mapRef}
      className={`w-full h-full rounded-2xl ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
};

export default GoogleMap;
