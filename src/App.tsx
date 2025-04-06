import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar.tsx";
import HomePage from "./components/HomePage.tsx";
import NouvellePage from "./components/NouvellePage.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nouvelle/:id" element={<NouvellePage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;