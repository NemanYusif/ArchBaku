import { current } from '@reduxjs/toolkit';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:'#016B38',
        secondry:'#B08968',
        linkback:'#F1F1F1',
        grayBack:'#F4F4F4',
        inputColor:'#EDEDED'
      },
      fontFamily:{
        Roboto:["Roboto", 'sans-serif']
      },
      backgroundImage:{
          banner:"url('/TopHeader/banner.svg')"
      },
      backgroundImage:{
        BgImg:"url('/HeroSection/BG-img.svg')",
        ProjectBackImg:"url('/Project/ProjectBackImg.svg')",
        serviceBackImg: "url('/Service/backgroundimg.svg')",
        texnoBackImg: "url('/Techniques/texnoBack.svg')",
        newsBack:"url('/News/newsBack.svg')",
        connectBack:"url('/Connect/connect.svg')",
        footerimg:"url('/Footer/footerback.svg')",
        aboutUsBanner:"url('/AboutUsBanner/aboutUsBanner.svg')"
    },
    },
  },
  plugins: [],
}
