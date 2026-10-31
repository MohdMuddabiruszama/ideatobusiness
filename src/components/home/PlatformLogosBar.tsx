import React from 'react';

export function PlatformLogosBar() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 px-6 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left Label */}
        <div className="shrink-0 text-center md:text-left">
          <p className="text-xs font-bold text-slate-800 leading-tight">
            Launch &amp; Sell on
          </p>
          <p className="text-xs font-bold text-slate-800 leading-tight">
            Leading Platforms
          </p>
        </div>

        {/* Logos Flex Row */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 lg:gap-10">
          {/* Meesho */}
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-black text-[#9B206E] tracking-tight lowercase font-sans">
              meesho
            </span>
          </div>

          {/* Amazon */}
          <div className="flex flex-col items-center justify-center relative -mb-1">
            <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tighter leading-none">
              amazon
            </span>
            {/* Curved Smile Arrow */}
            <svg
              className="w-10 h-2.5 text-[#FF9900] -mt-0.5"
              viewBox="0 0 50 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3C14 10 32 10 44 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M40 2L46 4L42 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Flipkart */}
          <div className="flex items-center gap-1.5">
            <span className="text-lg sm:text-xl font-black italic text-[#2874F0] tracking-tight">
              Flipkart
            </span>
            {/* Yellow Shopping Bag Badge */}
            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#FFE11B] text-[#2874F0] font-bold text-[10px] shadow-xs">
              🛍️
            </div>
          </div>

          {/* Shopify */}
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.337 2.001c-.131-.005-.286.071-.383.176l-1.93 2.057c-.122.13-.257.414-.257.575v.004l-1.905.589c-.643.199-1.287.398-1.928.599a.465.465 0 0 0-.317.387c-.361 2.913-1.077 8.647-1.442 11.564a.455.455 0 0 0 .195.421c1.378 1.054 4.09 3.097 5.768 4.298a.459.459 0 0 0 .524.015c1.785-1.127 4.908-3.13 6.697-4.256a.46.46 0 0 0 .216-.402c-.225-2.73-.85-10.435-1.075-13.167a.46.46 0 0 0-.274-.383l-3.328-1.748a.937.937 0 0 0-.557-.132zm-2.094 3.012c.162-.173.344-.225.438-.222.093.003.272.064.428.243.313.359.73 1.395.441 2.476l-1.636.505c.084-.96.177-2.83.329-2.992z" />
            </svg>
            <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              shopify
            </span>
          </div>

          {/* Google */}
          <div className="flex items-center font-bold text-base sm:text-lg tracking-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8.75c-1.398 0-2.454.774-3.376 1.838-.768.887-1.42 2.012-1.957 3.056-.479.932-.89 1.796-1.334 2.378-.445.58-.934.828-1.533.828-.973 0-1.8-.827-1.8-1.85 0-.462.181-.926.494-1.325.32-.407.82-1.002 1.488-1.848 1.107-1.403 2.502-3.21 4.25-4.137C8.423 7.07 9.774 6.75 11.2 6.75c1.889 0 3.528.618 4.747 1.745 1.258 1.164 1.953 2.766 1.953 4.505 0 1.023-.827 1.85-1.8 1.85-.599 0-1.088-.248-1.533-.828-.444-.582-.855-1.446-1.334-2.378-.537-1.044-1.189-2.169-1.957-3.056C14.354 9.524 13.398 8.75 12 8.75z" />
            </svg>
            <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Meta
            </span>
          </div>

          {/* And more... */}
          <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
            and more...
          </span>
        </div>
      </div>
    </div>
  );
}

