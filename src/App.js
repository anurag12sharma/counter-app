import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  function decHandler(){
    setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-600 flex-col gap-10">
      <div>
        <h2 className= " text-cyan-500 text-4xl">Counter App</h2>
      </div>
      <div className="bg-white flex justif gap-12 py-3 rounded-sm text-[25px]">
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-zinc-300 text-5xl">-</button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-zinc-300 text-5xl">+</button>
      </div>
      
      <button onClick={resetHandler} className='bg-cyan-500 text-white px-5 py-2 rounded-sm text-lg'>Reset</button>

    </div>
  );
}

export default App;
