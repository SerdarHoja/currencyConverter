const defaultTheme = require('tailwindcss/defaultTheme')
    /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        screens: {
            mobile: '1px',
            tablet: '361px',
            laptop: '769px',
            desktop: '1281px',
            wide: '1601px',
        },
        colors: {
            'desert-storm': '#f8f8f8',
            dune: '#343434',
            'ironside-grey': '#666666',
            'dark-cerulean': '#0f4471',
            'dark-blue-grey': '#2c3a4b',
            'catskill-white': '#eef5ff',
            'catalina-blue': '#093078',
            'gun-powder': '#404456',
            current: 'currentColor',
        },

        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            lineHeight: {
                'extra-loose': '14px',
                '140%': '140%',
            },
            spacing: {
                '30px': '30px',
                '50px': '50px',
                '25px': '25px',
                '15px': '15px',
            },
            fontSize: {
                '34px': [
                    '34px',
                    {
                        lineHeight: '40px',
                        fontWeight: '500',
                    },
                ],
                '26px': [
                    '26px',
                    {
                        lineHeight: '30px',
                        fontWeight: '500',
                    },
                ],
                '15px': [
                    '15px',
                    {
                        lineHeight: '20px',
                        fontWeight: '500',
                    },
                ],
                '13px': [
                    '13px',
                    {
                        lineHeight: '18px',
                        fontWeight: '500',
                    },
                ],
                '18px': [
                    '18px',
                    {
                        lineHeight: '20px',
                        fontWeight: '500',
                    },
                ],
                '14px': [
                    '14px',
                    {
                        lineHeight: '18px',
                        fontWeight: '500',
                    },
                ],
                '13px-15px': [
                    '13px',
                    {
                        lineHeight: '15px',
                        fontWeight: '500',
                    },
                ],
            },
            borderRadius: {
                small: '5px',
                xsmall: '10px',
                medium: '16px',
            },
        },
    },
    plugins: [],
}