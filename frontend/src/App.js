import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import Notes from "./components/Notes";
import Manage from "./components/Manage";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/reset-password" element={<ResetPasswordPage/>}/>
                <Route path="/notes" element={<Notes/>}/>
                <Route path="/manage" element={<Manage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
