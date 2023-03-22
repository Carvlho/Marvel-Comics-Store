import { GlobalStyle } from "./globalStyles";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
