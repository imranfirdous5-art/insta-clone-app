import React from "react";
import Nature from "../assets/images/nature.jpg";
import Boy from "../assets/images/boy.jpeg"



const LeftSide = () => {
    return(
        <>
            
            <div className="gap-10 grid  grid-cols-[1fr_3fr_2fr] h-screen">

                {/* left section */}
                <div className="p-3 flex flex-col items-center border-r border-black/10">
                    <h1 className="font-bold text-3xl mb-7">instagram</h1>
                    <nav>
                        <ul className="flex flex-col gap-10 capitalize cursor-pointer">
                            <li className="flex items-center gap-2">
                                <i class="fa-solid fa-house"></i>home
                            </li>
                            <li  className="flex items-center gap-2">
                                <i class="fa-solid fa-search"></i>search
                            </li>
                            <li  className="flex items-center gap-2">
                                <i class="fa-brands fa-facebook-messenger"></i>messages
                            </li>
                            <li  className="flex items-center gap-2">
                                <i class="fa-regular fa-heart"></i>profile
                            </li>
                            <li  className="flex items-center gap-2">
                                <i class="fa-regular fa-square-plus"></i>profile
                            </li>
                        </ul>
                    </nav>
                </div>

            {/* middle section */}
            <div className="border border-black/10 p-3 gap-3 flex flex-col">
                <div className="border border-black/10 px-2 pt-4 pb-8 rounded">
                    <ul className="flex flex-row gap-3">
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        <li className="p-0.5 rounded-full from-yellow-500 to-blue-500 bg-linear-to-r h-17 flex flex-col items-center gap-1">
                            <div className="bg-white rounded-full p-0.5 w-16 h-16">
                                <img src={Boy} alt="boy" className="object-fit rounded-full h-15" />
                            </div>
                            <p className="text-sm">jack</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="border border-black/10">
                    <div className="mb-10">
                        <div className="flex flex-row items-center gap-2 mb-2 p-2">
                            <div className="bg-blue-100 rounded-full w-10 h-10 p-2"></div>
                            <p className="text-sm">justine</p>
                        </div>
                        <img src={Nature} alt="nature" />
                        <div>
                            <ul className="flex flex-row gap-5 px-3 mt-2 capitalize">
                                <li className="flex flex-row items-center gap-2"><i class="fa-regular fa-heart"></i>like</li>
                                <li className="flex flex-row items-center gap-2"><i class="fa-regular fa-message"></i>comments</li>
                                <li className="flex flex-row items-center gap-2"><i class="fa-solid fa-share"></i>share</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="flex flex-row items-center gap-2 mb-2 p-2">
                            <div className="bg-blue-100 rounded-full w-10 h-10 p-2"></div>
                            <p className="text-sm">justine</p>
                        </div>
                        <img src={Nature} alt="nature" />
                        <div>
                            <ul className="flex flex-row gap-5 px-3 mt-2 capitalize">
                                <li className="flex flex-row items-center gap-2"><i class="fa-regular fa-heart"></i>like</li>
                                <li className="flex flex-row items-center gap-2"><i class="fa-regular fa-message"></i>comments</li>
                                <li className="flex flex-row items-center gap-2"><i class="fa-solid fa-share"></i>share</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="flex flex-row items-center gap-2 mb-2 p-2">
                            <div className="bg-blue-100 rounded-full w-10 h-10 p-2"></div>
                            <p className="text-sm">justine</p>
                        </div>
                        <img src={Nature} alt="nature" />
                        <div>
                            <ul className="flex flex-row gap-5 px-3 mt-2 capitalize">
                                <li className="flex flex-row items-center gap-2"><i class="fa-regular fa-heart"></i>like</li>
                                <li className="flex flex-row items-center gap-2"><i class="fa-regular fa-message"></i>comments</li>
                                <li className="flex flex-row items-center gap-2"><i class="fa-solid fa-share"></i>share</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            {/* right section */}
            <div className="border">right</div>
            
            </div>

        </>
    )
}


export default LeftSide;




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// function LeftSide() {
//   return (
     
//   );
// }

// export default LeftSide;