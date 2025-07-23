import React, { useEffect, useRef } from 'react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';
import StaticMap from './StaticMap';

interface GoogleMapProps {
  address?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
}

declare global {
  interface Window {
    google: typeof google;
  }
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  address = "花蓮縣花蓮市美工六街20之6號",
  latitude = 23.9871,
  longitude = 121.6014,
  zoom = 15,
  className = "w-full h-96"
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const { isLoaded, error } = useGoogleMaps();

  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) {
      return;
    }

    const mapOptions: google.maps.MapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    };

    const map = new google.maps.Map(mapRef.current, mapOptions);

    // 添加標記
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: address,
      animation: google.maps.Animation.DROP
    });

    // 添加資訊視窗
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 5px 0; font-weight: bold;">蕙佑石材</h3>
          <p style="margin: 0; color: #666;">${address}</p>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    mapInstanceRef.current = map;
  }, [isLoaded, address, latitude, longitude, zoom]);

  // 如果 API Key 未設置，使用靜態地圖
  if (error && error.includes('請設置 Google Maps API Key')) {
    return <StaticMap address={address} className={className} />;
  }

  // 如果載入失敗，顯示錯誤訊息
  if (error) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100 rounded-lg`}>
        <div className="text-red-500 text-center">
          <p>地圖載入失敗</p>
          <p className="text-sm">{error}</p>
          <p className="text-xs mt-2">使用靜態地圖作為備用</p>
          <StaticMap address={address} className="mt-4" />
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg shadow-lg"
        style={{ minHeight: '300px' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-gray-500">載入地圖中...</div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap; 