import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
  const navigate = useNavigate();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      navigate('/about'); // Redirect to About on the first load
      setFirstLoad(false); // Set firstLoad to false after the initial redirect
    }
  }, [firstLoad, navigate]);

  return (
    <main className='bg-slate-300/20 h-full'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;