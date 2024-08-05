"use client";
import { useState } from "react";
import Input from "../components/Input";
import Output from "../components/Output";

export default function Page() {
  const [pregunta, setPregunta] = useState<string[]>([]);
  const [respuesta, setRespuesta] = useState<string[]>([]);

  return (
    <div className="bg-white min-h-screen text-black flex justify-center items-center">
      <div className="w-1/2">
        <Input
          title="Pregunta"
          placeholder="Haga su pregunta"
          data={pregunta}
          setData={setPregunta}
          setRespuesta={setRespuesta}
        />
        <Output
          title="Respuesta"
          data={respuesta}
          setData={setRespuesta}
        />
      </div>
    </div>
  );
}
