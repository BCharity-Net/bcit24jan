import React, { useState } from 'react';
import Image from 'next/image';

const Map: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const markers = [
    { id: 'bc', name: 'British Columbia', coordinates: { x: '13.9%', y: '26%' } },
    // ... Add more markers as needed
  ];

  const handleMarkerClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.stopPropagation();
    setActiveMarker(id);
  };

  const handleMapClick = () => {
    setActiveMarker(null);
  };

  return (
    <section
    className="relative flex items-center justify-between text-white mt-10 mb-20 max-w-screen-xl mx-auto"
    style={{ backgroundColor: "transparent" }}>
    <div onClick={handleMapClick} className="relative" style={{ width: '100%', paddingTop: '56.25%' }}>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="/Map.png"
          alt="World Map"
          layout="fill"
          objectFit="cover"
        />
      </div>

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
            <div className="info-bubble absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg text-black text-xs">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/bc-flag.png" alt="BC Flag" style={{ width: '20px', height: 'auto', marginRight: '8px' }} />
                {marker.name}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};

export default Map;
