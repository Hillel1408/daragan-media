import { useTranslation } from "react-i18next";
import { Technologies, Project, Observer } from "components";
import { landingPageList } from "constants/";

export default function Website() {
    const { t } = useTranslation();

    const projects = [
        {
            img: "img-19.png",
            imgHover: "img-20.png",
            title: t("StomaDental1"),
            text: t("StomaDental2"),
            href: "https://hillel1408.github.io/stoma_dent/",
        },
        {
            img: "img-29.png",
            imgHover: "img-30.png",
            title: t("YourRitual1"),
            text: t("YourRitual2"),
            href: "https://hillel1408.github.io/your-ritual/",
        },
        {
            img: "img-17.png",
            imgHover: "img-18.png",
            title: t("PastryWorldBakery1"),
            text: t("PastryWorldBakery2"),
            href: "https://daragan-media.com/verstka/pwb-new/",
        },
        {
            img: "img-15.png",
            imgHover: "img-16.png",
            title: t("YourGranite1"),
            text: t("YourGranite2"),
            href: "https://hillel1408.github.io/granite/",
        },
        {
            img: "img-39.png",
            imgHover: "img-40.png",
            title: t("YourGranite1"),
            text: t("YourGranite2"),
            href: "https://hillel1408.github.io/monsense/",
        },
    ];

    return (
        <div className="flex flex-col gap-[70px] mt-[68px] md:mt-[36px] md:gap-[42px]">
            <Technologies text={t("Valid")} list={landingPageList}></Technologies>
            <div className="my-works grid gap-[66px] grid-cols-3 lg:grid-cols-2 md:gap-[30px] sm:grid-cols-1">
                {projects.map((item, index) => (
                    <Observer key={index}>
                        <Project item={item} />
                    </Observer>
                ))}
            </div>
        </div>
    );
}
