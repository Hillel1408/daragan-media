import classNames from "classnames";

export default function SecondaryButton({ text, className }: { text: string; className?: string }) {
    return <button className={classNames("bg-button-2 rounded-[33px] font-bold text-[17px] text-white h-[57px]", className)}>{text}</button>;
}
