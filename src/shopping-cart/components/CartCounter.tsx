'use client'

import { useState } from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {

    const [counter, setCounter] = useState(value);

    const incrementBy = (value = 1) => {
        setCounter(prev => prev + value);
    }

    const decrementBy = (value = 1) => {
        if (counter === 0) return;
        setCounter(prev => prev - 1);
    }

    return (
    <>
    <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => incrementBy()}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" >+1</button>
        <button
          onClick={() => decrementBy()}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2" >-1</button>
      </div>
    </>
    )
}