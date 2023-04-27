const Footer:React.FC = () => {
    return(
        <div className="flex w-full min-h-[15vh] items-center bg-[#38193155] text-[1.15rem]">
            <div className="grid grid-cols-[50%_50%] grid-rows-[80%_20%] w-full" >
                <div className=" px-[5rem] py-[2rem]">
                    <b className="text-white">About the author</b>
                    <br/>
                    <div className="text-[#969696]">
                        {"Name : Brett Josef C. Galvez"}
                    </div>
                    <div className="text-[#969696]">
                        {"Course : Bachelor of Science in Infomation Technology"}
                    </div>
                    <div className="text-[#969696]">
                        {"Year : 3"}
                    </div>
                </div>
                <div>
                    <div className=" px-[5rem] py-[2rem]">
                        <b className="text-white">The program</b>
                        <br/>
                        <div className="text-[#969696]">
                            {"Code : IT342"}
                        </div>
                        <div className="text-[#969696]">
                            {"Label : System Integration and Architecture"}
                        </div>
                        <div className="text-[#969696]">
                        </div>
                    </div>
                </div>
                <div className="text-white text-[.9rem] col-[span_2]">
                    <div className="w-full flex justify-center">
                        &#169; 2023 All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer