"use client";

import FadeIn from "@/components/FadeIn";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  experience: string;
  img: string;
}

const team: TeamMember[] = [
  {
    name: "Sarah Malik",
    role: "Senior Interior Designer",
    expertise: "Luxury Residential Spaces",
    experience: "8+ Years",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Omar Hassan",
    role: "Project Manager",
    expertise: "Turnkey Execution",
    experience: "10+ Years",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Ayesha Noor",
    role: "Lead Architect",
    expertise: "Space Planning & Design",
    experience: "12+ Years",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Zain Ali",
    role: "Senior Designer",
    expertise: "Commercial Interiors",
    experience: "7+ Years",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Fatima Khan",
    role: "Material Specialist",
    expertise: "Premium Sourcing",
    experience: "9+ Years",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Hassan Raza",
    role: "Quality Assurance",
    expertise: "Finishing Excellence",
    experience: "6+ Years",
    img: "/assets/profile/img-1.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
            <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F06434' }}></span>
              Our Team
            </div>
            <h2 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Meet the Experts Behind Every Project
        </h2>
            <p className="text-[#85929D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Our diverse team of designers, architects, and specialists brings decades 
              of combined experience to every project.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, i) => (
            <FadeIn key={i} direction="up" delay={0.3 + (i * 0.15)} duration={0.6}>
              <div className="group relative bg-white border border-[#e5e7eb] rounded-[28px] overflow-hidden hover:shadow-[0_25px_70px_rgba(15,22,36,0.06)] transition-all">
                <div className="relative h-64 overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                    className="h-full w-full object-cover"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-[#214B57] font-dm-sans">
                      {member.experience}
                    </div>
                  </div>
                </div>

              <div className="p-6">
                  <h4 className="font-semibold text-[#214B57] mb-1 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  {member.name}
                </h4>
                  <p className="text-[#214B57] font-medium mb-3 text-sm font-dm-sans">{member.role}</p>
                  <div className="flex items-center gap-2 text-sm text-[#85929D] font-dm-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#214B57]" />
                    <span>{member.expertise}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

