import { Technologies, Project } from "components";

export default function LandingPage() {
    const list = [
        { icon: "HTML5.svg", text: "HTML5", width: "32", height: "36" },
        { icon: "CSS3.svg", text: "CSS3", width: "31", height: "35" },
        { icon: "JavaScript.svg", text: "JavaScript", width: "32", height: "36" },
        { icon: "SASS.svg", text: "SASS", width: "48", height: "36" },
        { icon: "Tailwind.svg", text: "Tailwind", width: "51", height: "31" },
        { icon: "Pug.svg", text: "Pug", width: "62", height: "36" },
        { icon: "Gulp.svg", text: "Gulp", width: "36", height: "36" },
        { icon: "EJS.svg", text: "EJS", width: "41", height: "17" },
        { icon: "Eleventy.svg", text: "Eleventy", width: "42", height: "19" },
        { icon: "Bootstrap.svg", text: "Bootstrap", width: "36", height: "36" },
        { icon: "PerfectPixel.svg", text: "PerfectPixel", width: "36", height: "36" },
        { icon: "Figma.svg", text: "Figma", width: "24", height: "36" },
        { icon: "Photoshop.svg", text: "Photoshop", width: "37", height: "36" },
    ];

    const projects = [
        {
            img: "img-1.png",
            imgHover: "img-2.png",
            title: "Nika Lobanova",
            text: "Адаптивная верстка макета Nika Lobanova для персонального стилиста",
            href: "https://hillel1408.github.io/nika_lobanova/",
        },
        {
            img: "img-3.png",
            imgHover: "img-4.png",
            title: "Engineering company",
            text: "Адаптивная верстка макета Engineering company",
            href: "https://hillel1408.github.io/engineering-company/",
        },
        {
            img: "img-5.png",
            imgHover: "img-6.png",
            title: "Country houses",
            text: "Адаптивная верстка макета Country houses",
            href: "https://hillel1408.github.io/country-houses/",
        },
        {
            img: "img-7.png",
            imgHover: "img-8.png",
            title: "Apartments",
            text: "Адаптивная верстка макета Apartments",
            href: "https://hillel1408.github.io/-apartments/",
        },
        {
            img: "img-9.png",
            imgHover: "img-10.png",
            title: "Окунев Павел",
            text: "Адаптивная верстка макета Окунев Павел для стоматолога",
            href: "https://hillel1408.github.io/okunev_pavel/",
        },
        {
            img: "img-11.png",
            imgHover: "img-12.png",
            title: "Выкуп авто",
            text: "Адаптивная верстка макета Сar buyback",
            href: "https://hillel1408.github.io/car-buyback/",
        },
        {
            img: "img-13.png",
            imgHover: "img-14.png",
            title: "Малые этажи",
            text: "Адаптивная верстка макета Малые этажи",
            href: "https://daragan-media.com/verstka/front_2/",
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
