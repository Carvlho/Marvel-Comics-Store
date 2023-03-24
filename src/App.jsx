import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getComics } from "@/store/comics";

import Navbar from "@/components/Navbar";
import ModalCart from "@/components/ModalCart";
import AppRoutes from "@/routes/index.routes";

import { GlobalStyle } from "./globalStyles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, []);

  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar openCart={handleModal} />
      <AppRoutes />

      <ModalCart isOpen={toggleModal} close={handleModal} />
    </>
  );
}

export default App;
