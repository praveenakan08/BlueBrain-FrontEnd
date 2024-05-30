import { useState } from "react";

const Registration = (): JSX.Element => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handlePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <div className="grid md:grid-cols-3 bg-gradient-to-t from-bbPink to-bbSky h-screen">
            {/* Empty space - left */}
            <div className="col-span-1"></div>

            {/* Center part */}
            <div className="flex justify-center items-center flex-col bg-gray-300 h-screen col-span-1 overflow-y-auto">
                {/* logo image and title */}
                <div className="flex items-center flex-col m-6">
                    <div>
                        <img className="drop-shadow-2xl m-2" src="/images/logo.png" alt="LOGO"></img>
                    </div>
                    <div className="logo">blue brain</div>
                </div>

                {/* first name, last name */}
                <div className="mb-6 inline-block w-2/3">
                    <input id="firstName" className="input shadow" placeholder="First Name" required />
                </div>
                <div className="mb-6 inline-block w-2/3">
                    <input id="lastName" className="input shadow-sm" placeholder="Last Name" required />
                </div>

                <div className="flex w-2/3 gap-2">
                    <div className="mb-6 inline-block w-1/3">
                        <input id="age" className="input shadow-sm" placeholder="Age" required />
                    </div>
                    <div className="mb-6 inline-block w-2/3">
                        <input id="gender" className="input shadow-sm" placeholder="Gender" required />
                    </div>
                </div>

                {/* email address */}
                <div className="mb-6 inline-block w-2/3">
                    <input type="email" id="email" className="input shadow" placeholder="Email address" required />
                </div>

                {/* password fields */}
                <div className="flex gap-3 w-2/3 justify-between items-center">
                    <div className="w-[95%]">
                        {/* password */}
                        <div className="flex mb-6 gap-3">
                            <input type={isPasswordVisible ? 'text' : 'password'} id="hs-toggle-password" className="input shadow-sm w-2/3" placeholder="Password" required />
                        </div>

                        {/* confirm password */}
                        <div className="flex mb-6 gap-3">
                            <input type={isPasswordVisible ? 'text' : 'password'} id="hs-toggle-password" className="input shadow-sm w-2/3" placeholder="Confirm Password" required />
                        </div>
                    </div>

                    <div className="w-[5%]">
                        {/* eye button */}
                        <button onClick={handlePasswordVisible}>
                            {!isPasswordVisible ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>

                {/* questionnaire button */}
                <div className="mb-6 w-2/3">
                    <button className="btn bg-sky-300 text-white hover:shadow-inner shadow-lg w-full">
                        <a href="/questionnaire">Next</a>
                    </button>
                </div>
            </div>

            {/* Empty space - right */}
            <div className="col-span-1"></div>
        </div>
    );
}

export default Registration;