import React, { useState, useEffect } from 'react';
function Topbar() {
  const [day,setDay] = useState("")
  const [month,setMonth] = useState("")
  const [monthNames,setMonthNames] = useState([
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ])

  const getDate = () =>{
    const today = new Date()

    setDay(today.getDate())
    setMonth(today.getMonth() + 1)
  }
  useEffect(()=>{
    getDate()
  },[])
  return (
    <div className="flex justify-between p-4 bg-neutral-800 text-white rounded-md shadow-md">
      <div>

      <h2 className="text-2xl font-bold">Hoy</h2>
      <p className="text-sm">{day} {monthNames[month]}</p>
      </div>
      <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold  px-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

      </button>
    </div>  
  )
}

export default Topbar