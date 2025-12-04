"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

interface MediaItem {
    media: {
        url: string;
        alt?: string;
    },
}

interface PartnerBlock {
    logos: MediaItem[];
    Heading: string;
}


const chunkArray = (array: MediaItem[], size: number) => {

    const result: MediaItem[][] = [];

    for (let i = 0; i < array.length; i += size) {

        result.push(array.slice(i, i + size));

    }

    return result;

}

export const Partner: React.FC<PartnerBlock> = ({ logos, Heading }) => {


    const slides = chunkArray(logos, 3);

    return (

        
      <>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">{Heading}</h2>
        </div>
         <Swiper

            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{ delay: 3000 }}
            spaceBetween={10}
        >
            {slides.map((items, index) => (

                <SwiperSlide key={index}>

                    <div className="flex justify-around items-center bg-white p-10 gap-[5px] " >

                        {items.map((item, i) => {

                            const file = item.media;

                            if (!file) return null;


                            return (
                                <div className="shadow-lg p-2 rounded-lg bg-white" key={i}>
                                    <Image

                                        width={300}
                                        height={300}
                                        src={file.url}
                                        alt={file.alt || "Logo"}
                                    />
                                </div>

                            );
                        })}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      
      </>
    )
}
