"use client"
import { useRef, useState, useEffect } from "react";
import ResultData from "./result-data";
import Spinner from "../Spinner";
import axios from "axios";


const OpenKaito = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputVal, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [resultData, setResultData] = useState<any>([]);


    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                searchData();
            }
        }

        const inputElement = inputRef.current!;

        if (inputElement) {
            inputElement.addEventListener('keypress', handleKeyPress);

            return () => {
                inputElement.removeEventListener('keypress', handleKeyPress);
            };
        }

    }, [inputVal]);

    const searchData = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
       // setResultData(SearchData);
        setLoading(false);
    }


    return (
        <div className="mt-[40px]">
            <div className="flex flex-col items-center justify-center">
                <div className="bg">
                    <div className="bg-white relative z-10" style={{ backgroundColor: '#151719' }}>
                        <div className="h-screen w-full flex flex-col justify-between relative">
                            <form className="flex flex-col items-center flex-grow pt-12 sm:pt-24 px-8">
                                <img src="/assets/subnet5.png" className="w-48 items-center justify-center rounded-full mt-4 sm:mt-4 md:mt-12 z-10" />
                                <h1 className="font-bold text-[#95ADBD] opacity-100 font-[&#x27;Poppins&#x27;] 2xl:text-5xl xl:text-[112px] md:text-6xl text-3xl mt-12">Open-Kaito by ComTensor</h1>
                                <p className="text-gray-500 sm:text-2xl text-2xl mt-4 mb-4">Version 1.0.</p>
                                <input ref={inputRef} value={inputVal} onChange={(e) => setInputValue(e.target.value)} disabled={loading}
                                    className="w-3/5 bg-white py-6 px-12 rounded-full outline-none text-black
                    hover:bg-gray-10 focus:bg-white focus:border-primary duration-300 transition-all mb-12"
                                    type="text" placeholder="Type and press enter..."
                                />
                                <div>
                                    {
                                        loading && (
                                            <Spinner />
                                        )
                                    }
                                </div>

                            </form>
                            <ResultData data={resultData} />
                            <footer className="flex items-center lg:justify-unset justify-center mx-10 text-sm text-gray-500">
                                <div className="w-1/3 sm:m-0 m-auto xl:pl-6 pl-0">
                                    <a className="flex cursor-pointer sm:mb-[-20px] lg:mb-[-12px] mb-[-14px] flex-col items-center">
                                        <div className="sm:hidden flex flex-col items-center">
                                            <p className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] text-base ml-[-25px] leading-4">Whaaaaat?</p>
                                            <p className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] text-base opacity-80 mr-[-25px] leading-4">Whaaaaat?</p>
                                            <p className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] text-sm opacity-60 ml-[-15px] leading-4">Whaaaaat?</p>
                                            <p className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] text-xs opacity-40 leading-2">Whaaaaat?</p>
                                        </div>
                                    </a>
                                </div>
                            </footer>
                        </div>
                        <div className="w-full h-[500px] xl:h-[415px] md:h-[204px] h-[370px] flex flex-col items-center justify-evenly mb-4" style={{ backgroundColor: '#151719' }}>
                            <div className="text-center flex items-center justify-center relative">
                                <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">Whaaaaaat?</h1>
                                <h3 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-[64px] md:text-4xl text-lg absolute">
                                    Whaa<span className="text-[#5d5dff]">aaa</span>
                                    at?
                                </h3>
                            </div>
                            <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> A search index plays a crucial role in accessing information within Web3 and serves as the foundation for RAG applications. OpenKaito is dedicated to constructing a decentralized search index for Web3, and its incentive mechanism can be outlined as follows:</li>
                            </ul>
                        </div>
                        <div className="2xl:h-[500px] xl:h-[415px] md:h-[265px] h-[170px] w-full flex flex-col items-center justify-evenly" style={{ backgroundColor: '#151719' }}>
                            <div className="text-center flex items-center justify-center relative">
                                <h1 className="font-bold text-[#5092BE] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">Why use Kaito</h1>
                                <h3 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-6xl md:text-4xl text-lg absolute w-4/5">
                                    Why use Kaito?
                                </h3>
                            </div>
                            <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Kaito is an AI-powered search platform for Web3. Founded in March 2022 in Seattle, USA, we have since expanded globally, with over 20 members across the US and Asia. Today, we provide services to our professional clients through our all-in-one information platform, MetaSearch, and cater to the broader Web3 community via our LLM-based search engine, WHAT.</li>
                            </ul>
                        </div>
                        <div className="w-full" style={{ backgroundColor: '#151719' }}>
                            <div className="xl:h-[160px] md:h-[80px] h-[40px] z-10 flex flex-col items-center justify-center rounded-xl">
                                <h1 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-[64px] md:text-4xl text-lg">
                                    <span className="text-[#5d5dff]">Mission</span>
                                </h1>
                            </div>
                            <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Kaito aims to revolutionize information access in Web3.</li>
                                <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> We index thousands of premium Web3 sources and transform terabytes of unstructured information into searchable and actionable insights, thereby empowering more informed decision-making.</li>
                            </ul>
                            <div className="w-full pb-4 rounded-xl">
                                <div className=" z-10 xl:w-4/5 w-full m-auto">
                                    <div className="text-center flex items-center justify-start relative">
                                        <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">What</h1>
                                        <h3 className="text-[#95ADBD] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-6xl md:text-4xl text-lg absolute text-left md:pt-20 pt-6 md:pl-12 pl-6">
                                            <span className="text-[#5d5dff]">What</span>
                                            <span className="text-[#5d5dff]">&nbsp;is the Open-Kaito</span><span className="text-[#5d5dff]">?</span>
                                        </h3>
                                    </div>
                                </div>
                                <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> OpenKaito, is Kaito AI's initiative to decentralize the Web3 search platform.</li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> It leverages Bittensor's Yuma consensus and AI-based nDCG</li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> evaluator for search relevance while overcoming operational challenges. </li>
                                    <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> The goal is to engage the public in building and benefiting from a decentralized smart search and analytics platform featuring low latency and innovative caching mechanisms on validator nodes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OpenKaito;