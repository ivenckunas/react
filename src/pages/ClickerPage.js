import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClickerComp from '../components/ClickerComp'
import { setQuant } from '../store/appStore'

function ClickerPage({ step }) {

  const dispatch = useDispatch()

  const { quant } = useSelector((state) => state.appStore)

  return (
    <div className='main-page'>
      <div >
        <ClickerComp step={step}></ClickerComp>
        <div className='flex'>
          <div className='buttons'>
            <Button variant='contained' color='primary' onClick={() => dispatch(setQuant(quant - 1))}>
              Minus One
            </Button>
            <Button variant='contained' color='primary' onClick={() => dispatch(setQuant(quant + 1))}>
              Add One
            </Button>
          </div>
        </div>
      </div></div>
  )
}

export default ClickerPage