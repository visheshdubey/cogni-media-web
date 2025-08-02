"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQueryList = window.matchMedia(query);
        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

        mediaQueryList.addEventListener("change", listener);
        return () => mediaQueryList.removeEventListener("change", listener);
    }, [query]);

    return matches;
}
