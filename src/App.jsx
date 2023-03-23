import { useEffect, useState } from "react";
import { GlobalStyle } from "./globalStyles";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import ModalCart from "./components/ModalCart";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar openCart={handleModal} />
      <Home />

      <ModalCart isOpen={toggleModal} close={handleModal} />
    </>
  );
}

export default App;
