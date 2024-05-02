"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUpload, FaPlay, FaRedo } from 'react-icons/fa'
import NoImageUploaded from './NoImageUploaded';
import ImageItem from './ImageItem';

const Vison = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); 
  const [imageList, setImageList] = useState<string[]>([]); 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        setImageList((prevList) => [...prevList, result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setUploadedImage(null);
  };

  const handleAnalyze = () => {
    alert("Analyze button clicked"); 
  };

  return (
    <div className="min-h-screen flex flex-col transparent border border-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center transparent">
          <img src="images/comlogo.png" alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
          <h1 className="text-xl font-bold">Subnet 19 Vison</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-200">Comtensor list</Link>
            </li>
            <li>
              <Link href="/upload" className="hover:text-blue-200">Upload</Link>
            </li>
            <li>
              <Link href="/tools" className="hover:text-blue-200">Tools</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-grow">
        <aside className="w-1/4 p-4 transparent">
          <ul className="space-y-2">
            <li><button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Recognition</button></li>
            <li><button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Embeddings</button></li>
            <li><button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Object Detection</button></li>
            <li><button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Segmentation</button></li>
          </ul>
        </aside>
        <section className="w-3/4 p-4">
          <h2 className="font-bold text-lg text-black">Uploaded Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {uploadedImage ? (
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center ">
                <img
                  src={uploadedImage}
                  alt="Uploaded Image"
                  className="w-64 h-64 object-cover rounded mb-4"
                />
                <div className="flex space-x-4">
                  <button
                    onClick={handleAnalyze}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    <FaPlay className="inline mr-2" /> Analyze
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    <FaRedo className="inline mr-2" /> Reset
                  </button>
                </div>
              </div>
            ) : (
              <NoImageUploaded /> 
            )}

            <div className="mt-4">
              <label
                htmlFor="upload" 
                className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                <FaUpload className="mr-2" />
                Upload Image
              </label>

              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <br />
            <h2 className="text-lg font-bold mb-4 text-black px-8">Uploaded Images List</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className='space-y-4'>
                {imageList.map((image, index) => (
                  <ImageItem
                    key={index}
                    src={image}
                    alt={`Uploaded Image ${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Image Analysis Tool. All rights reserved.</p>
        <p>Support | Documentation | Contact Us</p>
      </footer>
    </div>
  );
}

export default Vison;