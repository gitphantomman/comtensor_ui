import React from 'react';

const Spinner = () => {
    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="w-24 h-24 border-t-4 border-b-12 border-red-900 rounded-full animate-spin"></div>
            </div>
        </>
    );
};

export default Spinner;