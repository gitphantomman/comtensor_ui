"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const MultiModal: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [model, setModel] = useState<string | null>(null);
    const [ResponseData, setResponseData] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(event.target.value);
    };

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!inputValue) {
            setError('Please enter a Search Query');
            return;
        }

        if (!model) {
            setError("Please select a model.");
            return;
        }

        setLoading(true);
        setError('');
        setResponseData('');

        try {
            await axios.post(
                "https://api.comtensor.io/sybil/",
                {
                    sources: model,
                    query: inputValue,
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const data = response.data[0].completion;
                    setResponseData(data);
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
                    <img src="images/subnets/subnet-4.webp" alt="Logo" className="w-60 h-60 rounded-full" />
                </div>
                <h1 className="text-5xl font-bold mb-4 text-center mt-4">Multi Modality</h1>
                <h2 className="text-2xl font-bold mb-4 text-center mt-4">Decentralized ML search engine capturing meaning from text & images.</h2>

                <div className="flex flex-col space-y-4">
                    <select
                        value={model ?? ""}
                        onChange={handleModelChange}
                        className="rounded-sm px-12 py-4 bg-transparent w-full text-white"
                    >
                        <option value="" disabled={loading} className='text-black'>
                            Select a model
                        </option>
                        <option value="google" className='text-black rounded-md py-4'>Google</option>
                        <option value="bing" className='text-black rounded-md py-4'>Bing</option>
                        <option value="yahoo" className='text-black rounded-md py-4'>Yahoo</option>
                    </select>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="rounded-sm px-12 py-4 bg-transparent w-full text-white"
                        placeholder="Please enter a Search Query"
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <button type="submit" className='flex items-center justify-center w-full text-2xl bg-pink-800 rounded-full hover:bg-pink-700 py-4'>
                        {loading ? 'Loading...' : 'Search'}
                    </button>
                </div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <div className="mt-12 bg-gray-100 p-4 rounded text-white bg-transparent rounded-md text-2xl">
                            {ResponseData || (loading ? 'Loading...' : 'Search Result will appear here')}
                        </div>
                    )
                }
            </form >
        </div >
    );
};

export default MultiModal;
