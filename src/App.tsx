import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Donate from './pages/Donate';
import FounderStory from './pages/FounderStory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/who-we-are' element={<WhoWeAre />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/founder-story' element={<FounderStory />} />
      </Routes>
    </Router>
  );
}

export default App;