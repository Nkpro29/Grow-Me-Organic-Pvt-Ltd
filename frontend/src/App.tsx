import "./App.css";
import FirstPage from "./pages/firstpage";
import SecondPage from "./pages/secondPage";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
function App() {
  // const [openSecondPage, setOpenSecondPage] = useState(false);

  // const handleUserSubmit = (userData: {
  //   userName: string;
  //   phone_no: number;
  //   email: string;
  // }) => {
  //   console.log(userData);
  //   setOpenSecondPage(true);
  // };


  return (
    <>
      <Router>
        <Routes>
        <Route path="/" Component={FirstPage} />
        <Route path="/secondPage" Component={SecondPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
