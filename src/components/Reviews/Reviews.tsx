import { useTranslation } from "react-i18next";
import { SecondaryButton, Button, Observer } from "components";

export default function Reviews() {
    const { t } = useTranslation();

    return (
        <div
            className="intro-before relative overflow-hidden bg-[#111112] pb-[100px] pt-[36px] grid grid-cols-[1.07fr_0.93fr] before:content-[''] before:block before:h-[77px]
            before:w-[100%] before:border-[2px] before:border-white before:rounded-tr-[24px] before:border-l-0 before:border-b-0 before:absolute
            before:top-[3.7px] before:right-[calc(100vw/2-200px)] before:z-20 xl:grid-cols-[1fr_1fr] md:before:right-[calc(100vw/2-120px)] md:pb-[80px]
            md:before:h-[70px] sm:grid-cols-[1fr] sm:before:top-[0px] sm:before:w-[345px] sm:pt-0"
        >
            <div className="pl-[calc(100vw/2-560px)] py-20 xl:pl-[28px] sm:px-5 sm:pt-[54px] sm:pb-[28px]">
                <Observer>
                    <>
                        <span className="bg-text font-['Intro'] text-[64px] uppercase">30+</span>
                        <h2 className="text-[32px] font-['Intro'] uppercase text-white mt-[11px] mb-[28px] md:text-[30px] md:mb-[16px] sm:text-[28px]">
                            {t("HappyClients")}
                        </h2>
                        <p className="max-w-[386px] text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] md:max-w-[306px] sm:text-[16px]">
                            {t("CheckOut1")} <span className="text-white">{t("CheckOut2")}</span>
                        </p>
                        <div className="mt-[46px] grid grid-cols-[195px_294px] gap-[15px] md:mt-[36px] sm:grid-cols-[1fr] sm:gap-5 sm:mt-[28px]">
                            <SecondaryButton
                                text={t("Reviews1")}
                                onClick={() => {
                                    window.open("https://www.fl.ru/users/balzary/opinions/?sort=1&period=&author=0#op_head", "_blank");
                                }}
                            />
                            <Button
                                text={t("Reviews2")}
                                className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112] sm:h-[57px]"
                                onClick={() => {
                                    window.open("https://freelance.habr.com/freelancers/hillel1408/opinions", "_blank");
                                }}
                            />
                        </div>
                    </>
                </Observer>
            </div>
            <div className="bg-reviews bg-[rgba(35,38,57,0.1)] border border-[#2b2b2d] rounded-l-[24px] border-r-0 lg:-ml-[50px] md:-ml-[240px] sm:h-[350px] sm:ml-5"></div>
        </div>
    );
}
