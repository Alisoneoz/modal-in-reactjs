import { useEffect, useState } from "react";
import Modal from "./components/Modal"

function App() {
  const [openModal, setOpenModal] = useState(false);


  useEffect(()=>{
    const timer = setTimeout(()=>setOpenModal(true), 5000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="App bg-purple-500 h-screen">
      Hello world
      <button onClick={()=>{setOpenModal(true)}}>open modal</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default App
