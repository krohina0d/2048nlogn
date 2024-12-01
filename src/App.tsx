import { Routes, Route, Navigate } from 'react-router-dom';
import Game2048 from './components/Game2048';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Game2048 />} />
    </Routes>
  );
};

export default App;
