import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar.tsx";
import HomePage from "./components/HomePage.tsx";
import NouvellePage from "./components/NouvellePage.tsx";
import Footer from "./components/Footer.tsx";
import SubscriptionPage from "./components/subscriptionPage.tsx";

function App() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nouvelle/:id" element={<NouvellePage />} />
                <Route path="/subscriptionPage" element={<SubscriptionPage/>}/>
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;