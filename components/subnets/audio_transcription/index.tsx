"use client"
import React from 'react';
import { styled } from '@mui/material/styles';
import { useRef, useState, useEffect } from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Audio_transcription = () => {
  const [isRecording, setRecording] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...e.target.files]);
    }
  };

  useEffect(() => {
    if (isRecording && !isPlaying) {
      progressRef.current = window.setInterval(() => {
        setProgress((prevProgress) => {
          const progressDiff = Math.random() * 2;
          const bufferDiff = Math.random() * 2;
          const newProgress = prevProgress + progressDiff;
          setBuffer(newProgress + bufferDiff);
          return newProgress;
        });
      }, 500);
    } else {
      if (progressRef.current !== null) {
        clearInterval(progressRef.current);
        progressRef.current = null;
      }
    }
    return () => {
      if (progressRef.current !== null) {
        clearInterval(progressRef.current);
        progressRef.current = null;
      }
    };
  }, [isRecording, isPlaying]);

  const handleRecordingToggle = () => {
    setRecording((prevState) => !prevState);
    setPlaying((prevState) => !prevState);
  };

  const handleStopRecording = () => {
    setRecording(false);
    setPlaying(false);
    setProgress(0);
    setBuffer(10);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className="mt-[90px]">
      <section className="bg-transparent dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-pink-800 drop-shadow-md dark:text-white hover:bg-gray-200 dark:hover:bg-pink-700" role="alert">
            <img src="assets/subnet11.png" className="rounded-full w-48"></img>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Audio Transcription by powered Comtensor</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"></p>
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            <div className="bg-transparent border border-gray-100 rounded-md h-48">
              <button onClick={handleRecordingToggle}>
                {isRecording ? (
                  <MicNoneIcon sx={{ fontSize: '96px' }} />
                ) : (
                  <KeyboardVoiceIcon sx={{ fontSize: '96px' }} />
                )}
              </button>
              {isRecording && (
                <div className='px-4 mt-4'>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                  </Box>
                </div>
              )}

              <div className="flex flex-row items-center px-12 justify-start space-x-4 mt-4">
                <div className="w-12">
                  {isPlaying ? (
                    <PlayCircleFilledWhiteIcon sx={{ fontSize: '48px' }} onClick={handleRecordingToggle} />
                  ) : (
                    <PauseCircleFilledIcon sx={{ fontSize: '48px' }} onClick={handleRecordingToggle} />
                  )}
                </div>
                <div className="w-12">
                  <StopCircleIcon sx={{ fontSize: '48px' }} onClick={handleStopRecording} />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            <form>
              <div className="flex flex-rol">
                <div className="bg-transparent text-white">
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <input
                      className='hidden'
                      type="file"
                      onChange={handleFileChange}
                      multiple  // Allow multiple file selection
                      accept=".mp3, .wav, , .wma, .ogg" // Optional: Specify accepted file types
                    />
                  </Button>
                </div>
              </div>
              <div className="text-white dark:text-black">
                <List>
                  {selectedFiles.map((file, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={file.name}
                        // secondary={`${file.size} bytes`} 
                        className='text-white' />
                      <Button variant="contained" color="primary" >
                        Generate
                      </Button>&nbsp;
                      <Button variant="contained" color="warning" onClick={() => setSelectedFiles([])} startIcon={<DeleteIcon />}>
                        Clear
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </form>
          </div>

        </div>
      </section >
    </div >
  )
}


export default Audio_transcription;