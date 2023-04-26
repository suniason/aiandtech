import { useRef, useState } from "react";

const Tech:React.FC = () => {
    let desc = "";
    let col = "";
    const [app, setApp] = useState<number>(0);
    const clicked = (num:number) => {
        setApp(num)
    }
    if(app===0){
        desc="With the emergence of advanced technologies such as artificial intelligence and the Internet of Things, apps are becoming more useful and valuable, and their capabilities are expanding. Applications have revolutionized industries, such as transportation, healthcare, finance, and education, by introducing innovative solutions that enhance productivity, reduce costs, and improve user experience. Most of the times it has been used in most of the problems in our daily lives and helping us manage simple matters more efficiently. Apps provide a convenient and accessible way to manage different aspects of our daily routine.Here are some examples of these kinds of applications:"
        col = "#effd5f55"
    }else if(app===1){
        desc="GCash is a mobile wallet, mobile payment, and bank service that operates in the Philippines. It allows users to make secure and swift micropayments by transforming their mobile phone into a digital wallet. GCash enables people to purchase prepaid load, settle bills, transfer money, donate to charities, and shop online, all without using physical currency."
        col = "#0b7cfc55"
    }else if(app===2){
        desc="Initially a ride-hailing application for taxis, Grab has broadened its offerings to include ride-hailing, food, grocery and parcel delivery, and financial services. Through a location-sharing mechanism, the Grab app assigns taxis and private hire cars to customers in close proximity."
        col = "#27a76a55"
    }else if(app===3){
        desc="Shopee is a customized platform designed for the specific region, offering customers a hassle-free, safe, and quick online shopping experience with robust payment and delivery assistance. This simplifies online shopping and makes it convenient and enjoyable."
        col = "#ee4d3055"
    }

    return(
        <div className="w-[100%] grid grid-rows-[20vh_80vh] grid-cols-[60%_40%] text-white">
            <div className="col-span-2">
                <div className="flex items-center font-bold h-full w-full text-[2.5rem] p-[2rem]">
                    <div onClick={()=>clicked(0)} className={app===0?"bg-[#effd5f55] p-[2rem] rounded-[2rem] shadow-[0_0_5px_0_#effd5f,0_0_25px_#effd5f,0_0_50px_0_#effd5f,0_0_200px_0_#effd5f]":
                    "bg-[#effd5f55] p-[2rem] rounded-[2rem] hover:animate-[heartbeat_ease-in-out_1000ms_infinite]"}>
                        Applications that Solve Daily Problems
                    </div>
                </div>
            </div>
            <div className={`"overflow-y-auto m-[2rem] mr-[0] rounded-[2rem] bg-[${col}]`}>
                <div className="p-[2rem] text-[1.5rem]">
                    {desc}
                </div>
            </div>
            <div className="h-full">
                <div className="p-[2rem] grid grid-rows-[33%_33%_33%] gap-[.5rem] h-full">
                    <div onClick={()=>clicked(1)} className={app===1?"grid grid-cols-[40%_60%] h-full bg-[#0b7cfc55] rounded-[2rem] shadow-[0_0_5px_0_#0b7cfc,0_0_25px_#0b7cfc,0_0_50px_0_#0b7cfc,0_0_200px_0_#0b7cfc]":"grid grid-cols-[40%_60%] h-full bg-[#0b7cfc55] rounded-[2rem] hover:animate-[tada_ease-in-out_1200ms]"}>
                        <div className="flex items-center justify-center">
                            <img src="gcash.png" width={"75%"} height={"75%"} className="inline"/>
                        </div>
                        <div className="flex items-center text-[1.65rem] font-semibold ">
                            GCash
                        </div>
                    </div>
                    <div onClick={()=>clicked(2)} className={app===2?"grid grid-cols-[40%_60%] h-full bg-[#27a76a55] rounded-[2rem] shadow-[0_0_5px_0_#27a76a,0_0_25px_#27a76a,0_0_50px_0_#27a76a,0_0_200px_0_#27a76a]":"grid grid-cols-[40%_60%] h-full bg-[#27a76a55] rounded-[2rem] hover:animate-[tada_ease-in-out_1200ms]" }>
                        <div className="flex items-center justify-center">
                            <img src="grab.png" width={"75%"} height={"75%"} className="inline"/>
                        </div>
                        <div className="flex items-center text-[1.65rem] font-semibold overflow-y-auto">
                            Grab
                        </div>
                    </div>
                    <div onClick={()=>clicked(3)} className={app===3?"grid grid-cols-[40%_60%] h-full bg-[#ee4d3055] rounded-[2rem] shadow-[0_0_5px_0_#ee4d30,0_0_25px_#ee4d30,0_0_50px_0_#ee4d30,0_0_200px_0_#ee4d30]":"grid grid-cols-[40%_60%] h-full bg-[#ee4d3055] rounded-[2rem] hover:animate-[tada_ease-in-out_1200ms]"}>
                        <div className="flex items-center justify-center">
                            <img src="shopee.png" width={"75%"} height={"75%"} className="inline"/>
                        </div>
                        <div className="flex items-center text-[1.65rem] font-semibold overflow-y-auto">
                            Shopee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech