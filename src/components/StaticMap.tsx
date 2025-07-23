import React from 'react';

interface StaticMapProps {
  address: string;
  className?: string;
}

const StaticMap: React.FC<StaticMapProps> = ({ 
  address, 
  className = "w-full h-80" 
}) => {
  const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={className}>
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default StaticMap; 