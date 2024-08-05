"use client";

import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

type InputProps = {
  title: string;
  placeholder: string;
  data: string[];
  setData: Dispatch<SetStateAction<string[]>>;
  setRespuesta: Dispatch<SetStateAction<string[]>>;
};

const Input: React.FC<InputProps> = ({
  title = "Pregunta",
  placeholder = "Haga su pregunta",
  data,
  setData,
  setRespuesta,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddClick = async () => {
    if (inputValue.trim() !== "") {
      setData((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
      try {
        // Limpiar el estado `respuesta` antes de agregar la nueva respuesta
        setRespuesta([""]);
        const response = await axios.post("http://localhost:8000/api/chat", {
          input: inputValue,
          chat_history: [], // Puedes ajustar esto si necesitas pasar el historial
        });
        setRespuesta([response.data.answer]);
      } catch (error) {
        console.error("Error querying AI:", error);
      }
    }
  };

  return (
    <div className="flex justify-end p-4">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="p-2 border border-gray-300 rounded mr-2 flex-grow"
          />
          <button
            onClick={handleAddClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Ir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
