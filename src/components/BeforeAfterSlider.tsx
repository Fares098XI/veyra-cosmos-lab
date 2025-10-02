import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER"
}: BeforeAfterSliderProps) {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="font-display text-2xl font-bold text-center">{title}</h3>
      
      <div className="relative aspect-video rounded-lg overflow-hidden border border-border/50">
        {/* After Image (Full) */}
        <img 
          src={afterImage} 
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Divider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderValue[0]}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 border-l-2 border-r-2 border-white"></div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur text-white text-sm font-bold rounded-lg border border-white/20">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur text-white text-sm font-bold rounded-lg border border-white/20">
          {afterLabel}
        </div>
      </div>

      <div className="px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          step={1}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
