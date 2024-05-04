"use client"

import React, { useState } from "react";
import axios from "axios";
import KaitoResult from "./KaitoResult";
import { ApiResponse } from './types';
import Spinner from "../Spinner";

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const OpenKaito = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState<ApiResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };
    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await axios.post(
                'https://api.comtensor.io/openkaito/',
                { query: inputValue },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const data: ApiResponse[] = response.data[0];
                    setResponseData(data); 
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    console.error('Error sending POST request:', error);
                });

        } catch (error) {
            setLoading(false);
            console.error('Error sending POST request:', error);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg">
                <div className="bg-white relative z-10" style={{ backgroundColor: '#151719' }}>
                    <div className="h-screen w-full flex flex-col justify-between relative">
                        <form className="flex flex-col items-center flex-grow pt-12 sm:pt-24 px-8" onSubmit={handleFormSubmit}>
                            <img src="/assets/subnet5.png" className="w-48 items-center justify-center rounded-full mt-4 sm:mt-4 md:mt-12 z-10" />
                            <h1 className="font-bold text-[#95ADBD] opacity-100 font-[&#x27;Poppins&#x27;] 2xl:text-5xl xl:text-[112px] md:text-6xl text-3xl mt-12">Open-Kaito by ComTensor</h1>
                            <p className="text-gray-500 sm:text-2xl text-2xl mt-4 mb-4">Version 1.0.</p>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter your query"
                                className="text-black px-6 py-4 transparent border w-full rounded-xl"
                            />
                            <button type="submit" className="mt-12 bg-pink-800 w-48 py-4 rounded-xl hover:bg-pink-600">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center">
                {loading ? (
                    <Spinner /> 
                ) : responseData.map((item, index) => (
                    <KaitoResult
                        key={index} 
                        username={item.username}
                        text={item.text}
                        favorite_count={item.favorite_count}
                        quote_count={item.quote_count}
                        reply_count={item.reply_count}
                        retweet_count={item.retweet_count}
                    />
                ))}
            </div>
        </div>
    )
}


export default OpenKaito;