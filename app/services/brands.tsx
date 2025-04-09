"use client";
import { cn } from '@/lib/utils'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const brands = [
    {
      name: "Adidas",
      image: "/adidas.svg",
      className: "w-40 h-40"
    },
    {
      name: "Airbnb",
      image: "/airbnb.svg",
      className: "w-40 h-40"
    },
    {
      name: "Audi",
      image: "/audi.svg",
      className: "w-40 h-40"
    },
    {
      name: "PayPal",
      image: "/paypal.svg",
      className: "w-40 h-40"
    },
    {
      name: "Sony",
      image: "/sony.svg",
      className: "w-40 h-40"
    },
    {
      name: "Under Armour",
      image: "/under-armour.svg",
      className: "w-40 h-40"
    },
    {
      name: "Red Bull",
      image: "/redbull.svg",
      className: "w-40 h-40"
    },
    {
      name: "Spalding",
      image: "/spalding.svg",
      className: "w-40 h-40"
    },
    {
      name: "Visa",
      image: "/visa.svg",
      className: "w-40 h-40"
    },
    {
      name: "Nord",
      image: "/nord.svg",
      className: "w-40 h-40"
    },
    {
      name: "Zara",
      image: "/zara.svg",
      className: "w-40 h-40"
    }
];

const BrandCard = ({
    name,
    image,
    className
} : { 
    name: string;
    image: string;
    className: string;
}) => {
    return (
        <div className={cn("relative cursor-pointer overflow-hidden mx-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow")}>
            <div className='flex flex-row items-center'>
                <div className={cn("relative", className)}>
                    <Image
                        src={image}
                        alt={name}
                        width={160}
                        height={160}
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

const Brands = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const itemsPerView = 3;

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoRotating) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === brands.length - itemsPerView ? 0 : prevIndex + 1
                );
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoRotating]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === brands.length - itemsPerView ? 0 : prevIndex + 1
        );
        setIsAutoRotating(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? brands.length - itemsPerView : prevIndex - 1
        );
        setIsAutoRotating(false);
    };

    const visibleBrands = brands.slice(currentIndex, currentIndex + itemsPerView);

    return ( 
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden py-16 bg-black'>
      <h2 className="text-3xl font-bold text-white mb-12">Our Brands</h2>
      
      <div className="relative w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            {visibleBrands.map((brand, index) => (
              <BrandCard key={index} {...brand} />
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
        >
          <PiCaretLeftBold size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
        >
          <PiCaretRightBold size={24} />
        </button>
      </div>
    </div> );
}
 
export default Brands;