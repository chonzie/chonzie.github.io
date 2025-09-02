interface DayInfoProps {
  day: number;
  distance: string;
  route: string;
  map: string;
  blip: string;
}

export default function DayInfo({ day, distance, route, map, blip }: DayInfoProps) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border-r border-white/20 p-4 sm:p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Day - Row 1 on mobile, Col 1 on desktop */}
        <div className="md:col-span-1 row-span-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Day {day}
          </h2>
        </div>
        
        {/* Map Button - Row 2 on mobile, Col 2 on desktop */}
        <div className="md:col-span-1 md:row-span-1 flex md:justify-end">
          <a
            href={map}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-fit px-4 py-2 bg-transparent border border-white/70 hover:bg-white/10 text-white font-semibold rounded text-sm transition-colors duration-200 w-full md:w-auto justify-center"
          >
            <span className="mr-2">📍</span> View Map
          </a>
        </div>
        
        {/* Route - Row 3 on mobile, Row 2 Col 1 on desktop */}
        <div className="md:col-span-1 row-span-1">
          <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-blue-200 leading-tight">
            {route}
          </h3>
        </div>
        
        {/* Distance - Row 4 on mobile, Row 2 Col 2 on desktop */}
        <div className="md:col-span-1 row-span-1 flex items-center md:justify-end">
          <span className="text-sm sm:text-base lg:text-lg text-blue-200 font-semibold">
            {distance}
          </span>
        </div>
        
        {/* Blip - Row 5 on mobile, Row 3 Col 1-2 on desktop */}
        <div className="col-span-1 md:col-span-2 row-span-1 mt-2">
          <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed">
            {blip}
          </p>
        </div>
      </div>
    </div>
  );
}
