import { urlForImage } from "@/lib/utils";
import Image from "next/image";

export const portableTextComponents = {
    block: {
        normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-neutral-400">{children}</p>,
        h1: ({ children }: any) => <h1 className="text-4xl font-bold  mb-6 mt-8">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-bold  mb-5 mt-7">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold  mb-4 mt-6">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold  mb-3 mt-5">{children}</h4>,
        h5: ({ children }: any) => <h5 className="text-lg font-bold  mb-2 mt-4">{children}</h5>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-yellow-600 pl-6 py-2 my-6 italic text-gray-700 bg-yellow-50">
                {children}
            </blockquote>
        ),
        center: ({ children }: any) => <p className="text-center">{children}</p>,
        right: ({ children }: any) => <p className="text-right">{children}</p>,
        justify: ({ children }: any) => <p className="text-justify">{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-400">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-neutral-400">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
        number: ({ children }: any) => <li className="ml-4">{children}</li>,
    },
    marks: {
        link: ({ children, value }: any) => (
            <a href={value?.href} className="text-yellow-600 hover:text-yellow-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        strong: ({ children }: any) => <strong className="font-bold text-neutral-200">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
    },
    types: {
        image: ({ value }: any) => (
            <div className="my-8 rounded-lg overflow-hidden shadow-md">
                <Image
                    src={urlForImage(value)?.url() as string}
                    alt="Content image"
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                />
            </div>
        ),
    },
};