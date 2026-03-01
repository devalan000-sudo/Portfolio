import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

// Componente envoltorio para manejar la carga en cada cambio de ruta
const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Iniciando Sistema");
  const location = useLocation();

  useEffect(() => {
    // Skip loading animation for hash navigation (scroll to section)
    if (location.hash) {
      return;
    }
    
    setLoading(true);
    
    // Determinar el mensaje según la ruta
    if (location.pathname.startsWith('/proyecto/')) {
      setLoadingMessage("Ingresando al proyecto");
    } else if (location.pathname === '/') {
      setLoadingMessage("Cargando portafolio");
    } else {
      setLoadingMessage("Iniciando Sistema");
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Versión simplificada solo en la página principal
  const isSimple = location.pathname === '/';

  return (
    <>
      {loading && <LoadingScreen message={loadingMessage} simple={isSimple} />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageWrapper>
        <div className="bg-[#0e1012] min-h-screen">
          <Routes>
            <Route path="/" element={<><HeroSection /><MainContent /></>} />
            <Route path="/proyecto/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </PageWrapper>
    </Router>
  );
}

export default App;