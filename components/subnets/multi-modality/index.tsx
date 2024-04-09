"use client"
import { useRef, useState, useEffect } from "react";



const MultiModality = () => {
    const inputRef = useRef<HTMLInputElement|null>(null);
    const [inputVal, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                
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


    return (
        <div className="mt-[40px]">
            <input ref={inputRef} value={inputVal} onChange={(e) => setInputValue(e.target.value)}  disabled={loading}
                className="w-full bg-gray-500 py-5 px-3 rounded-xl outline-none 
                    hover:bg-[#303846] focus:bg-[#303846] focus:border-primary duration-300 transition-all "
                type="text" placeholder="Type ..."
            />
        </div>
    )
}


export default MultiModality;