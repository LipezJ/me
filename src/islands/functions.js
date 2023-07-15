'use client'

import 'dotenv/config'

export const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
    document.querySelector('html').style.colorScheme = 
        document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

export const searchBlog = async (e) => {
    e.preventDefault();
    const query = document.getElementById('isearch').value;
    try {
        const searchQuery = await fetch('https://meapi.fly.dev/blog/search/' + query, {cache: 'no-cache'})
        .then(res => res.json())
        .then(data => {
            if (data[0].name) {
                window.location.href = '/blog/' + data[0].name;
            }
        })
    } catch {
        window.location.href = '/blog/'
    }
}

export const blockMainOverflow = () => {
    const body = document.querySelector('body');
    if (body.style.overflow !== 'hidden') {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }

}