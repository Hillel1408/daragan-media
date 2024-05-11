import { Technologies, Project } from "components";

export default function Frontend() {
    const list = [
        { icon: "React.svg", text: "React", width: "40", height: "36" },
        { icon: "NextJS.svg", text: "NextJS", width: "36", height: "36" },
        { icon: "TypeScript.svg", text: "TypeScript", width: "36", height: "36" },
        { icon: "ReduxToolkit.svg", text: "Redux Toolkit", width: "37", height: "36" },
        { icon: "ReactHookForm.svg", text: "React Hook Form", width: "36", height: "36" },
        { icon: "ESLint.svg", text: "ESLint", width: "40", height: "36" },
        { icon: "Prettier.svg", text: "Prettier", width: "36", height: "36" },
        { icon: "ReactSpring.svg", text: "React Spring", width: "36", height: "36" },
        { icon: "RTKQuery.svg", text: "RTK Query", width: "37", height: "36" },
    ];

    const projects = [
        {
            img: "img-21.png",
            imgHover: "img-22.png",
            title: "Интерактивный курс",
            text: "Интерактивный курс для Газпрома, на React",
            href: "https://movmedia.vercel.app/",
        },
        {
            img: "img-23.png",
            imgHover: "img-24.png",
            title: "Пятнашки",
            text: "Игра Пятнашки для Ростелекома, на React",
            href: "https://barley-break-one.vercel.app/",
        },
        {
            img: "img-25.png",
            imgHover: "img-26.png",
            title: "FIXrolls",
            text: "Приложение по доставке суши, на React",
            href: "https://fixrolls.vercel.app/",
        },
        {
            img: "img-27.png",
            imgHover: "img-28.png",
            title: "Solidstack",
            text: "Приложение для студии разработки сайтов, на NextJS",
            href: "https://idaproject-delta.vercel.app/",
        },
        {
            img: "img-31.png",
            imgHover: "img-32.png",
            title: "The True Facts",
            text: "Приложение для подтверждения фактов о знаменитостях, на React",
            href: "",
        },
        {
            img: "img-33.png",
            imgHover: "img-34.png",
            title: "LS-Admin",
            text: "Админка для сервера лицензий, на React",
            href: "",
        },
    ];

    return (
        <div className="flex flex-col gap-[70px]">
            <Technologies text="Валидная, кроссбраузерная верстка" list={list}></Technologies>
            <div className="grid gap-[66px] grid-cols-3">
                {projects.map((item, index) => (
                    <Project key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
