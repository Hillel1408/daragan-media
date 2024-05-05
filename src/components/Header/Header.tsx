import { Socials, Contacts, Button, Switcher } from "components";

export default function Header() {
    return (
        <div className="py-[30px] bg-[#111112]">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-1 text-white font-['Intro'] text-[14px]">
                    <img src="images/logo.svg" alt="" />
                    <span className="translate-y-[1px]">DARAGAN-MEDIA</span>
                </div>
                <Switcher text="тёмная тема" />
                <Contacts className="gap-[50px]" />
                <Socials />
                <Button text="Заказать обратный звонок" className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112]" />
                <div className="text-white flex gap-2 text-[15px] font-light">
                    <button>ru</button>
                    <button className="opacity-50">en</button>
                </div>
            </div>
        </div>
    );
}
