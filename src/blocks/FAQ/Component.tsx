import RichText from "@/components/RichText";

export const FAQ = (props: any) => {

    const items = Array.isArray(props.items) ? props.items : [];

    return (



        items.map((item: any, index: number) => (

            <div
                key={item.id}
                className="bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-gray-700/60  shadow-xl hover:shadow-3xl rounded-2xl p-7 mb-6  w-full max-w-xl mx-auto
         transition-all duration-300  hover:-translate-y-1 hover:border-gray-500/50 "
            >
                <h3
                    className=" text-2xl font-semibold text-white  mb-4   tracking-tight transition-colors duration-200 hover:text-blue-400 "
                >
                    {item.Question}
                </h3>

                <div className="text-gray-300 text-base leading-relaxed">
                    {item.richText && (
                        <RichText
                            className="prose prose-invert max-w-none"
                            data={item.richText}
                            enableGutter={false}
                        />
                    )}
                </div>
            </div>
        ))

    )
}