import { useTranslation } from "react-i18next";
import { SecondaryButton, Button, Observer } from "components";

export default function Reviews() {
    const { t } = useTranslation();

    return (
        <div
            className="relative bg-[#111112] pb-[100px] pt-[36px] grid grid-cols-[1.07fr_0.93fr] before:content-[''] before:block before:h-[77px]
            before:w-[100%] before:border-[2px] before:border-white before:rounded-tr-[24px] before:border-l-0 before:border-b-0 before:absolute
            before:top-[3.7px] before:right-[calc(100vw/2-200px)] before:z-20 xl:grid-cols-[1fr_1fr] md:before:right-[calc(100vw/2-120px)] md:pb-[80px]
            md:before:h-[70px]"
        >
            <div className="pl-[calc(100vw/2-560px)] py-20 xl:pl-[28px]">
                <Observer>
                    <>
                        <span className="bg-text font-['Intro'] text-[64px] uppercase">30+</span>
                        <h2 className="text-[32px] font-['Intro'] uppercase text-white mt-[11px] mb-[28px] md:text-[30px] md:mb-[16px]">{t("HappyClients")}</h2>
                        <p className="max-w-[386px] text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] md:max-w-[306px]">
                            {t("CheckOut1")} <span className="text-white">{t("CheckOut2")}</span>
                        </p>
                        <div className="mt-[46px] grid grid-cols-[195px_294px] gap-[15px] md:mtt-[36px]">
                            <SecondaryButton
                                text={t("Reviews1")}
                                onClick={() => {
                                    window.open("https://www.fl.ru/users/balzary/opinions/?sort=1&period=&author=0#op_head", "_blank");
                                }}
                            />
                            <Button
                                text={t("Reviews2")}
                                className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112]"
                                onClick={() => {
                                    window.open("https://freelance.habr.com/freelancers/hillel1408/opinions", "_blank");
                                }}
                            />
                        </div>
                    </>
                </Observer>
            </div>
            <div className="bg-reviews bg-[rgba(35,38,57,0.1)] border border-[#2b2b2d] rounded-l-[24px] border-r-0 lg:-ml-[50px] md:-ml-[180px]"></div>
        </div>
    );
}
