import { useTranslation } from "react-i18next";
import { Technologies, Project, Observer } from "components";

export default function Frontend() {
    const { t } = useTranslation();

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
            title: t("InteractiveCourse1"),
            text: t("InteractiveCourse2"),
            href: "https://movmedia.vercel.app/",
        },
        {
            img: "img-23.png",
            imgHover: "img-24.png",
            title: t("BarleyBreak1"),
            text: t("BarleyBreak2"),
            href: "https://barley-break-one.vercel.app/",
        },
        {
            img: "img-25.png",
            imgHover: "img-26.png",
            title: t("FIXrolls1"),
            text: t("FIXrolls2"),
            href: "https://fixrolls.vercel.app/",
        },
        {
            img: "img-27.png",
            imgHover: "img-28.png",
            title: t("Solidstack1"),
            text: t("Solidstack2"),
            href: "https://idaproject-delta.vercel.app/",
        },
        {
            img: "img-31.png",
            imgHover: "img-32.png",
            title: t("TheTrueFacts1"),
            text: t("TheTrueFacts2"),
            href: "",
        },
        {
            img: "img-33.png",
            imgHover: "img-34.png",
            title: t("LSAdmin1"),
            text: t("LSAdmin2"),
            href: "",
            video: "1",
        },
    ];

    return (
        <div className="flex flex-col gap-[70px] mt-[68px] md:mt-[36px] md:gap-[42px]">
            <Technologies text={t("FrontendDevelopment")} list={list}></Technologies>
            <div className="grid gap-[66px] grid-cols-3 lg:grid-cols-2 md:gap-[30px] sm:grid-cols-1">
                {projects.map((item, index) => (
                    <Observer key={index}>
                        <Project item={item} />
                    </Observer>
                ))}
            </div>
        </div>
    );
}
