import { Routes, Route, Navigate } from 'react-router-dom';
import Game2048 from './components/Game2048';

const App = () => {
  return (
    <Routes>
      <Route path="/2048" element={<Game2048 />} />
      <Route path="/" element={<Navigate to="/2048" replace />} />
    </Routes>
  );
};

export default App;
