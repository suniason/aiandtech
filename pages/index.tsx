import { useEffect, useState } from "react";
import Ai from "./api/ai";
import Intro from "./api/intro";
import Tech from "./api/tech";


export default function Home() {

  // const changeBG = () => {
  //   if (window.pageYOffset <= 99 && window.pageYOffset >= 0){
  //     console.log(window.pageYOffset)
  //   }
  //   else if (window.pageYOffset <= 199 && window.pageYOffset >= 100){
  //     console.log(window.pageYOffset)
  //   }
  //   else if (window.pageYOffset >= 200){
  //     console.log(window.pageYOffset)
  //   }
  // }

  //   useEffect(() => {
  //     changeBG()
  //     window.addEventListener("scroll", changeBG)
  //   })

  return (
    <div className="cursor-default">
      <div className="fixed bg-[url(/blackbackground.jpg)] bg-cover w-full h-[100vh] z-[-10] bg-center"></div>
      <div className="flex min-h-[120vh]">
        <Intro/>
      </div>
      <div className="flex min-h-[120vh] items-center">
        <Ai/>
      </div>
      <div className="flex min-h-[120vh] items-center">
        <Tech/>
      </div>
    </div>
  )
}
