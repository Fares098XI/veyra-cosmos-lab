import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Info } from 'lucide-react';

interface Hotspot {
  location: string;
  coordinates: [number, number];
  status: string;
  summary: string;
  impact: string;
  action: string;
  color: string;
}

interface MapComponentProps {
  hotspots: Hotspot[];
}

export default function MapComponent({ hotspots }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [needsToken, setNeedsToken] = useState(true);

  useEffect(() => {
    // Check if token is needed
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      setMapboxToken(storedToken);
      setNeedsToken(false);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [0, 20],
      zoom: 2,
      projection: 'globe' as any,
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add atmosphere
      map.current.setFog({
        color: 'rgb(11, 37, 69)',
        'high-color': 'rgb(11, 61, 145)',
        'horizon-blend': 0.1,
      });

      // Add markers for each hotspot
      hotspots.forEach((hotspot) => {
        const el = document.createElement('div');
        el.className = 'hotspot-marker';
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.cursor = 'pointer';
        el.style.transition = 'transform 0.2s';
        
        if (hotspot.color === 'red') {
          el.style.backgroundColor = '#FC3D21';
          el.style.boxShadow = '0 0 20px rgba(252, 61, 33, 0.8)';
        } else if (hotspot.color === 'orange') {
          el.style.backgroundColor = '#F97316';
          el.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.8)';
        } else {
          el.style.backgroundColor = '#22C55E';
          el.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.8)';
        }

        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
        });

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="padding: 8px; background: rgba(11, 37, 69, 0.95); color: white; border-radius: 8px; max-width: 250px;">
            <h3 style="font-weight: bold; margin-bottom: 8px; font-size: 16px;">${hotspot.location}</h3>
            <div style="background: ${hotspot.color === 'red' ? 'rgba(252, 61, 33, 0.2)' : hotspot.color === 'orange' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(34, 197, 94, 0.2)'}; color: ${hotspot.color === 'red' ? '#FC3D21' : hotspot.color === 'orange' ? '#F97316' : '#22C55E'}; padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 8px; font-size: 11px; font-weight: bold;">
              ${hotspot.status}
            </div>
            <p style="font-size: 13px; margin-bottom: 8px; line-height: 1.4;">${hotspot.summary}</p>
            <p style="font-size: 12px; color: rgba(255, 255, 255, 0.7);"><strong>Impact:</strong> ${hotspot.impact}</p>
          </div>`
        );

        new mapboxgl.Marker(el)
          .setLngLat(hotspot.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, hotspots]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).elements.namedItem('token') as HTMLInputElement;
    const token = input.value.trim();
    if (token) {
      localStorage.setItem('mapbox_token', token);
      setMapboxToken(token);
      setNeedsToken(false);
    }
  };

  if (needsToken) {
    return (
      <div className="relative aspect-[16/9] bg-card/40 rounded-xl overflow-hidden border border-border/50 flex items-center justify-center p-8">
        <div className="max-w-md text-center space-y-4">
          <Info className="w-12 h-12 mx-auto text-accent" />
          <h3 className="font-display text-xl font-bold">Mapbox Token Required</h3>
          <p className="text-sm text-muted-foreground">
            Enter your Mapbox public token to view the interactive map. Get one free at{' '}
            <a
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-3">
            <input
              type="text"
              name="token"
              placeholder="pk.eyJ1..."
              className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Load Map
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border/50">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
}
