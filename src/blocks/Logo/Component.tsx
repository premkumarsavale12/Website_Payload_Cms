"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

interface LogoItem {
    logo: {
        url: string;
        alt?: string;
        width?: number;
        height?: number;
    };
    id?: string;
}

interface LogoBlockProps {
    logos: LogoItem[];
}

export const Logo: React.FC<LogoBlockProps> = ({ logos }) => {
    if (!logos || logos.length === 0) return null;

    return (
        <section className="py-7 bg-white">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        // disableOnInteraction: false,
                    }}

                    className="w-full"
                >
                    {logos.map((item, index) => {
                        const { logo } = item;
                        if (!logo?.url) return null;

                        return (
                            <SwiperSlide key={item.id || index} className="flex items-center justify-center">
                                <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                    <Image
                                        src={logo.url}
                                        alt={logo.alt || 'Partner Logo'}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};
