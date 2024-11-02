/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        TextColor: '#767676',
        TextHColor: '#262626',
        BorderColor: '#979797',
        BorderInfoColor: '#F0F0F0',
        InformationColor: '#6D6D6D',
        CategoryBG: '#F5F5F3',
        BannerBG: '#F5F7F9',
      },
      fontFamily: {
      'dms': ['DM Sans',],
      },
      backgroundImage: {
        'Bannerimg': "url('../src/assets/bannerimg.png')",
      },
      maxWidth: {
        'headerContainer': '1200px',
        'laptopContainer': '900px',
        'tapletContainer': '700px',
        'androidContainer': '500px',
        'mobileContainer': '290px',
      },
      width: {
        'LogoW': '30%',
        'MenuW': '70%',
        'CatW': '20%',
        'SearchW': '70%',
        'UserW': '20%',
      },
      screens: {
      'laptop': {'min': '912px', 'max': '1218px',},
      // => @media (min-width: 1280px) { ... }

      'taplet': {'min': '720px', 'max': '912px',},
      // => @media (min-width: 720px) { ... }

      'android': {'min': '514px', 'max': '720px',},
      // => @media (min-width: 514px) { ... }

      'mobile': {'min': '300px', 'max': '514px',},
      // => @media (min-width: 300px) { ... }

      // 'sm': '100px',
      // // => @media (min-width: 100px) { ... }
    },
    },
  },
  plugins: [],
}

