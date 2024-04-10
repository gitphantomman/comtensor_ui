"use client"
import { useRef, useState, useEffect } from "react";
import ResultData from "./result-data";
import Loading from "../loading";

const testData = [
    {
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
    },
]

const MultiModality = () => {
    const inputRef = useRef<HTMLInputElement|null>(null);
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
   
         if(inputElement) {
            inputElement.addEventListener('keypress', handleKeyPress);
   
            return () => {
               inputElement.removeEventListener('keypress', handleKeyPress);
            };
         }

    }, [inputVal]);

    const  searchData = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setResultData(testData);
        setLoading(false);
    }


    return (
        <div className="mt-[40px]">
            {
                loading && (
                    <Loading/>
                )
            }
            <input ref={inputRef} value={inputVal} onChange={(e) => setInputValue(e.target.value)}  disabled={loading}
                className="w-full bg-gray-500 py-5 px-3 rounded-xl outline-none 
                    hover:bg-[#303846] focus:bg-[#303846] focus:border-primary duration-300 transition-all "
                type="text" placeholder="Type and press enter..."
            />
            <ResultData data={resultData}/>
        </div>
    )
}


export default MultiModality;