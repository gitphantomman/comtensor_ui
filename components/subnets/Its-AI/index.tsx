"use client"
import { useRef, useState, useEffect } from "react";
import Spinner from "../Spinner";
import axios from "axios";

const ItsAi = () => {
    return (
        <div className="mt-[40px]">
            <div className="flex flex-col items-center justify-center">
                <div className="bg">
                    <div className="bg-white relative z-10" style={{ backgroundColor: '#151719' }}>
                        <div className="h-screen w-full flex flex-col justify-between relative">
                            <form className="flex flex-col items-center flex-grow pt-12 sm:pt-24 px-8">
                                <h1 className="font-bold text-[#95ADBD] opacity-100 font-[&#x27;Poppins&#x27;] 2xl:text-5xl xl:text-[112px] md:text-6xl text-3xl mt-12">LLM Detection Platform by It's AI</h1>
                                <p className="text-gray-500 sm:text-2xl text-2xl mt-4 mb-4">Version 1.0.</p>
                                <div className="w-4/5 border border-outline border-gray-200 py-4 px-4 rounded-xl">
                                    <span className="text-base">
                                        <span style={{ color: 'green' }} className="font-bold">Note : </span> Keep in mind that this is only MVP version of the website. Only English language is supported. Estimated prediction time is under 5s.
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <span>
                                        Please enter your text in the field below :
                                    </span>
                                </div>
                                <textarea
                                    className="w-4/5 bg-transparent py-4 px-4 rounded-md text-white outline-none text-black
                    hover:bg-gray-10 focus:border-primary duration-300 transition-all mt-4 mb-12"
                                    placeholder="Enter the text you want to analyze(minimum 250 characters)"
                                    rows={12}
                                />
                                <span>Or choose a text file</span>
                                <div className="w-4/5 border border-outline border-gray-200 py-8 px-4 rounded-xl flex justify-between">
                                    <span className="text-base ">
                                        <span style={{ color: 'gray' }} className="font-bold">Drag and drop file here</span>
                                    </span>
                                    <button className="text-base">
                                        <span className="font-bold border border-outline border-blue-900 border-2 py-2 px-4 rounded-md text-white">Browse files</span>
                                    </button>
                                </div>
                                <button className="text-base mt-4">
                                    <span className="font-bold border border-outline border-blue-900 border-2 py-2 px-4 rounded-md text-white">Submit</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItsAi;