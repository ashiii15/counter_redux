import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementFive, reset } from '../Redux/CounterSlice'

function Counter() {
   const dispatch =  useDispatch()
   const count = useSelector(state=>state.counterReducer.count)

  return (
    <>
    <div style={{height:"80vh"}} className=' w-100 d-flex align-items-center justify-content-center'>
      <div style={{width:'auto'}} className='border rounded  d-flex flex-column align-items-center justify-content-center '> Counter
    <h1>{count}</h1>
    <div className='flex '>
    <button onClick={()=>dispatch(decrement())} className='btn btn-info m-1'>Decrease</button>
    <button onClick={()=>dispatch(reset())} className='btn btn-warning m-1'>Reset</button>
    <button onClick={()=>dispatch(increment())} className='btn btn-success m-1'>Increase</button>
    <button onClick={()=>dispatch(incrementFive(10))} className='btn btn-danger m-1'>IncreaseByFive</button>

    </div>
    </div>
    </div> 
    </>
  )
}

export default Counter