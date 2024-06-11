import { useState, useLayoutEffect } from "react";

const queries = ["(max-width: 550px)", "(min-width: 551px) and (max-width: 768px)", "(min-width: 769px)"];

export default function useMatchMedia(): any {
    const mediaQueryLists = queries.map((query) => matchMedia(query));

    const getValues = () => mediaQueryLists.map((list) => list.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

        return () => mediaQueryLists.forEach((list) => list.removeEventListener("change", handler));
    }, []);

    return ["isMobile", "isTablet", "isDesktop"].reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {},
    );
}
