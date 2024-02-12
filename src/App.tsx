import { useState } from 'react';
import './App.css';

function App() {

  const [view, setView] = useState(true);

  const moveButton = () => {
    const x =
      Math.random() *
      (window.innerWidth -
        (document.getElementById("noButton")?.offsetWidth || 0));
    const y =
      Math.random() *
      (window.innerHeight -
        (document.getElementById("noButton")?.offsetHeight || 0));
    (document.getElementById("noButton") as HTMLElement).style.left = `${x}px`;
    (document.getElementById("noButton") as HTMLElement).style.top = `${y}px`;
  };




  return (
    <div>
      <div className=''>

    
      <div className="box box10 "></div>
      <div className="box box9"></div>
      <div className="box box8"></div>
      <div className="box box7"></div>
      <div className="box box6"></div>
      <div className="box box5"></div>
      <div className="box box4"></div>
      <div className="box box3"></div>
      <div className="box box2"></div>
      <div className="box box1"></div>
      <div className="box box0"></div>
      </div>
      <div className='flex justify-center items-center h-[100vh] relative '>


        {view ? (
          <div className='starting '>
            <div>
              <h1 className="text-2xl sm:text-6xl text-white font-lobster mb-8">Do you wanna go out with me?</h1>
            </div>

            <div className="flex items-center  justify-center">
              <img src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif" alt="Cute animated illustration" />
            </div>
            <div className="flex justify-center items-center gap-3 mx-auto pt-10">
              <button className="bg-white p-3 px-10 rounded-md hover:bg-black font-semibold text-lg cursor-pointer shadow-md shadow-black/50 hover:text-pink-500 hover:rounded-full " id="yesButton" onClick={() => setView(false)} >Yes</button>
              <button className=" bg-white p-3 px-10 rounded-md hover:bg-black font-semibold text-lg cursor-pointer shadow-md shadow-black/50 hover:text-pink-500 hover:rounded-full" id="noButton" onClick={moveButton} onMouseOver={moveButton}>
                No
              </button>
            </div>
          </div>) :
          (
            <div className='ending  text-center '>
              <div>
                <h1 className="text-5xl sm:text-6xl text-white font-lobster mb-8">Yeeyy ! Finally</h1>
              </div>
              <div className="flex items-center  justify-center ">
                <img
                  src="https://i.postimg.cc/wTDG30TB/yes.gif"
                  alt="Cute animated illustration"
                />
              </div>
              <button className="mt-10 bg-white p-3 px-10 rounded-md hover:bg-black font-semibold text-lg cursor-pointer shadow-md shadow-black/50 hover:text-pink-500 hover:rounded-full" onClick={() => window.location.reload()}>
                Let's Fix a Date
              </button>
              
            </div>
          )
        }
      </div>

    </div>



  )

}

export default App
