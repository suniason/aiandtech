import { useState } from "react"

const Ai:React.FC = () => {
    let desc = "";
    let col = "";
    const [app, setApp] = useState<number>(0);
    const clicked = (num:number) => {
        setApp(num)
    }   
    if(app===0){
        desc="ChatGPT is an AI-powered chatbot developed by OpenAI, based on the GPT (Generative Pretrained Transformer) language model. It is trained to answer messages sent by users in a communicative manner. It was supplied with data using tons of text database in the internet and is a very good assistant because of its clear and detailed response to the users. Given that it is a powerful tool, it has been integrated into a lot of software applications and websites like customer support applications, data analysis, educational applications, story-writing applications and much more. Some examples of these applications include:"
        col = "#effd5f55"
    }else if(app===1){
        desc="MegaFlash XYZ website has developed a versatile chatbot namely MegaFlashGPT that is capable of performing various tasks and features such as providing responses to inquiries, interpreting different languages, generating content, and others. This chatbot is programmed to have an entertainin, witty and sarcastic personality."
        col = "#0a6d6855"
    }else if(app===2){
        desc="Microsoft is going to introduce an AI \"Co-pilot\" in Microsoft 365 to help users with document-related tasks such as editing, summarizing, creating, and comparing. The features are built on technology similar to ChatGPT, but it's more powerful than the previous Clippy and has less anthropomorphic features."
        col = "#94949455"
    }else if(app===3){
        desc="Duolingo, a platform that helps 50 million users learn a second language, has integrated two new features, Role Play and Explain my Answer, using OpenAI's GPT-4 technology. These features are available in a new subscription tier called Duolingo Max. The platform supports 40 languages across its 100+ courses."
        col = "#7fcd0355"
    }
    

    return(
        <div className="w-[100%] grid grid-rows-[20vh_80vh] grid-cols-[60%_40%] text-white">
            <div className="col-span-2">
                <div className="flex items-center font-bold h-full w-full text-[2.5rem] p-[2rem]">
                    <div onClick={()=>clicked(0)} className={app===0?"bg-[#effd5f55] p-[2rem] rounded-[2rem] shadow-[0_0_5px_0_#effd5f,0_0_25px_#effd5f,0_0_50px_0_#effd5f,0_0_200px_0_#effd5f]":
                    "bg-[#effd5f55] p-[2rem] rounded-[2rem] hover:animate-[heartbeat_ease-in-out_1000ms_infinite]"}>
                    ChatGPT Integration Examples
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
                    <div onClick={()=>clicked(1)} className={app===1?"grid grid-cols-[40%_60%] h-full bg-[#0a6d6855] rounded-[2rem] shadow-[0_0_5px_0_#0a6d68,0_0_25px_#0a6d68,0_0_50px_0_#0a6d68,0_0_200px_0_#0a6d68]":"grid grid-cols-[40%_60%] h-full bg-[#0a6d6855] rounded-[2rem] hover:animate-[tada_ease-in-out_1000ms]"}>
                        <div className="flex items-center justify-center">
                            <img src="megaflashxyz.png" width={"75%"} height={"75%"} className="inline"/>
                        </div>
                        <div className="flex items-center text-[1.65rem] font-semibold">
                            MegaFlashGPT Philippines
                        </div>
                    </div>
                    <div onClick={()=>clicked(2)} className={app===2?"grid grid-cols-[40%_60%] h-full bg-[#94949455] rounded-[2rem] shadow-[0_0_5px_0_#949494,0_0_25px_#949494,0_0_50px_0_#949494,0_0_200px_0_#949494]":"grid grid-cols-[40%_60%] h-full bg-[#94949455] rounded-[2rem] hover:animate-[tada_ease-in-out_1200ms]"}>
                        <div className="flex items-center justify-center">
                            <img src="microsoft.png" width={"75%"} height={"75%"} className="inline"/>
                        </div>
                        <div className="flex items-center text-[1.65rem] font-semibold">
                            Microsoft Applications
                        </div>
                    </div>
                    <div onClick={()=>clicked(3)} className={app===3?"grid grid-cols-[40%_60%] h-full bg-[#7fcd0355] rounded-[2rem] shadow-[0_0_5px_0_#7fcd03,0_0_25px_#7fcd03,0_0_50px_0_#7fcd03,0_0_200px_0_#7fcd03]":"grid grid-cols-[40%_60%] h-full bg-[#7fcd0355] rounded-[2rem] hover:animate-[tada_ease-in-out_1200ms]"}>
                        <div className="flex items-center justify-center"> 
                            <img src="duolingo.png" width={"75%"} height={"75%"} className="inline"/>
                        </div>
                        <div className="flex items-center text-[1.65rem] font-semibold">
                            Duolingo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ai