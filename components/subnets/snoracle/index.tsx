"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Spinner from '../Spinner';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const SnOracle: React.FC = () => {

    const [snData, setSnData] = useState(['']);
    const [time, setTime] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        setLoading(true);
        setSnData(['']);

        try {
            await axios.post(
                "https://api.comtensor.io/snporacle/",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const data = response.data[0].prediction;
                    const time: string = response.data[0].timestamp;
                    const date: Date = new Date(time);
                    const day: string = date.getDate().toString().padStart(2, '0'); 
                    const month: string = (date.getMonth() + 1).toString().padStart(2, '0'); 
                    const year: string = date.getFullYear().toString(); 
                    
                    const formattedDate: string = `${day}-${month}-${year}`;
                    setSnData(data);
                    setTime(formattedDate);
                    setLoading(false);
                }
                )
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
        <div className="min-h-screen flex items-center justify-center"
        >
            <form className="bg-transparent p-6 rounded-lg shadow-md w-[600px]" onSubmit={handleFormSubmit}>
                <div className="flex items-center transparent justify-center">
                    <img src="images/subnets/subnet-28.webp" alt="Logo" className="w-60 h-60 rounded-full" />
                </div>
                <h1 className="text-5xl font-bold mb-4 text-center mt-4">S&P 500 Oracle</h1>
                <h2 className="text-2xl font-bold mb-4 text-center mt-4">Foundry S&P 500 Oracle incentivizes price predictions.</h2>

                <div className="flex flex-col space-y-4">
                    <span>The Standard and Poor's 500, or simply the S&P 500, is a stock market index tracking the stock performance of 500 of the largest companies listed on stock exchanges in the United States.</span>
                    <button type="submit" className='flex items-center justify-center w-full text-2xl bg-pink-800 rounded-full hover:bg-pink-700 py-4'>
                        {loading ? 'Loading...' : 'Search'}
                    </button>
                </div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <div className="mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                            <ul className="flex flex-col bg-purple-800 p-4 rounded-md">
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div className="select-none cursor-pointer bg-purple-900 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex flex-col rounded-md w-10 h-10 bg-purple-800 justify-center items-center mr-4">💰</div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium">Prediction</div>
                                            <div className="text-white text-sm">{snData[0]}</div>
                                        </div>
                                        <div className="text-white text-xs">{time}</div>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div className="select-none cursor-pointer bg-purple-900 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex flex-col rounded-md w-10 h-10 bg-purple-800 justify-center items-center mr-4">💰</div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium">Prediction</div>
                                            <div className="text-white text-sm">{snData[1]}</div>
                                        </div>
                                        <div className="text-white text-xs">{time}</div>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div className="select-none cursor-pointer bg-purple-900 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex flex-col rounded-md w-10 h-10 bg-purple-800 justify-center items-center mr-4">💰</div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium">Prediction</div>
                                            <div className="text-white text-sm">{snData[2]}</div>
                                        </div>
                                        <div className="text-white text-xs">{time}</div>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div className="select-none cursor-pointer bg-purple-900 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex flex-col rounded-md w-10 h-10 bg-purple-800 justify-center items-center mr-4">💰</div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium">Prediction</div>
                                            <div className="text-white text-sm">{snData[3]}</div>
                                        </div>
                                        <div className="text-white text-xs">{time}</div>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div className="select-none cursor-pointer bg-purple-900 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex flex-col rounded-md w-10 h-10 bg-purple-800 justify-center items-center mr-4">💰</div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium">Prediction</div>
                                            <div className="text-white text-sm">{snData[4]}</div>
                                        </div>
                                        <div className="text-white text-xs">{time}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </form >
        </div>
    );
};

export default SnOracle;
