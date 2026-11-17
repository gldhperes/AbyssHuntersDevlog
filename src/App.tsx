import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import { LanguageProvider } from "./contexts/LanguageContext.tsx";

// Pages
import Devlog from '../src/pages/Devlog.tsx';

function App() {

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Devlog />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App