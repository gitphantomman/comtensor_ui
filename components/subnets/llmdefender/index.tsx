"use client";

import React, { useState } from 'react';
import axios from 'axios';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const LlmDefender: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState<string[]>([]); // Change to array of strings
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                'https://api.comtensor.io/vision/',
                {
                    type: 'txt2img',
                    prompt: inputValue,
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data.signed_urls;
            setResponseData(prevData => [...prevData, data]); 
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error sending POST request:', error);
        }
    };

    const handleRefresh = () => {
        setInputValue('');
        setResponseData([]); 
    };

    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/Sn14-logo.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">LLM Defender</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">Enhancing LLM security through decentralized, multi-layered defense.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 14 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">Bittensor subnet 14 is designed to enhance security for Large Language Models (LLMs) by implementing a defense-in-depth approach through multiple defensive methods and engines. These engines, consisting of single or multiple analyzers, work together to detect attacks against LLMs, providing a modular and high-performing detection capability. The subnet assigns a confidence score to inputs, indicating the likelihood of an attack on LLMs, and combines intelligence from hundreds of endpoints to secure applications effectively. Its goal is to empower LLM developers to integrate decentralized intelligence with local defenses, offering robust protection against evolving threats. This comprehensive approach enables unprecedented security potential for LLM applications within the Bittensor ecosystem.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">1.323 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.267 τ</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Regs enabled</span>
                            <span className="text-xl font-medium">
                                <span className="text-t-primary">YES</span>
                            </span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Subnet owner</span>
                            <a target="_blank" rel="noreferrer" className="text-t-body flex gap-1 hover:text-t-hover" href="https://x.taostats.io/account/5CiQ1cxLB1ABBJyf9FAR8CRhfcKgs4M8QaRgmHh318PKLqvb#transfers">
                                <span className="text-xl overflow-x-hidden font-medium">5H49qbc7o1QBrqvpnRL13t7yXgVR8mE6WB9FnXuy1ZRqk3xC</span>
                            </a>
                        </div>
                    </div>
                    {/* <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {responseData.map((data, index) => (
                                <img key={index} src={data} className='w-full rounded-md' alt={`Generated Image ${index}`} />
                            ))}
                        </div>
                        <div className='flex justify-around text-2xl mt-12 space-x-12'>
                            <input type="text" className='w-2/5 border rounded-md border-gray-200 bg-transparent px-4 py-4' onChange={handleInputChange} placeholder='input your prompt here....' />
                            <input type="submit" className='w-2/5 border border-gray-200 rounded-md bg-pink-800 px-4 py-4 hover:bg-pink-700' value={loading ? ("Generating..") : ("Submit")} />
                            <input type="button" className='w-2/5 border border-gray-200 rounded-md bg-pink-800 px-4 py-4 hover:bg-pink-700' value="Refresh" onClick={handleRefresh} />
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default LlmDefender;
