
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'



function App() {

  const[principle,setPrinciple]=useState(0)
  const[interest,setInterest]=useState(0)
  const[year,setYear]=useState(0)
  const[simpleInterest,setSimpleInterest]=useState(0)

  const[isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const[isInvalidInterest,setIsInvalidInterest]=useState(false)
  const[isInvalidYear,setIsInvalidYear]=useState(false)

  


  console.log(principle);

  const validateInput=(tag)=>{

    const {name,value}=tag
    console.log(name,value);

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
    if(!!value.match(/^\d*.?[0-9]+$/)){

      if(name=='principle'){
        setPrinciple(value)
        setIsInvalidPrinciple(false)

      }
      else if(name=='interest'){
        setInterest(value)
        setIsInvalidInterest(false)

      }
      else{
        setYear(value)
        setIsInvalidYear(false)
      }

    }else{
      if(name=='principle'){
        setIsInvalidPrinciple(true)

      }
      else if(name=='interest'){
       
        setIsInvalidInterest(true)

      }
      else{
     
        setIsInvalidYear(true)
      }
      
    }
    
    


    console.log(tag);
    

  }
  


  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle && interest && year){

      setSimpleInterest(principle*interest*year/100)



    }
    else{
      alert("please fill the field properly")
    }
    
  }

  const handleReset=()=>{

    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)

    setIsInvalidPrinciple(false)
    setIsInvalidInterest(false)
    setIsInvalidYear(false)


  }


  return (
    <>

      <div style={{ minHeight: "100vh", width: '100%' }} className="d-flex align-item-center justify-content-center bg-dark p-3">
        <div style={{ width: "600px" }} className="bg-light p-5 rounded">
          <h2>Simple Interest Calculator</h2>
          <p>Calculate Your Simple Interest Easily</p>
          <div className='bg-warning shadow rounded d-flex align-items-center justify-content-center text-light flex-column' style={{ height: "150px" }}>

            <h1>₹ &nbsp; {simpleInterest}</h1>
            <h4>Total Simple Interest</h4>

          </div>

          <form action="" className='mt-5' >
            <div className='mb-3'>
              <TextField name='principle' value={principle || ""}  onChange={e=>validateInput(e.target)}  style={{ width: "100%" }} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />

            </div>
           {
            isInvalidPrinciple &&
             <p className='text-danger'>Invalid principle amount</p>
           }
        
            <div className='mb-3'>
              <TextField name='interest' value={interest || ""}   onChange={e=>validateInput(e.target)} style={{ width: "100%" }} id="outlined-basic" label="Rate" variant="outlined" />

            </div>
            {
            isInvalidInterest &&
             <p className='text-danger'>Invalid Interest Rate</p>
           }
            <div className='mb-3'>
              <TextField name='year' value={year || ""}   onChange={e=>validateInput(e.target)} style={{ width: "100%" }} id="outlined-basic" label="Time Period" variant="outlined" />

            </div>
            {
            isInvalidYear &&
             <p className='text-danger'>Invalid Interest Rate</p>
           }
                <Stack direction="row" spacing={2}>

                <Button disabled={isInvalidPrinciple || isInvalidInterest  || isInvalidYear} type='submit' onClick={handleCalculate} className='w-100 bg-dark' style={{height:'50px'}} variant="contained">Calculate</Button>
                <Button onClick={handleReset} className='w-100' variant="outlined">Reset</Button>
                 
                </Stack>
          </form>
 


        </div>

      </div>

    </>
  )
}

export default App
