import Image from "next/image";

export default function AboutMe () {
    return(
        <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40">
            <h1 className="py-4 md:py-8 lg:py-12 text-center text-xl md:text-2xl lg:text-3xl font-bold">
                A Little <span className="text-violet-600">About Me</span>
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* IMAGE */}
                <div className="basis-1/3 flex justify-center lg:justify-start">
                <Image
                    src="/roundedRaja.png"
                    alt="Raja Muhammad Farhan Zahputra"
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100px, (max-width: 1024px) 200px, 300px"
                    className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[420px] h-auto"
                />
                </div>
                {/* TEXT */}
                <div className="text-justify text-base md:text-lg lg:text-xl basis-2/3">
                    <p>I&apos;m an Informatics Engineering graduate from Politeknik Negeri Batam with a strong interest in software development. I enjoy building intuitive and reliable user experiences across mobile and web platforms, with a focus on clean architecture and maintainable code.</p>
                    <p className="pt-2">Beyond technical skills, I value leadership and collaboration. My experience as a chairman of a student organization has shaped the way I approach teamwork, communication, and problem-solving.</p>
                </div>
            </div>
        </div>
    )
}