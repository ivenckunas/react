import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ClickerComp from './components/ClickerComp';
import ClickerPage from './pages/ClickerPage';

function App() {

  return (
    <div className='App'>
      <ClickerPage />
    </div>
  );
}

export default App;
