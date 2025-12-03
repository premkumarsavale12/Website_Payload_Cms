
import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import React from "react";


interface SimpleBlockProps {

    richText: any;
    media: any;

}

export const SimpleBlock: React.FC<SimpleBlockProps> = ({ richText, media }) => {

    return (

        <>
            <div className=" p-4 flex flex-col gap-8 md:flex-row md:justify-center md:items-center">

                <div className="max-w-[48rem] flex items-center justify-center text-center text-white
                  bg-black border border-yellow-300 shadow-md rounded-lg p-4">

                    {richText && (
                        <RichText className="mb-0" data={richText} enableGutter={false} />
                    )}

                </div>
            </div>

            {media && (

                <div className="flex justify-center items-center">



                    <Media resource={media}  />

                </div>



            )}


        </>
    )
}
