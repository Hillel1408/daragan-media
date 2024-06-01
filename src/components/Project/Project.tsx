import { useState } from "react";
import { VideoModal } from "components";

export default function Project({ item }: { item: { img: string; title: string; text: string; imgHover: string; href: string; video?: string } }) {
    const [active, setActive] = useState(false);

    return (
        <>
            <div
                className="group relative cursor-pointer"
                onClick={() => {
                    if (item.video) {
                        setActive(true);
                        document.body.classList.add("lock");
                    }
                }}
            >
                <div className="relative h-[187px] [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:rounded-[23px]">
                    <img src={`images/${item.img}`} alt="" className="group-hover:opacity-0 group-hover:invisible duration-700" />
                    <img
                        src={`images/${item.imgHover}`}
                        alt=""
                        className="group-hover:opacity-100 group-hover:visible opacity-0 invisible duration-700 absolute top-0"
                    />
                </div>
                <p className="mt-5 text-[20px] font-medium leading-[145%] text-white text-center">{item.title}</p>
                <p className="text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] text-center">{item.text}</p>
                {!item.video && (
                    <a href={item.href} className="absolute top-0 bottom-0 left-0 right-0" target="_blank" rel="noreferrer">
                        {" "}
                    </a>
                )}
            </div>
            {active && (
                <VideoModal
                    closeModal={() => {
                        setActive(false);
                    }}
                >
                    <div></div>
                </VideoModal>
            )}
        </>
    );
}
