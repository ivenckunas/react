import '../src/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ClickerComp from './components/ClickerComp';
import ClickerPage from './pages/ClickerPage';
import IgnasButton from './components/IgnasButton';

function App() {

  return (
    <div className='App'>
      <ClickerPage />
      <IgnasButton />
      <h3>dev branch test meginimas</h3>
    </div>
  );
}

export default App;
