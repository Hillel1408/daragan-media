import { useTranslation } from "react-i18next";
import { Observer } from "components";

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#111112] pb-[145px] overflow-hidden">
            <div className="container">
                <Observer>
                    <h2 className="font-['Intro'] text-[32px] leading-[32px] text-white text-center mb-8">{t("AboutMe")}</h2>
                </Observer>
                <Observer>
                    <div className="max-w-[1080px] text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] text-center">
                        <p className="mb-6">{t("HiThere1")}</p>
                        <p>{t("HiThere2")}</p>
                    </div>
                </Observer>
            </div>
            <div
                className="bg-about-me border border-[#2b2b2d] border-l-0 border-r-0 mt-[100px] pt-[55px] pb-[38px] bg-[rgba(35,38,57,0.1)] before:content-['']
                before:block before:h-[100px] before:w-[100%] before:border-[2px] before:border-white before:rounded-bl-[24px] relative before:border-r-0
                before:border-t-0 before:absolute before:-bottom-[42.3px] before:left-[calc(100vw/2-364px)]"
            >
                <div className="container">
                    <div className="max-w-[545px] ml-auto">
                        <Observer>
                            <h2 className="text-[32px] uppercase text-white font-['Intro'] mb-[32px]">как я работаю?</h2>
                        </Observer>
                        <ul className="text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] flex flex-col gap-[22px] [&>li>span]:text-white [&>li>span]:font-bold">
                            <Observer>
                                <li>
                                    <span className="text-white font-bold">Честно и прозрачно.</span> Разрабатываю план проекта, рассказываю о каждом этапе и
                                    объясняю, для чего он нужен, согласовываю прототипы и дизайн-концепции.
                                </li>
                            </Observer>
                            <Observer>
                                <li>
                                    <span className="text-white font-bold">Вдумчиво.</span> Я не гонюсь за количеством и одновременно веду не более 3 крупных
                                    проектов — у меня всегда достаточно ресурсов на каждого клиента.
                                </li>
                            </Observer>
                            <Observer>
                                <li>
                                    <span className="text-white font-bold">Профессионально.</span> Знаю и применяю современные инструменты проектирования,
                                    дизайна и продвижения, постоянно учусь и повышаю квалификацию.
                                </li>
                            </Observer>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
