"use client";

import StarRating from "./star-rating";

interface StarsProps {
  rating?: number;
}

function Stars({ rating = 5 }: StarsProps) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-[#F04E22]" : "text-[#4A4A4A]/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

interface TestimonialData {
  name: string;
  location: string;
  property: string;
  rating: number;
  review: string;
  img?: string;
}

interface TestimonialCardProps {
  data: TestimonialData;
}

export default function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <div className="text-center w-full max-w-xl mx-auto">
      <div>
      {data.img ? (
          <img
          src={data.img}
          alt={data.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-white shadow-[0_12px_30px_rgba(26,29,41,0.06)]"
        />
      ) : (
          <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-semibold shadow-[0_12px_30px_rgba(26,29,41,0.06)]" style={{ backgroundColor: '#214B57' }}>
          {data.name[0]}
        </div>
      )}

        <h4 className="text-[#1D1D1D] font-semibold mb-1 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
        {data.name}
      </h4>

        <p className="text-[#7F8C8D] text-sm mb-3 font-dm-sans">
        {data.property} · {data.location}
      </p>

        <div className="flex justify-center mb-4">
          <Stars rating={data.rating} />
        </div>

        <p className="text-[#7F8C8D] mt-4 leading-relaxed text-base font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          &quot;{data.review}&quot;
      </p>
      </div>
    </div>
  );
}

