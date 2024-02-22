// Map.tsx
import React, { useState, useEffect } from 'react';

const Map: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const markers = [
    { id: 'bc', name: 'British Columbia', coordinates: { x: '13.9%', y: '26%' } },
    // Add more markers as needed
  ];

  useEffect(() => {
    // Define a function to handle click events on the window
    const handleWindowClick = (event: MouseEvent) => {
      // Reset activeMarker if clicking anywhere outside a marker
      setActiveMarker(null);
    };

    // Add event listener for the window
    window.addEventListener('click', handleWindowClick);

    // Clean up event listener on unmount
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  // Prevent the window click handler when clicking on a marker
  const handleMarkerClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.stopPropagation(); // This stops the click from propagating to the window
    setActiveMarker(id);
  };

  return (
    <div className="map-container relative" onClick={() => setActiveMarker(null)}>
      <img src="/Map.png" alt="World Map" className="w-full" />
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute"
          style={{
            left: marker.coordinates.x,
            top: marker.coordinates.y,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
          onClick={(event) => handleMarkerClick(event, marker.id)}
        >
          <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
          {activeMarker === marker.id && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg text-black text-xs">
              {marker.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Map;
