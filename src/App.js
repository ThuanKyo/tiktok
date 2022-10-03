import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './Components/Home';
import NewsPage from './Components/News';
import ContactPage from './Components/Contact';

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/news">News Page</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Page</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
