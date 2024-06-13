import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');

  //useEffect metodunun icerisine, callback fonksiyonu parametre olarak yazildi!
  


  //1.Durum: useEffect(()=>{})
  useEffect(() => {
    console.log("Her zaman calisir!")
  })


  //2.Durum: useEffect(()=>{},[])
  useEffect(()=>{
    console.log("Ilk render edildiginde calisir!")
  },[])


  //3.Durum: useEffect(()=>{}, [firstName])
  useEffect(()=>{
    console.log("Ilk render edildiginde VE firstName state degeri degistiginde calisir!")
  },[firstName])


  //4.Durum: useEffect(()=>{}, [firstName, lastName])
  useEffect(()=>{
    console.log("Ilk render edildiginde VE firstName VEYA lastName degerleri degistiginde calisir!")
  },[firstName,lastName])
  


  return (
    <>
      <div>
        <div><button onClick={()=>setFirstName("Heval")} >Change Name</button></div>
        <div><button onClick={()=>setLastName("Özdemir")} >Change Lastname</button></div>
      </div>
    </>
  )
}

export default App

//Callback fonksiyonu, başka bir fonksiyona argüman olarak geçirilen ve belirli bir 
//işlem tamamlandığında veya belirli bir olay gerçekleştiğinde çağrılan bir fonksiyondur. (() => {})
