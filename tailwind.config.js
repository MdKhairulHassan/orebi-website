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
        'laptopContainer': '978px',
        'tapletContainer': '748px',
        'androidContainer': '556px',
        'mobileContainer': '300px',
      },
      width: {
        'LogoW': '30%',
        'MenuW': '70%',
        'CatW': '20%',
        'SearchW': '70%',
        'UserW': '20%',
      },
      screens: {
      'laptop': {'min': '992px', 'max': '1199.98px',},
      // => @media (min-width: 992px) { ... }

      'taplet': {'min': '768px', 'max': '991.98px',},
      // => @media (min-width: 768px) { ... }

      'android': {'min': '576px', 'max': '767.98px',},
      // => @media (min-width: 576px) { ... }

      'mobile': {'min': '320px', 'max': '575.98px',},
      // => @media (min-width: 320px) { ... }

      // 'sm': {'min': '100px', 'max': '319.98px',},
      // // => @media (min-width: 100px) { ... }
     },
    },
  },
  plugins: [],
}

