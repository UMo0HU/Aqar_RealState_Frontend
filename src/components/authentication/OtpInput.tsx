import type { ChangeEvent, Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { useRef } from 'react';

const OTPInput : FC<{otpMsg : string , otp: string[], setOtp : Dispatch<SetStateAction<string[]>>}> = (props) => {
    const length = 6;
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    function addToRef(el : HTMLInputElement | null, index : number) {
        if(el && !inputs.current.includes(el)) {
            inputs.current[index] = el;
        }
    }

    function focusInput(index : number) {
        const inputElement = inputs.current[index];
        if(inputElement) {
            inputElement.focus();
        }
    }

    function changeHandler(e : ChangeEvent<HTMLInputElement>, index : number) {
        const { value } = e.target;
        
        if (value.match(/^\d$/)) {
            const newOtp = [...props.otp];
            newOtp[index] = value;
            props.setOtp(newOtp);
        

            if(index < length - 1) {
                focusInput(index + 1)
            }

        }
    };

    function keyDownHandler(e: KeyboardEvent<HTMLInputElement>, index : number) {
        if(e.key === 'Backspace') {
            if(index > -1) {
                const newOtp = [...props.otp];
                newOtp[index] = '';
                props.setOtp(newOtp);
                focusInput(index - 1)
            }
        }
    }

    return (
        <>
        <div className="flex justify-center">
            {props.otp.map((_, index) => (
                <input 
                    key={index}
                    type="text" 
                    maxLength={1}
                    value={props.otp[index]}
                    onChange={(e) => changeHandler(e, index)}
                    onKeyDown={(e) => keyDownHandler(e, index)}
                    ref={(el) => addToRef(el, index)}
                    className="w-8 sm:w-10 h-10 sm:h-12 mx-0.5 sm:mx-1 mb-4 text-center rounded-md text-[24px] border border-gray-300 bg-gray-200 shadow"
                />
            ))}
        </div>
        <p className="text-red-500 -mt-3 font-semibold text-2xs sm:w-80 w-56 text-center">{props.otpMsg}</p>
        </>
    );
}

export default OTPInput;