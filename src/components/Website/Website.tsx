import { Technologies, Project } from "components";
import { landingPageList } from "constants/";

export default function Website() {
    const projects = [
        {
            img: "img-15.png",
            imgHover: "img-16.png",
            title: "Ваш гранит",
            text: "Адаптивная верстка сайта Ваш гранит",
            href: "https://hillel1408.github.io/granite/",
        },
        {
            img: "img-17.png",
            imgHover: "img-18.png",
            title: "Pastry World Bakery",
            text: "Адаптивная верстка сайта Pastry World Bakery",
            href: "https://daragan-media.com/verstka/pwb-new/",
        },
        {
            img: "img-19.png",
            imgHover: "img-20.png",
            title: "Стома-Денталь",
            text: "Адаптивная верстка сайта Стома-Денталь",
            href: "https://hillel1408.github.io/stoma_dent/",
        },
        {
            img: "img-29.png",
            imgHover: "img-30.png",
            title: "Ваш ритуал",
            text: "Адаптивная верстка сайта Ваш ритуал",
            href: "#",
        },
    ];

    return (
        <div className="flex flex-col gap-[70px]">
            <Technologies text="Валидная, кроссбраузерная верстка" list={landingPageList}></Technologies>
            <div className="grid gap-[66px] grid-cols-3">
                {projects.map((item, index) => (
                    <Project key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
