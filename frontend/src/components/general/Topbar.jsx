import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import { DateContext } from '../contexts/DateContext';
import { useAuth } from '../contexts/AuthContext';

function Topbar() {
  const user = useAuth()
  const { date, setDate } = useContext(DateContext);
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
    console.log(user.user);
    
    getDate()
  },[])
  return (
    <div className="flex justify-between pb-8 pt-3 px-5 bg-neutral-950 text-white shadow-md">
      <div>

      <h2 className="text-2xl font-bold">Hoy</h2>
      <p className="text-sm">{date}</p>
      <p className="text-2xl">Bienvenido {user.user.username}!</p>
      </div>
      <Link to="new">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold  px-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        </button>
      </Link>
    </div>  
  )
}

export default Topbar