import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Diplomas() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 35,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <div className="pb-[100px] bg-[#111112]">
            <div className="container grid grid-cols-[384px_1fr] gap-[50px]">
                <div>
                    <h2 className="font-['Intro'] text-[32px] leading-[154%] text-white uppercase">
                        ДИПЛОМЫ <br /> и СЕРТИФИКАТЫ
                    </h2>
                    <button className="" onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}>
                        -
                    </button>
                    <button className="" onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}>
                        +
                    </button>
                </div>
                <div ref={sliderRef} className="keen-slider max-w-[686px] overflow-hidden">
                    <div className="keen-slider__slide">1</div>
                    <div className="keen-slider__slide">2</div>
                    <div className="keen-slider__slide">3</div>
                    <div className="keen-slider__slide">4</div>
                    <div className="keen-slider__slide">5</div>
                </div>
            </div>
        </div>
    );
}
