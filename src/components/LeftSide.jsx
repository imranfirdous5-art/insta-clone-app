import React from "react";



const LeftSide = () => {
    return(
        <>
            {/* <div className="gap-1 grid  grid-cols-[240px_1fr_350px] h-screen"> */}
            <div className="gap-10 grid  grid-cols-[1fr_3fr_2fr] h-screen">
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
            <div className="border border-black/10 p-3">
                middle
            </div>
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