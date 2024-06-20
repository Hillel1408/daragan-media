import { useTranslation } from "react-i18next";
import { SecondaryButton, Observer } from "components";

export default function Intro() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#111112] overflow-hidden relative">
            <div
                className="bg-intro intro-before pt-[122px] pb-[90px] bg-[rgba(35,38,57,0.1)] relative z-10 pl-[calc(100vw/2-560px)] pr-[calc(100vw/2-560px)]
                before:content-[''] before:block before:h-[77px] before:w-[100%] before:border-[2px] before:border-white before:rounded-tr-[24px]
                before:border-l-0 before:border-b-0 before:absolute before:top-[61px] before:right-[calc(100vw/2-310px)] before:z-20 border border-[#2b2b2d]
                border-l-0 border-r-0 xl:px-[28px] md:pt-[84px] md:pb-[82px] md:before:h-[64px] md:before:top-6 md:before:right-[calc(100vw/2-226px)]
                md:bg-[length:500px] sm:pt-[89px] sm:pb-[350px] sm:before:top-[41px] sm:before:w-[345px]"
            >
                <Observer className="sm:text-center">
                    <>
                        <h1 className="font-['Intro'] text-[55px] leading-[136%] uppercase text-white mb-5 max-w-[500px] md:text-[40px] md:mb-[6px]">
                            {t("FrontendDevelopment")}
                        </h1>
                        <p className="text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] max-w-[450px] md:max-w-[300px] sm:max-w-[400px] sm:mx-auto sm:text-[16px]">
                            {t("SeasonedFrontend")}
                        </p>
                        <SecondaryButton
                            text={t("MyContacts")}
                            className="w-[255px] mt-[38px] md:mt-[29px] sm:mt-[21px]"
                            onClick={() => {
                                document.querySelector(".feedback")?.scrollIntoView({ block: "center", behavior: "smooth" });
                            }}
                        />
                    </>
                </Observer>
            </div>
            <img src="images/bg-2.svg" width="297" height="297" alt="" className="absolute left-0 top-[128px] my-blur" />
        </div>
    );
}
