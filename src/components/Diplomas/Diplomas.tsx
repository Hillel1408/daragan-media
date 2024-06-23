import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { DiplomasText } from "components";
import classNames from "classnames";
import { useMatchMedia } from "hooks";
import { useTranslation } from "react-i18next";
import "swiper/css";

export default function Diplomas() {
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const [active, setActive] = useState(1);
    const swiperRef = useRef<SwiperCore>();

    const { t } = useTranslation();

    const sert = [
        { url: "sert-1.webp", text1: t("Diplomas2"), text2: t("Diplomas3") },
        { url: "sert-2.webp", text1: t("Diplomas4"), text2: "-" },
        { url: "sert-3.webp", text1: t("Diplomas5"), text2: t("Diplomas6") },
        { url: "sert-4.webp", text1: t("Diplomas7"), text2: "-" },
    ];

    return (
        <div className="pb-[100px] bg-[#111112] md:pb-20 sm:pb-[64px]">
            <div className="container grid grid-cols-[384px_1fr] gap-[50px] lg:grid-cols-[284px_1fr] md:grid-cols-[1fr] md:gap-[40px] sm:gap-[30px]">
                <div className="flex flex-col justify-between gap-[60px] md:gap-[30px]">
                    <div>
                        <h2 className="font-['Intro'] text-[32px] leading-[154%] text-white uppercase sm:text-[28px]">{t("Diplomas1")}</h2>
                        <div className="flex gap-5 mt-[26px]">
                            <button className="group" onClick={() => swiperRef.current?.slidePrev()}>
                                <svg width="80" height="16" viewBox="0 0 80 16">
                                    <path
                                        opacity="0.4"
                                        d="M0.491135 8.37361C0.100609 7.98309 0.100609 7.34992 0.491135 6.9594L6.85509 0.595436C7.24562 0.204912 7.87878 0.204912 8.26931 0.595436C8.65984 0.98596 8.65984 1.61913 8.26931 2.00965L2.61246 7.6665L8.26931 13.3234C8.65984 13.7139 8.65984 14.347 8.26931 14.7376C7.87878 15.1281 7.24562 15.1281 6.85509 14.7376L0.491135 8.37361ZM79.0898 8.6665H1.19824V6.6665H79.0898V8.6665Z"
                                        fill="white"
                                        className="group-hover:opacity-[1] duration-200"
                                    />
                                </svg>
                            </button>
                            <button className="next group rotate-180" onClick={() => swiperRef.current?.slideNext()}>
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
                            <span className="text-[32px] leading-[91%] text-white">{active + 1}</span>
                            <span className="text-[20px] leading-[91%] text-[rgba(255,255,255,0.5)]">/</span>
                            <span className="text-[20px] leading-[91%] text-[rgba(255,255,255,0.5)]">{sert.length}</span>
                        </p>
                        {isDesktop && <DiplomasText text1={sert[active].text1} text2={sert[active].text2} />}
                    </div>
                </div>
                <div className="items-end snap-start max-w-[686px] overflow-hidden">
                    <Swiper
                        onBeforeInit={(swiper: SwiperCore) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper: SwiperCore) => {
                            setActive(swiper.realIndex);
                        }}
                        slidesPerView={1}
                        loop
                        spaceBetween={35}
                        className="mySwiper"
                        breakpoints={{
                            551: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {sert.map((item, index) => (
                            <SwiperSlide>
                                <div key={index} className={classNames("h-full relative")}>
                                    <img src={`images/${item.url}`} alt="" className="object-cover w-full h-full" />
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.4)]"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {!isDesktop && <DiplomasText text1={sert[active].text1} text2={sert[active].text2} />}
            </div>
        </div>
    );
}
