import type { FC } from 'react';

import { useState, useRef } from 'react';

const OTPInput = ({ length = 6 }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef([]);

    return (
        <div className="flex justify-center">
            {otp.map((_, index) => (
                <input 
                    key={index}
                    type="text" 
                    maxLength={1}
                    // value={otp[index]}
                    ref={inputs.current[index]}
                    className="w-8 sm:w-10 h-10 sm:h-12 mx-0.5 sm:mx-1 mb-4 text-center rounded-md text-[24px] border border-gray-300 bg-gray-200 shadow"
                />
            ))}
        </div>
    );
}

export default OTPInput;