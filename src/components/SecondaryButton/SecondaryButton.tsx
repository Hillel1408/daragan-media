import classNames from "classnames";

export default function SecondaryButton({ text, className, onClick }: { text: string; className?: string; onClick?: () => void }) {
    return (
        <button className={classNames("bg-button-2 rounded-[33px] font-bold text-[17px] text-white h-[57px] md:text-[15px]", className)} onClick={onClick}>
            {text}
        </button>
    );
}
