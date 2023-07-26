import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import { useState } from "react";
import FirstPage from "./pages/firstpage";
import SecondPage from "./pages/secondPage";
function App() {
    const [openSecondPage, setOpenSecondPage] = useState(false);
    const handleUserSubmit = (userData) => {
        console.log(userData);
        setOpenSecondPage(true);
    };
    return (_jsx(_Fragment, { children: !openSecondPage ? (_jsx(FirstPage, { onSubmit: handleUserSubmit })) : (_jsx(SecondPage, {})) }));
}
export default App;
