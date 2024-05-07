import { Logo, Socials, Contacts } from "components";

export default function Footer() {
    return (
        <div className="pt-[65px] pb-[100px] bg-[#111112]">
            <div className="container">
                <Logo />
                <div className="mt-10 flex justify-between items-start gap-5">
                    <Contacts className="gap-4 flex-col" />
                    <ul className="text-[18px] leading-[29px] opacity-70 text-white">
                        <li>ИП Дараган Максим Александрович</li>
                        <li>Завяки принимаются 7/24/365</li>
                    </ul>
                    <ul className="text-[18px] leading-[29px] opacity-70 text-white">
                        <li>ОГРНИП: 315312300009831</li>
                        <li>ИНН: 312335235806</li>
                    </ul>
                    <Socials />
                </div>
            </div>
        </div>
    );
}
