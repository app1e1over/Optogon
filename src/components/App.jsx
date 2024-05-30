import React, { useEffect, useState } from "react";
import PatientContainer from "./PatientContainer/PatientContainer";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";

export const App = () => {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("patients")));
  if (!patients) setPatients([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(()=>{
    const strin = JSON.stringify(patients);
    if(localStorage.getItem("patients")!==strin){
      localStorage.setItem("patients",strin);
    }
  }, [patients])
  const kill = (id)=>{
    setPatients(patients.filter(v=>v.id!==id))
  }
  useEffect(()=>{
    if(filter.includes(" ")){
      const arr= filter.split(" ");
      setFiltered(patients.filter(v=>(v.name.includes(arr[0]) && v.surname.includes(arr[1])) || (v.name.includes(arr[1]) && v.surname.includes(arr[0]))))
    }else{
      setFiltered(patients.filter(v=>v.name.includes(filter) || v.surname.includes(filter)))
    }
  }, [filter, patients])
  const onAdd = (patient)=>{
    setPatients([...patients, patient]);
  }
  const modify = (id, obj)=>{
    const _id = patients.indexOf(patients.find(v=>v.id===id));
    setPatients([...patients.slice(0, _id), obj, ...patients.slice(_id+1)])
  }
  return (
    <>
      <Header openAdd={()=>setModalOpen(true)}/>
      Ім'я:<input onInput={(e)=>setFilter(e.target.value.toLowerCase())}/>
      <PatientContainer patients={filtered} kill = {kill} modify={modify}/>
      <Modal onAdd={onAdd} setOpen={setModalOpen} open={modalOpen}/>
    </>
  );
};
