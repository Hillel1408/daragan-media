import classNames from "classnames";
import Observer from "components/Observer/Observer";
import { useTranslation } from "react-i18next";

export default function Experience() {
    const { t } = useTranslation();

    const list = [
        {
            href: "https://webmobil-agency.ru/",
            hrefText: t("DvgProject"),
            title: t("DvgProject3"),
            text: t("DvgProject4"),
            stack: t("DvgProject5"),
            date: [t("DvgProject1"), t("DvgProject2")],
        },
        {
            href: "#",
            hrefText: t("Freelancer"),
            title: t("Freelancer3"),
            text: t("Freelancer4"),
            stack: t("Freelancer5"),
            date: [t("Freelancer1"), t("Freelancer2")],
        },
        {
            href: "https://hawkingbros.com/",
            hrefText: t("Hawkingbros"),
            title: t("Hawkingbros3"),
            text: t("Hawkingbros4"),
            stack: t("Hawkingbros5"),
            date: [t("Hawkingbros1"), t("Hawkingbros2")],
        },
        {
            href: "https://only.digital/",
            hrefText: t("OnlyDigital"),
            title: t("OnlyDigital3"),
            text: t("OnlyDigital4"),
            stack: t("OnlyDigital5"),
            date: [t("OnlyDigital1"), t("OnlyDigital2")],
        },

        {
            href: "https://gb.ru/",
            hrefText: t("GeekBrains"),
            title: t("GeekBrains3"),
            text: t("GeekBrains4"),
            stack: t("GeekBrains5"),
            date: [t("GeekBrains1"), t("GeekBrains2")],
        },
    ];
    return (
        <div className="pb-[100px] bg-[#111112] md:pb-20 sm:pb-[64px]">
            <div className="container">
                <h2 className="font-['Intro'] text-[32px] leading-[154%] text-white uppercase text-center mb-8 sm:text-[28px]">{t("Experience")}</h2>
                <div className="border-[#2B2B2D] border pt-[67px] px-[74px] pb-[71px] rounded-[37px] relative overflow-hidden md:py-[41px] md:pl-[26px] md:pr-[36px] sm:-mx-5 sm:rounded-none sm:border-x-0 sm:pl-0">
                    {list.map((item, index) => (
                        <Observer key={index} className2="pl-10 relative z-30">
                            <div className="grid grid-cols-[209px_1fr] relative md:grid-cols-[180px_1fr] sm:grid-cols-[1fr]">
                                <p className="font-medium text-[18px] leading-[29px] text-white opacity-70 sm:hidden">
                                    {item.date[0]} — <br />
                                    {item.date[1]}
                                </p>
                                <div
                                    className={classNames(
                                        "text-[18px] leading-[29px] text-white pl-20 relative pb-[28px] md:pl-10 sm:pl-[32px] sm:text-[16px]",
                                        index === list.length - 1 ? "" : "border-l",
                                    )}
                                >
                                    <p className="font-medium text-[18px] leading-[29px] text-white opacity-70 hidden sm:block sm:mb-[11px]">
                                        {item.date[0]} — <br />
                                        {item.date[1]}
                                    </p>
                                    <a href={item.href} className="font-medium underline" target="_blank">
                                        {item.hrefText}
                                    </a>
                                    <p className="font-medium mt-2">{item.title}</p>
                                    <p className="opacity-80">{item.text}</p>
                                    <p className="opacity-80">{item.stack}</p>
                                    <div className="w-[35px] h-[35px] rounded-full bg-[#232639] absolute left-0 top-0 -translate-x-1/2 flex justify-center items-center">
                                        <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </Observer>
                    ))}
                    <div className="bg-[#2326391A] opacity-10 absolute left-0 right-0 top-0 bottom-0"></div>
                    <img src="images/bg-7.svg" width="203" height="203" alt="" className="absolute left-0 top-[528px] my-blur" />
                    <img src="images/bg-8.svg" width="253" height="253" alt="" className="absolute right-[74px] top-[20px] my-blur" />
                </div>
            </div>
        </div>
    );
}
