import classNames from "classnames";
import { useEffect, useRef } from "react";

export default function Observer({ children, className, className2 }: { children: JSX.Element; className?: string; className2?: string }) {
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && myRef.current) {
                    myRef.current.classList.add("!translate-y-[0]");
                    return;
                }
            });
        });
        myRef.current && observer.observe(myRef.current);
    }, []);

    return (
        <div className={classNames("overflow-hidden", className2)}>
            <div ref={myRef} className={classNames("duration-[1300ms] translate-y-[100%]", className)}>
                {children}
            </div>
        </div>
    );
}
