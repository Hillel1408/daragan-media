import { useTranslation } from "react-i18next";
import { Observer } from "components";

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#111112] pb-[145px] overflow-hidden md:pb-[120px] sm:pb-[100px]">
            <div className="container">
                <Observer>
                    <h2 className="font-['Intro'] text-[32px] leading-[32px] text-white text-center mb-8 md:text-[30px] md:mb-[17px] sm:text-[28px] sm:mb-3">
                        {t("AboutMe")}
                    </h2>
                </Observer>
                <Observer>
                    <div className="max-w-[1080px] text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] text-center sm:text-[16px]">
                        <p className="mb-6">{t("HiThere1")}</p>
                        <p>{t("HiThere2")}</p>
                    </div>
                </Observer>
            </div>
            <div
                className="bg-about-me border border-[#2b2b2d] border-l-0 border-r-0 mt-[100px] pt-[55px] pb-[38px] bg-[rgba(35,38,57,0.1)] before:content-['']
                before:block before:h-[100px] before:w-[100%] before:border-[2px] before:border-white before:rounded-bl-[24px] relative before:border-r-0
                before:border-t-0 before:absolute before:-bottom-[42.3px] before:left-[calc(100vw/2-364px)] md:mt-[45px] md:py-[45px] md:before:hidden"
            >
                <div className="container">
                    <div className="max-w-[545px] ml-auto md:ml-0 md:max-w-none md:text-center">
                        <Observer>
                            <h2 className="text-[32px] uppercase text-white font-['Intro'] mb-[32px] sm:text-[28px] sm:mb-3">{t("HowIWork")}</h2>
                        </Observer>
                        <ul className="text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] flex flex-col gap-[22px] [&>li>span]:text-white [&>li>span]:font-bold sm:gap-3 sm:text-[16px]">
                            <Observer>
                                <li>
                                    <span className="text-white font-bold">{t("HonestyAndTransparency1")}</span> {t("HonestyAndTransparency2")}
                                </li>
                            </Observer>
                            <Observer>
                                <li>
                                    <span className="text-white font-bold">{t("NoHaste1")}</span> {t("NoHaste2")}
                                </li>
                            </Observer>
                            <Observer>
                                <li>
                                    <span className="text-white font-bold">{t("Professionalism1")}</span> {t("Professionalism2")}
                                </li>
                            </Observer>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
