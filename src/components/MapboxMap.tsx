"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapboxMapProps {
  className?: string;
}

export default function MapboxMap({ className = "" }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Set Mapbox access token
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.warn(
        "Mapbox token not found. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.",
      );
      setHasError(true);
      return;
    }

    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [24.7536, 59.437], // Tallinn, Estonia coordinates
        zoom: 12,
        pitch: 45,
        bearing: -17.6,
        antialias: true,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Wait for map to load before adding markers
      map.current.on("load", () => {
        setIsLoaded(true);

        // Add some sample markers for wheelchair accessibility in Tallinn
        if (map.current) {
          new mapboxgl.Marker({ color: "#3b82f6" })
            .setLngLat([24.7536, 59.437])
            .setPopup(
              new mapboxgl.Popup().setHTML(
                '<div class="p-2"><h3 class="font-semibold">Tallinn Old Town</h3><p>Historic area with wheelchair accessibility features.</p></div>',
              ),
            )
            .addTo(map.current);

          new mapboxgl.Marker({ color: "#10b981" })
            .setLngLat([24.76, 59.44])
            .setPopup(
              new mapboxgl.Popup().setHTML(
                '<div class="p-2"><h3 class="font-semibold">Kadriorg Park</h3><p>This area has been analyzed for surface smoothness.</p></div>',
              ),
            )
            .addTo(map.current);

          new mapboxgl.Marker({ color: "#f59e0b" })
            .setLngLat([24.745, 59.435])
            .setPopup(
              new mapboxgl.Popup().setHTML(
                '<div class="p-2"><h3 class="font-semibold">Tallinn Port</h3><p>Accessible transportation hub with wheelchair facilities.</p></div>',
              ),
            )
            .addTo(map.current);
        }
      });

      map.current.on("error", () => {
        setHasError(true);
        setIsLoaded(false);
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setHasError(true);
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

  if (hasError) {
    return (
      <div className="relative">
        <div
          className={`w-full h-full ${className}`}
          style={{ minHeight: "400px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-gray-600 mb-2">Map unavailable</div>
              <div className="text-sm text-gray-500">
                Please check your Mapbox configuration
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={mapContainer}
        className={`w-full h-full ${className}`}
        style={{ minHeight: "400px" }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-gray-600">Loading map...</div>
        </div>
      )}
    </div>
  );
}
