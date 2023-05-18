'use client'

export const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
    document.querySelector('html').style.colorScheme = 
        document.documentElement.classList.contains('light') ? 'light' : 'dark';
}