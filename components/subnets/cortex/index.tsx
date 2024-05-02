"use client"
import React, { useState } from 'react'; 
import { FaPaperPlane, FaKey, FaFileAlt, FaInfoCircle, FaGavel, FaClock, FaNetworkWired, FaImage, FaUpload, FaPlay, FaRedo, FaPowerOff, FaChartLine } from 'react-icons/fa'; // Icons for buttons and navigation
import ConfirmationModal from './ConfirmationModal';
import ApiKeyManagementModal from './ApiKeyManagementModal';  
import UsageMetricsModal from './UsageMetricsModal';  

const Cortex: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); 
  const [imageList, setImageList] = useState<string[]>([]); 
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uploadedText, setUploadedText] = useState<string | null>(null);
  const [isApiModalVisible, setIsApiModalVisible] = useState<boolean>(false);
  const [isUsageMetricsModalVisible, setIsUsageMetricsModalVisible] = useState<boolean>(false);  

  const chartData = {
    labels: ["2024-04-28T00:00:00", "2024-04-28T01:00:00", "2024-04-28T02:00:00"],  
    datasets: [
      {
        label: 'API Usage',
        data: [75, 85, 90],  
        borderColor: 'rgba(54, 162, 235, 1)',  
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  
      },
    ],
  };

  const handleApiKeyManagement = () => {
    setIsApiModalVisible(true);
  };

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

  const handleTextFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const textContent = e.target?.result as string;
        setUploadedText(textContent);
      };
      reader.readAsText(file);
    }
  };

  const handlePromptTransmission = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalVisible(false);
    }, 5000);
  };

  return (
    <div className="mt-12 min-h-screen flex flex-col transparent">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-full">
        <div className="flex items-center space-x-4">
          <img src="images/comlogo.png" alt="Cortex.t" className="h-8 w-8" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#dashboard" className="hover:text-blue-200">Dashboard</a></li>
              <li><a href="#api" className="hover:text-blue-200">API Integration</a></li>
              <li><a href="#network" className="hover:text-blue-200">Network</a></li>
              <li><a href="#prompts" className="hover:text-blue-200">Prompts</a></li>
              <li><a href="#mining" className="hover:text-blue-200">Mining & Rewards</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center p-6">
        <section id="dashboard" className="w-full transparent p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">API Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg text-black">
              <FaGavel className="text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold">API Usage</h3>
                <p>75% used</p>
                <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg text-black">
              <FaInfoCircle className="text-green-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold">Statistics</h3>
                <p>Total Requests: 1,500</p>
                <p>Average Response Time: 120ms</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg text-black">
              <FaClock className="text-red-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold">Rate Limits</h3>
                <p>Max Requests: 2,000 per hour</p>
                <p>Remaining Requests: 500</p>
              </div>
            </div>
          </div>
        </section>

        <section id="api" className="w-full mt-6 transparent p-6 rounded-lg shadow-md ">
          <h2 className="text-lg font-bold mb-4">API Integration</h2>
          <div className="flex flex-col space-y-4">
            <ApiKeyManagementModal
              isVisible={isApiModalVisible}
              onClose={() => setIsApiModalVisible(false)}
            />

            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleApiKeyManagement}  
            >
              <FaKey className="inline mr-2" /> Manage API Keys
            </button>

            <UsageMetricsModal
              isVisible={isUsageMetricsModalVisible}  
              onClose={() => setIsUsageMetricsModalVisible(false)}  
              chartData={chartData}  
            />

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsUsageMetricsModalVisible(true)}  
            >
              <FaChartLine className="inline mr-2" /> View Usage Metrics
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              <FaImage className="inline mr-2" /> Interactive Documentation
            </button>
          </div>
        </section>

        <section id="network" className="w-full mt-6 transparent p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Network Visualization</h2>
          <div className="bg-gray-200 p-12 rounded-lg text-black">
            <p>Interactive charts and graphs.</p>
          </div>
        </section>

        <section id="prompts" className="w-full mt-6 transparent p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Prompt Processing</h2>
          <div className="flex flex-col space-y-4 text-black">
            <ConfirmationModal
              isVisible={isModalVisible}
              onConfirm={handleConfirm}
              onCancel={() => setIsModalVisible(false)}
              message="Are you sure you want to submit the prompt?"
              isLoading={isLoading}
            />
            <textarea
              value={uploadedText || ''}
              placeholder="Uploaded text content will appear here..."
              rows={5}
              className="border border-gray-300 p-2 rounded w-full text-black"
            />

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div>
                <label
                  htmlFor="upload-text"
                  className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
                >
                  <FaFileAlt className="mr-2" /> Upload Text
                </label>
                <input
                  id="upload-text"
                  type="file"
                  accept=".txt"
                  onChange={handleTextFileChange}
                  className="hidden"
                />
              </div>
              <div>
                <label
                  htmlFor="upload"
                  className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                >
                  <FaUpload className="mr-2" /> Upload Image
                </label>
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <div>
                <button
                  className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                  onClick={handlePromptTransmission}
                >
                  <FaPaperPlane className='mr-2' /> Submit
                </button>
              </div>
            </div>

            {uploadedImage && (
              <div className="bg-gray-200 p-4 rounded-lg shadow-md mt-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded Image"
                  className="w-full h-64 object-cover rounded"
                />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
                  onClick={() => setUploadedImage(null)}
                >
                  <FaRedo className="inline mr-2" /> Reset
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="mining" className="w-full mt-6 transparent p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Mining & Rewards</h2>
          <div className="bg-gray-200 p-12 rounded-lg text-black">
            <p>Mining performance and rewards.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Cortex.t. All rights reserved.</p>
        <p>
          <a href="#terms" className="hover:text-gray-400">Terms of Service</a> |
          <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a> |
          <a href="#support" className="hover:text-gray-400">Support & Contact</a>
        </p>
      </footer>
    </div>
  );
};

export default Cortex;
