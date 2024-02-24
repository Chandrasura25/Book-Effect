import { useRef } from "react"; 
import './App.css';
import FrontCover from './components/FrontCover'
import BackPage from './components/BackPage'
import BackCover from './components/BackCover'
function App() {
    const active = useRef();
    const blur = useRef();
    const checkboxRef = useRef(null);
    const togglePopup = () => {
      const checkbox = checkboxRef.current;
      if (checkbox.checked) {
        checkbox.checked = false;
      }
    active.current.classList.toggle("active");
    blur.current.classList.toggle("active");
  };
  return (
    <>
   <div className="bg-[#eee] min-h-screen flex justify-center items-center w-full" ref={blur}>
     <div>
        <button onClick={togglePopup} className="px-4 py-2 text-2xl font-semibold outline-none border-2 cursor-pointer">
          +
        </button>
      </div>
    </div>
       <div className="bookCase" ref={active}>
        <input type="checkbox" name="" ref={checkboxRef} className="input" id="checkbox-page1" />
        <div className="book">
          <div className="page" id="page1">
            <FrontCover />
            <BackPage />
          </div>
          <BackCover togglePopup={togglePopup}/>
        </div>
      </div>
    </>
  );
}

export default App;
