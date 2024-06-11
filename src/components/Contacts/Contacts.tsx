import classNames from "classnames";

export default function Contacts({ className }: { className?: string }) {
    return (
        <ul className={classNames("text-[12px] text-white flex md:text-[11px]", className)}>
            <li>
                <a href="mailto:daragan.maksim@yandex.ru" className="flex items-center gap-[7px]">
                    <img src="images/icon-1.svg" alt="" width="15px" height="12px" /> daragan.maksim@yandex.ru
                </a>
            </li>
            <li>
                <a href="tel:+7(414)850-0417" className="flex items-center gap-[7px]">
                    <img src="images/icon-2.svg" alt="" width="15px" height="15px" className="translate-x-[1px]" /> +7 (414) 850 - 0417
                </a>
            </li>
        </ul>
    );
}
