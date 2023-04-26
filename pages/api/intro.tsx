import { useEffect, useRef } from "react"

const Intro:React.FC = () => {
    const handRef = useRef<HTMLDivElement>(null)
      
        useEffect(() => {
          if (handRef.current) {
            handRef.current.classList.add('animate-sideshow')
          }
        }, [])
      
        const handleClick = () => {
          if (handRef.current) {
            handRef.current.classList.remove('animate-sideshow')
            void handRef.current.offsetWidth
            handRef.current.classList.add('animate-sideshow')
          }
        }
    return(
        <div className="relative w-[100%] h-100vh overflow-hidden">
            <h1 className="flex absolute items-center text-[#ffffff] w-full min-h-[100vh] pr-[20rem] text-[5.5rem] p-[3rem]">
                <div onClick={handleClick} className="px-[2rem] py-[1.5rem] rounded-[2rem] cursor-pointer font-medium
                duration-[500ms] hover:animate-[hop_ease-in-out_1500ms_infinite]
                hover:shadow-[0_0_5px_0_#4ad1ff,0_0_25px_#4ad1ff,0_0_50px_0_#4ad1ff,0_0_200px_0_#4ad1ff] hover:bg-[#4ad1ff99]
                ">
                AI & Technology </div>
            </h1>
            <div>
                <div ref={handRef} className="absolute right-[-100%] bottom-[45%]">
                    <div className="pointer-events-none">
                        <img src="/greetings.png" alt="" className="w-[20rem] h-[15rem]"/>
                    </div>
                    <div className="flex justify-center text-white text-[2rem] font-bold">
                        Hello !!!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro