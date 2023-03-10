import React, { useCallback, useState } from 'react'

const defaultTimer = {
  seconds :0 ,
  minuts  :25
}


export const Timer = () => {
  
  let countDown = 10
  const [isStart, setIsStart] = useState(false)
  const [isStop, setIsStop] = useState(false)

  function zeroume(time:number){
    return  ( '00' + time ).slice( -2 );
  }


  const [remaindingTimer,setRemaindingTimer] = useState(defaultTimer)

  function updateTimer(countDown:number){
    console.log(countDown)
    
    setRemaindingTimer(
      {
        minuts: Math.floor(countDown / 60),
        seconds:countDown % 60
      }
    )

  }
  // タイマーを起動する
  function TapStartButton(){
    // isStart = !isStart
    
    if (!isStop) {
      setIsStart(!isStart)
      console.log("タイマーを開始する")

      countDown = 1500
      const intervalId = setInterval(()=>{
        countDown -= 1
        updateTimer(countDown)
        if (countDown == 0 || isStop){
          clearInterval(intervalId)
          // 休憩のタイマーを開始したい
          StartRestTimer()
        }
       
      },1000)
    }
  }
  function StartRestTimer(){
    countDown = 300

    const intervalId = setInterval(()=>{
      
      countDown -= 1
      updateTimer(countDown)
      if (countDown == 0){
        clearInterval(intervalId)
        // 休憩のタイマーを開始したい   
        setIsStart(false)
        
      }
     
    },1000)
  }

  function StopTimer(){
    setIsStop(!isStop)
  }
  return (
    <div className=" flex justify-center py-16">
      <div className='items-center'>
     
        <div className='w-96 h-96 rounded-full border-2 border-black flex justify-center items-center bg-blue-400'>
          <h1 className=" font-bold text-4xl "><span>{zeroume(remaindingTimer.minuts) }</span>:<span>{zeroume(remaindingTimer.seconds)}</span></h1>
        </div>
        

        <div className='flex justify-center '>
      
          <div className="mt-16">
            {
              !isStart ? (<button  onClick={() => {TapStartButton()}} className="shadow-lg px-2 py-1  bg-white text-lg  font-semibold rounded  bg-red-400 hover:bg-gray-200">始める</button>): (<></>)
            }
           
            
            
          </div>
        </div>
      </div>
    </div>
   
  )
}
