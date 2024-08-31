import classNames from "classnames";
import Observer from "components/Observer/Observer";

export default function Experience() {
    const list = [
        {
            href: "https://webmobil-agency.ru/",
            hrefText: "ООО ДВГ Проджект",
            title: "Frontend-разработчик",
            text: "Разрабатывал web-приложения на React / TypeScript с использованием Tailwind, подключенные к Rest API (в основном DRF). Выполнял верстку страниц приложений по разработанному дизайну",
            stack: "Стек: HTML, Javascript, CSS, Typescript, React, Tailwind, SCSS, Mobx, Axios, Tanstack Query, API Django Rest Framework",
            date: ["Август 2024", "По настоящее время"],
        },
        {
            href: "#",
            hrefText: "Фри-ланс",
            title: "Frontend-разработчик",
            text: "Выполнял проекты на фри-лансе, которые размещены в портфолио",
            stack: "Стек: HTML5, CSS3, JavaScript, SASS, Tailwind, Pug, EJS, Gulp, Bootstrap, PerfectPixel, Figma, Photoshop, NextJS, React, TypeScript, Redux toolkit, RTK Query",
            date: ["Февраль 2023", "Август 2024"],
        },
        {
            href: "https://hawkingbros.com/",
            hrefText: "hawkingbros",
            title: "Frontend-разработчик",
            text: "Стажировка. Работал над созданием сервиса по аренде жилья в Беларуси. Вошел в 5 лучших стажеров (из 400 изначально записавшихся).",
            stack: "Стек: HTML5, SASS, NextJS, TypeScript, Redux toolkit",
            date: ["Октябрь 2022", "Февраль 2023"],
        },
        {
            href: "https://only.digital/",
            hrefText: "only.digital",
            title: "Frontend-разработчик",
            text: "Стажировка. Работал над проектами https://github.com/Hillel1408/only-task4-nextjs и https://github.com/Hillel1408/only-template",
            stack: "Стек: HTML5, SASS, NextJS, JavaScript, TypeScript",
            date: ["Август 2022", "Октябрь 2022"],
        },

        {
            href: "https://gb.ru/",
            hrefText: "GeekBrains",
            title: "Frontend-разработчик",
            text: "Обучение на латформе GeekBrains.",
            stack: "Стек: HTML5, CSS, JavaScript, React",
            date: ["Июнь 2022", "Август 2022"],
        },
    ];
    return (
        <div className="pb-[100px] bg-[#111112] md:pb-20 sm:pb-[64px]">
            <div className="container">
                <h2 className="font-['Intro'] text-[32px] leading-[154%] text-white uppercase text-center mb-8 sm:text-[28px]">Опыт работы</h2>
                <div className="border-[#2B2B2D] border pt-[67px] px-[74px] pb-[71px] rounded-[37px] relative overflow-hidden md:py-[41px] md:pl-[26px] md:pr-[36px] sm:-mx-5 sm:rounded-none sm:border-x-0 sm:pl-0">
                    {list.map((item, index) => (
                        <Observer key={index} className2="pl-10">
                            <div className="grid grid-cols-[209px_1fr] relative z-20 md:grid-cols-[180px_1fr] sm:grid-cols-[1fr]">
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
