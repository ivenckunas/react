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
      <h1>test</h1>
      <h2>test2</h2>
    </div>
  );
}

export default App;
