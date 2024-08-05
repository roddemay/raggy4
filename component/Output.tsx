"use client";

import { Dispatch, SetStateAction } from "react";

interface OutputProps {
  title: string;
  data: string[];
  setData: Dispatch<SetStateAction<string[]>>;
}

const Output: React.FC<OutputProps> = ({ title, data }) => {
  return (
    <div className="mb-4 w-full">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="border border-gray-300 rounded p-2 h-48 overflow-y-scroll">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="mb-2">
              {item}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No responses yet</p>
        )}
      </div>
    </div>
  );
};

export default Output;
