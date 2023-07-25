import "./App.css";
import { useState } from "react";
import FirstPage from "./pages/firstpage";
import SecondPage from "./pages/secondPage";
import TaskFour from "./pages/secondPageComponents/TaskFour/department";

function App() {
  const [openSecondPage, setOpenSecondPage] = useState(false);

  const handleUserSubmit = (userData: {
    userName: string;
    phone_no: number;
    email: string;
  }) => {
    console.log(userData);
    setOpenSecondPage(true);
  };

  return (
    <>
      {!openSecondPage ? (
        <FirstPage onSubmit={handleUserSubmit} />
      ) : (
        <SecondPage />
      )}
    </>
  );
}

export default App;
