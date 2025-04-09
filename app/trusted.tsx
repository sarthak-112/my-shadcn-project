'use client'

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const companies = [
  { name: "coca-cola", logo: "/logo-1.svg" },
  { name: "amazon", logo: "/logo-2.svg" },
  { name: "forbes", logo: "/logo-3.svg" },
  { name: "booking", logo: "/logo-4.svg" },
  { name: "microsoft", logo: "/logo-5.svg" },
  { name: "paypal", logo: "/logo-6.svg" },
  { name: "redbull", logo: "/logo-7.svg" },
  { name: "salesforce", logo: "/logo-8.svg" },
  { name: "spotify", logo: "/logo-9.svg" },
  { name: "lift", logo: "/logo-4.svg" },
];

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="flex-[0_0_150px] min-w-0 relative px-2">
      <div className="bg-white rounded-lg p-4">
        <Image
          priority 
          width={80}
          height={80}    
          src={logo} 
          alt={`${name} logo`} 
          className="w-16 h-16 md:w-24 md:h-24 object-contain"
        />
      </div>
    </div>
  );
};

const Trusted = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps'
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="w-full bg-black py-8 md:py-12">
      <div className="mb-6 md:mb-8 text-center px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">
          Trusted by industry leaders worldwide
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Our platform is used by the world&apos;s most innovative companies.
        </p>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-2 md:px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {companies.map((company, idx) => (
              <CompanyLogo key={`${company.name}-${idx}`} {...company} />
            ))}
          </div>
        </div>
        
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black p-1.5 md:p-2 rounded-full shadow-lg border border-white/20"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </button>
        
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black p-1.5 md:p-2 rounded-full shadow-lg border border-white/20"
          onClick={scrollNext}
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Trusted;