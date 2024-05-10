"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import backgroundImage from '@/public/images/transcription.jpg';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const AudioTranscriptionApp: React.FC = () => {

  const [inputValue, setInputValue] = useState('');
  const [transcription, setTranscription] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!inputValue) {
      setError('Please enter a YouTube URL');
      return;
    }

    setLoading(true);
    setError('');
    setTranscription('');

    try {
      await axios.post(
        "https://api.comtensor.io/transcription/",
        {
          type: 'url',
          audio_url: inputValue,
          audio_sample: ""
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then(response => {
          const data = response.data[0].transcription_output;
          setTranscription(data);
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
      style={{
        backgroundImage: "@/public/images/transcription.jpg", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <form className="bg-transparent p-6 rounded-lg shadow-md w-[600px]" onSubmit={handleFormSubmit}>
        <div className="flex items-center transparent justify-center mt-4">
          <img src="images/subnets/Sn11-logo.webp" alt="Logo" className="w-60 h-60 rounded-full" />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center mt-4">Audio Transcription App</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="rounded-full px-12 py-4 bg-transparent w-full text-white focus:border-red-900 focus:border-4"
            placeholder="Paste YouTube URL here..."
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button type="submit" className='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-full mx-auto'>
            <div className="flex sm:flex-cols-12 gap-2">
              <div className="col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </div>
              <div className="flex col-span-2 pt-2 justify-center">{loading ? 'Transcribing...' : 'Create Transcription'}</div>
            </div>
          </button>
        </div>
        {
          loading ? (
            <Spinner />
          ) : (
            <div className="mt-12 bg-gray-100 p-4 rounded text-black rounded-md">
              {transcription || (loading ? 'Transcribing...' : 'Transcription will appear here')}
            </div>
          )
        }
      </form>
    </div>
  );
};

export default AudioTranscriptionApp;
