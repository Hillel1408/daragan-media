import { Technologies } from "components";

export default function LandingPage() {
    const list = [
        { icon: "HTML5.svg", text: "HTML5" },
        { icon: "CSS3.svg", text: "CSS3" },
        { icon: "JavaScript.svg", text: "JavaScript" },
        { icon: "SASS.svg", text: "SASS" },
        { icon: "Tailwind.svg", text: "Tailwind" },
        { icon: "Pug.svg", text: "Pug" },
        { icon: "Gulp.svg", text: "Gulp" },
        { icon: "EJS.svg", text: "EJS" },
        { icon: "Eleventy.svg", text: "Eleventy" },
        { icon: "Bootstrap.svg", text: "Bootstrap" },
        { icon: "PerfectPixel.svg", text: "PerfectPixel" },
        { icon: "Figma.svg", text: "Figma" },
        { icon: "Photoshop.svg", text: "Photoshop" },
    ];

    return (
        <div className="flex flex-col gap-[70px]">
            <Technologies text="Валидная, кроссбраузерная верстка" list={list}></Technologies>
        </div>
    );
}
