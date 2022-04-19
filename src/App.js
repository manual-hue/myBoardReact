
import './App.css';
import Sidebar from "./template/Sidebar";
import Pages from './pages'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Pages></Pages>
    </BrowserRouter>
  );
}

export default App;
