'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  className?: string;
}

export default function MapboxMap({ className = '' }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    
    // Set Mapbox access token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

    if (!mapboxgl.accessToken) {
      console.warn('Mapbox token not found. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.');
      return;
    }

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [24.7536, 59.4370], // Tallinn, Estonia coordinates
        zoom: 12,
        pitch: 45,
        bearing: -17.6,
        antialias: true
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Wait for map to load before adding markers
      map.current.on('load', () => {
        setIsLoaded(true);
        
        // Add some sample markers for wheelchair accessibility in Tallinn
        new mapboxgl.Marker({ color: '#3b82f6' })
          .setLngLat([24.7536, 59.4370])
          .setPopup(new mapboxgl.Popup().setHTML('<div class="p-2"><h3 class="font-semibold">Tallinn Old Town</h3><p>Historic area with wheelchair accessibility features.</p></div>'))
          .addTo(map.current!);

        new mapboxgl.Marker({ color: '#10b981' })
          .setLngLat([24.7600, 59.4400])
          .setPopup(new mapboxgl.Popup().setHTML('<div class="p-2"><h3 class="font-semibold">Kadriorg Park</h3><p>This area has been analyzed for surface smoothness.</p></div>'))
          .addTo(map.current!);

        new mapboxgl.Marker({ color: '#f59e0b' })
          .setLngLat([24.7450, 59.4350])
          .setPopup(new mapboxgl.Popup().setHTML('<div class="p-2"><h3 class="font-semibold">Tallinn Port</h3><p>Accessible transportation hub with wheelchair facilities.</p></div>'))
          .addTo(map.current!);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div 
        ref={mapContainer} 
        className={`w-full h-full ${className}`}
        style={{ minHeight: '400px' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-gray-600">Loading map...</div>
        </div>
      )}
    </div>
  );
}