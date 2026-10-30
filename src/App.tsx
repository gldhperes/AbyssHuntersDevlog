import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Devlog from '../src/pages/Devlog.tsx';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Devlog />} />
      </Routes>
    </Router>
  )
}

export default App