import { useEffect, useRef } from "react"

const Greet:React.FC = () => {

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
        <div ref={handRef}
        className="cursor-pointer overflow-hidden"
        onClick={handleClick}>
            <div className="absolute right-0 bottom-[45%]">
                <div>
                    <img src="/waveemoji.png" alt="" className="w-[10rem] h-[10rem]"/>
                </div>
                <div className="flex justify-center text-white p-[1.5rem] text-[2rem] font-bold">
                    Hello !!!
                </div>
            </div>
        </div>
    )
}

export default Greet