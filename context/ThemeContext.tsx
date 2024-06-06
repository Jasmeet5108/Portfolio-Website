"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProviderProps {
    theme: string;
    toggleTheme: () => void;
    lightTheme: string;
    darkTheme: string;
}

const ThemeContext = createContext<ThemeContextProviderProps | null>(null)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

    const lightTheme: string = "absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    const darkTheme: string = "absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"

    const [theme, setTheme] = useState<string>(lightTheme)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || lightTheme;
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.setAttribute('class', theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextProviderProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
