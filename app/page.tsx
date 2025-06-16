'use client'
import { useState } from "react";

interface Persona{
  nombre : string
  apellido : string
}
let InitialStatePersona:Persona ={
  nombre: "",
  apellido: ""
}

export default function Home() {
  const [persona, setPersona] = useState(InitialStatePersona)
  const [eNombre,setENombre] = useState("")
  const handlePersona = (name:string,value:string)=>{
    //validaciones
    if (persona.nombre.length < 3){
      setENombre("Debe tener mas de 3 caracteres")
    }
    setPersona(
      {...persona,[name]:value}
    )
  }

  
  return (
    <form>
      <h1>Hola {persona.nombre} {persona.apellido} </h1>
      <label>Nombre</label><br/>
      <input 
        name="nombre"
        type="text"
        placeholder="Nombre"
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br/>
      <span>{eNombre}</span><br/>

      <label>Apellido</label><br/>
      <input 
        name="nombre"
        type="text"
        placeholder="Apellido"
        onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br/>
      <span></span><br/>
      <button>Registrar</button>
    </form>
  )
}
