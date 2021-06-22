import { useEffect, useState } from "react";

export const useDarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') !== 'null' ? localStorage.getItem('theme') : 'light' );

    useEffect(() => {
       const root = window.document.documentElement;
       root.classList.remove(theme === 'light' ? 'dark' : 'light');
       localStorage.setItem('theme', theme);

       root.classList.add(theme);
    }, [theme]);

    return [theme, setTheme];
}