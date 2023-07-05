import React from 'react';
import Todo from './pages/Todo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;