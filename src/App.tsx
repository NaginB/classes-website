import React from 'react';
import './App.css';
import AppRoutes from './Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
