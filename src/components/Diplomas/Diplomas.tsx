import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

export default function Diplomas() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: "auto",
            spacing: 35,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        animationEnded(slider) {
            slider.update();
        },
    });

    const sert = [{ url: "sert-1.webp" }, { url: "sert-2.webp" }, { url: "sert-3.webp" }, { url: "sert-4.webp" }];

    return (
        <div className="pb-[100px] bg-[#111112]">
            <div className="container grid grid-cols-[384px_1fr] gap-[50px]">
                <div className="flex flex-col justify-between gap-[60px]">
                    <div>
                        <h2 className="font-['Intro'] text-[32px] leading-[154%] text-white uppercase">
                            ДИПЛОМЫ <br /> и СЕРТИФИКАТЫ
                        </h2>
                        <div className="flex gap-5 mt-[26px]">
                            <button className="group" onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}>
                                <svg width="80" height="16" viewBox="0 0 80 16">
                                    <path
                                        opacity="0.4"
                                        d="M0.491135 8.37361C0.100609 7.98309 0.100609 7.34992 0.491135 6.9594L6.85509 0.595436C7.24562 0.204912 7.87878 0.204912 8.26931 0.595436C8.65984 0.98596 8.65984 1.61913 8.26931 2.00965L2.61246 7.6665L8.26931 13.3234C8.65984 13.7139 8.65984 14.347 8.26931 14.7376C7.87878 15.1281 7.24562 15.1281 6.85509 14.7376L0.491135 8.37361ZM79.0898 8.6665H1.19824V6.6665H79.0898V8.6665Z"
                                        fill="white"
                                        className="group-hover:opacity-[1] duration-200"
                                    />
                                </svg>
                            </button>
                            <button className="group rotate-180" onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}>
                                <svg width="80" height="16" viewBox="0 0 80 16">
                                    <path
                                        opacity="0.4"
                                        d="M0.491135 8.37361C0.100609 7.98309 0.100609 7.34992 0.491135 6.9594L6.85509 0.595436C7.24562 0.204912 7.87878 0.204912 8.26931 0.595436C8.65984 0.98596 8.65984 1.61913 8.26931 2.00965L2.61246 7.6665L8.26931 13.3234C8.65984 13.7139 8.65984 14.347 8.26931 14.7376C7.87878 15.1281 7.24562 15.1281 6.85509 14.7376L0.491135 8.37361ZM79.0898 8.6665H1.19824V6.6665H79.0898V8.6665Z"
                                        fill="white"
                                        className="group-hover:opacity-[1] duration-200 -translate-y-[-0.6px]"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="flex gap-1 items-end">
                            <span className="text-[32px] leading-[91%] text-white">{currentSlide + 1}</span>
                            <span className="text-[20px] leading-[91%] text-[rgba(255,255,255,0.5)]">/</span>
                            <span className="text-[20px] leading-[91%] text-[rgba(255,255,255,0.5)]">{sert.length}</span>
                        </p>
                        <p className="mt-[30px] pl-[30px] text-[20px] leading-[145%] flex flex-col">
                            <span className="text-white">Сертификат Google ADS по поиску.</span>
                            <span className="text-[rgba(255,255,255,0.7)]">Обучался в Convert Monster.</span>
                        </p>
                        <div className="rounded-bl-[24px] border-b-[2px] border-l-[2px] pb-11"></div>
                    </div>
                </div>
                <div ref={sliderRef} className="keen-slider items-end snap-start max-w-[686px] overflow-hidden">
                    {sert.map((item, index) => (
                        <div
                            key={index}
                            className={classNames("keen-slider__slide !w-[159px] !h-[225px] !min-w-[159px] !min-h-[225px]", {
                                "!w-[345px] !h-[446px] !min-w-[345px] !min-h-[446px]": index === currentSlide,
                            })}
                        >
                            <img src={`images/${item.url}`} alt="" className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
