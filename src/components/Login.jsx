import React from "react";

const Login = () => {
    return(
        <>
            <div className="border border-blue-300 rounded w-96 mx-auto mt-48 p-3 flex flex-col items-center gap-10">
                <h2 className="flex justify-center text-3xl mt-5">Instagram</h2>
                <form action="" className="w-80">
                    <div className="flex flex-col gap-2">
                        <input type="text" placeholder="Username..." className="border p-1 rounded border-blue-200 w-full"/>
                        <input type="text" placeholder="Password..." className="border p-1 rounded border-blue-200 w-full"/>
                        <button className="bg-blue-300 rounded p-1 text-white">Login in</button>
                    </div>
                </form>
                <div className="border border-blue-200 w-80 p-2 flex justify-center mb-5">
                <p>Don't have an account? <span className="text-blue-500">Sign up</span></p>
                </div>
            </div>
        </>
    )
}

export default Login;