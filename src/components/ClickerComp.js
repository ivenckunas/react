import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

export default function ClickerComp({ step }) {

  const { quant } = useSelector((state) => state.appStore)


  return (
    <Card sx={{ width: 345, height: 400 }} className='card'>
      <h1 style={{ fontSize: '86px' }}>{quant}</h1>
    </Card>
  );
}
