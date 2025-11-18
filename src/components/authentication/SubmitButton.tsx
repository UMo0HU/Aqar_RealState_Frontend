import type { FC, ReactNode } from "react";

const SubmitButton: FC<{ children: ReactNode, size? : string | undefined}> = (props) => {
  return <button className={`bg-gray-600 text-white text-xl ${props.size === "full" ? "w-full" : "w-3/4"} p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-100`}>
        {props.children}
    </button>
}

export default SubmitButton;