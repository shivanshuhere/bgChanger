/* eslint-disable react/prop-types */
import { useState } from "react";

function BgChanger() {
        const [color, setColor] = useState('slate')

function Btn ({name}) {
  
    return (
    <>
    <button onClick={()=> setColor(name)} className="min-w-fit text-center h-8 px-4  borde-2 rounded-sm   bg-slate-700
    hover:translate-y-1 hover:border-2 transition-colors hover:bg-red-400
    focus:bg-black
    " >{name}</button>
    </>
);

}

  return (
    <div id='wrap' style={{backgroundColor : color}} className="h-screen bg-slate-800 text-center flex justify-center flex-col place-items-center text-white font-mono transition-colors ">
      <h1 className="text-4xl font-semibold text-violet-800">Background Changer</h1>
      <p style={{color: color}} className="bg-slate-800 shadow-md shadow-slate-500 px-4 py-1 my-2" >Selected Color : {color}</p>
      <div className="color flex gap-4 flex-wrap justify-center place-content-center mt-8" >

        <Btn  name='Blue'/>
        <Btn  name='Pink'/>
        <Btn  name='Red'/>
        <Btn  name='Green'/>
        <Btn  name='Orange'/>
        <Btn  name='Yellow'/>
        <Btn  name='Cyan'/>
        <Btn  name='Black'/>

      </div>
    </div>
  );
}








export default BgChanger;
