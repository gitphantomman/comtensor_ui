"use client"
import { useRef, useState, useEffect } from "react";
import Spinner from "../Spinner";
import axios from "axios";
import { PlayArrow } from "@mui/icons-material";
import { DetailsRounded } from "@mui/icons-material";
import MusicPlayer from "@/components/MusicPlayer";
import { UploadFile } from '@mui/icons-material';

const Audio_generation = () => {
  return (
    <div className="mt-[90px]">
      <section className="bg-transparent dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-pink-800 drop-shadow-md dark:text-white hover:bg-gray-200 dark:hover:bg-pink-700" role="alert">
            <img src="assets/subnet16.png" className="rounded-full w-48"></img>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Audio Generation by powered Comtensor</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Enter prompt to generate your own audio.</p>
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            <textarea name="" className="w-full rounded-md bg-transparent" cols={50} rows={10} placeholder="Enter your text and press generate button"></textarea>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pink-800 hover:bg-pink-500 focus:ring-4 focus:ring-primary-300 dark:bg-pink-800 dark:focus:ring-primary-900">
              <PlayArrow />
              Generate
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-pink-800 dark:focus:ring-primary-900">
              <UploadFile />
              <label htmlFor="
              ">Upload</label>
              <input type="file" className="hidden" />
            </a>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-green-800 rounded-full dark:bg-green-800 dark:text-white hover:bg-gray-200 dark:hover:bg-pink-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 hover:bg-green-500">Comtensor</span> <span className="text-sm font-medium">audio list</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><hr /></h1>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 text-white hover:bg-blue-500 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="The wind blowing from the calm seaside" duration={56} />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 text-white hover:bg-blue-500 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="Exhilaration in a tropical forest" duration={23} />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 text-white hover:bg-blue-500 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="The enchanting world of space" duration={32} />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 text-white hover:bg-blue-500 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="The sun rising from the sea" duration={85} />
            </div>
          </div>
        </div>

        <div className="w-full h-[500px] xl:h-[415px] md:h-[204px] h-[370px] flex flex-col items-center justify-evenly mb-1" style={{ backgroundColor: '#151719' }}>
          <div className="text-center flex items-center justify-center relative">
            <h1 className="mb-1 font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl md:text-5xl lg:text-6xl text-3xl">Whaaaaaat?</h1>
            <h3 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-[64px] md:text-4xl lg:text-6xl text-lg absolute">
              What is the Audio Generation?
            </h3>
          </div>
          <ul className="md:pt-28 pt-8 w-3/4 m-auto">
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> This subnetwork is a decentralized system designed for text-to-audio applications within the Bittensor network.Converts text into immersive audio. Initially offering text-to-speech, with upcoming features to blend music into audio creations.</li>
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> The Comtensor Audio Generation subnetwork distinguishes itself from big tech centralized counterparts, such as OpenAI and Google, by offering a unified, decentralized platform that unifies all key audio generation services: Text-to-Speech, Voice Cloning, and Text-to-Music.This ensures users have access to all audio services in one place.</li>
          </ul>
        </div>
        <div className="w-full mt-[160px]" style={{ backgroundColor: '#151719' }}>
          <div className="xl:h-[160px] md:h-[80px] h-[40px] z-10 flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-[64px] md:text-4xl text-lg">
              <span className="text-[#5d5dff]">Mission</span>
            </h1>
          </div>
          <ul className="md:pt-28 pt-8 w-3/4 m-auto">
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> The main goal of the Comtensor Audio Generation is to establish a decentralized platform that incentivizes the creation, distribution and also monetization of AI audio content, such as:</li>
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Text-to-Speech (TTS)</li>
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Voice Cloning (VC)</li>
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Text-to-Music (TTM)</li>
            <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> By introducing audio generation services such as Text-to-Speech, Voice Cloning, and Text-to-Music, this subnetwork expands the range of available services within the Comtensor ecosystem. This diversification enhances the utility and appeal of the Comtensor platform to a broader audience, including creators, influencers, developers, and end-users interested in audio content.</li>
          </ul>
          {/* <div className="w-full pb-4 rounded-xl">
            <div className=" z-10 xl:w-4/5 w-full m-auto">
              <div className="text-center flex items-center justify-start relative">
                <h2 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">What is the Open-Kaito</h2>
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
          </div> */}
        </div>

      </section>
    </div>
  )
}


export default Audio_generation;