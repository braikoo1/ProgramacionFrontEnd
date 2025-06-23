'use client'
import { useState, useEffect } from "react";

interface Persona{
  nombre : string
  apellido : string
}
let InitialStatePersona:Persona ={
  nombre: "",
  apellido: ""
}

export default function Home() {
  const miStorage = window.localStorage
  const [persona, setPersona] = useState(InitialStatePersona)
  const [personas,setPersonas] = useState<Persona[]>([])
  const [eNombre,setENombre] = useState("")
  useEffect(()=>{
    let listadoStr = miStorage.getItem("personas")
    if (listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setPersonas(listado)
  }
},[])

  const handlePersona = (name:string,value:string)=>{
    //validaciones
    if (persona.nombre.length < 3){
      setENombre("Debe tener mas de 3 caracteres")
    }
    setPersona(
      {...persona,[name]:value}
    )
  };

  const handleRegistrar = ()=>(
    miStorage.setItem("personas",JSON.stringify([...personas,persona]))

  )

  
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
      <button
        onClick ={()=>handleRegistrar()}>Registrar</button>
    </form>
  )
}
