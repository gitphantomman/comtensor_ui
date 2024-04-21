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
                                <img src="/assets/subnet32.png" className="w-48 items-center justify-center rounded-full mt-4 sm:mt-4 md:mt-12 z-10" />
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
                        <div className="w-full h-[500px] xl:h-[415px] md:h-[204px] h-[370px] flex flex-col items-center justify-evenly mb-4 mt-[300px]" style={{ backgroundColor: '#151719' }}>
                            <div className="text-center flex items-center justify-center relative">
                                <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">Whaaaaaat?</h1>
                                <h3 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-[64px] md:text-4xl text-lg absolute">
                                    Whaa<span className="text-[#5d5dff]">aaa</span>
                                    at?
                                </h3>
                            </div>
                            <div className="text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm">This subnet focuses on the detection of AI-generated content. Given the rapid growth of LLM-generated text, such as ChatGPT's output of 100 billion words daily compared to humans' 100 trillion, we believe that the ability to accurately determine AI-generated text will become increasingly necessary.</div>
                            {/* <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> This subnet focuses on the detection of AI-generated content. Given the rapid growth of LLM-generated text, such as ChatGPT's output of 100 billion words daily compared to humans' 100 trillion, we believe that the ability to accurately determine AI-generated text will become increasingly necessary.</li>
                            </ul> */}
                        </div>
                        <div className="w-full mt-[20px] " style={{ backgroundColor: '#151719' }}>
                            <div className="w-full pb-4 rounded-xl">
                                <div className="z-10 xl:w-4/5 w-full m-auto">
                                    <div className="text-center flex items-center justify-center relative">
                                        <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">What</h1>
                                        <h3 className="text-[#95ADBD] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-6xl md:text-4xl text-lg absolute text-left md:pt-20 pt-6 md:pl-12 pl-6">
                                            <span className="text-[#5d5dff]">What</span>
                                            <span className="text-[#5d5dff]">&nbsp;is the It's AI</span><span className="text-[#5d5dff]">?</span>
                                        </h3>
                                    </div>
                                </div>
                                <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Comtensor Subnet 32 - It's AI specializes in distinguishing AI-generated text from human writing, a critical service in an era where AI produces vast amounts of content.</li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> It supports ML engineers by protecting training data quality, aids educators in maintaining academic honesty, and assists bloggers in managing authentic engagement.</li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Beyond these, it's invaluable for writers, recruiters, and cybersecurity experts dealing with AI-crafted content.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="2xl:h-[500px] xl:h-[415px] md:h-[265px] h-[170px] w-full flex flex-col items-center justify-evenly" style={{ backgroundColor: '#151719' }}>
                            <div className="text-center flex items-center justify-center relative">
                                <h1 className="font-bold text-[#5092BE] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">Why use It's AI</h1>
                                <h3 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-6xl md:text-4xl text-lg absolute w-4/5">
                                    Why use It's AI?
                                </h3>
                            </div>
                            <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Here are some scenarios where LLM detection is important:</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> <b style={{ color: '#5d5dff' }}>For ML-engineers:</b> Whether you are sourcing training data, developing a foundational LLM, or fine tuning on your own data, you need to ensure that generative text does not make it into your training set. We can help.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> <b style={{ color: '#5d5dff' }}>For teachers:</b> While tools like ChatGPT offer numerous benefits for the educational sector, these tools also present opportunities for students to cheat on assignments and exams. Therefore, it is crucial to differentiate between responses authored by genuine students and those generated by LLMs.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> <b style={{ color: '#5d5dff' }}>For bloggers.</b> Many bloggers are now faced with a lot of AI-generated comments in their social networks. These comments are not really meaningful, yet they attract the attention of their audience and promote unrelated products. With our subnet, you can easily identify which comments are ai-generated and automatically ban them.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> <b style={{ color: '#5d5dff' }}>For writers.</b> By utilizing an LLM detection system, writers can assess their text, segment by segment, to identify sections that appear machine-generated. This enables the writers to refine these areas to enhance the overall human-like quality of their writing.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> <b style={{ color: '#5d5dff' }}>For recruiting.</b> Have you noticed these days you are receiving far more applications with lower candidate quality? AI has enabled people to spam the hiring teams with artificially written cover letters and assessments. We help you find the candidates who care about your mission and your quality standards.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> <b style={{ color: '#5d5dff' }}>For cyber security.</b> Scammers can leverage LLMs to quickly and easily create realistic and personalized phishing emails. We can help you determine the provenance of any document or email you are reviewing.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> As you can see there are a lot of areas where AI detection can be very helpful. We believe that this LLM-detection subnet not only is a useful tool at a good price for people to use, but it also encourages competition to make better and smarter ways to spot AI-generated content.</li>
                            </ul>
                        </div>
                        <div className="w-full mt-[1100px]" style={{ backgroundColor: '#151719' }}>
                            {/* <div className="w-full pb-4 rounded-xl">
                                <div className=" z-10 xl:w-4/5 w-full m-auto">
                                    <div className="text-center flex items-center justify-start relative">
                                        <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">What</h1>
                                        <h3 className="text-[#95ADBD] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-6xl md:text-4xl text-lg absolute text-left md:pt-20 pt-6 md:pl-12 pl-6">
                                            <span className="text-[#5d5dff]">What</span>
                                            <span className="text-[#5d5dff]">&nbsp;is the It's AI</span><span className="text-[#5d5dff]">?</span>
                                        </h3>
                                    </div>
                                </div>
                                <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Comtensor Subnet 32 - It's AI specializes in distinguishing AI-generated text from human writing, a critical service in an era where AI produces vast amounts of content.</li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> It supports ML engineers by protecting training data quality, aids educators in maintaining academic honesty, and assists bloggers in managing authentic engagement.</li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Beyond these, it's invaluable for writers, recruiters, and cybersecurity experts dealing with AI-crafted content.</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItsAi;