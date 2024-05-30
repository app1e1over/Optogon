import React, {  useState } from "react";
import "./style.css";
import Modal from "../Modal/Modal";
import Eye from "./Eye";

function Patient({
  patient ,
  kill,
  modify,
}) {
  const [editing, setEditing] = useState(false);
  const { name, surname, birth, left, right, checkedAt, firm, id } = patient
  if (editing) {
    return (
      <Modal
        open={true}
        setOpen={() => setEditing(false)}
        onAdd={(e) => modify(id, e)}
        patient={patient}
      />
    );
  }
  return (
    <div className="patient">
      <div className="ident">
        {name} {surname}
        <p>{birth}</p>
      </div>
      <div className="eyes">
        <Eye title={"Ліве око:"} eye={left}/>
        <Eye title={"Праве око:"} eye={right}/>
      </div>
      <div>
        <span>Фірма лінз: {firm}</span>

        <p>Дата обстеження: {checkedAt}</p>
        <div style={{display:"flex", gap:"20px"}}>
          <div onClick={() => kill(id)}>🗑️</div>
          <div onClick={() => setEditing(true)}>✍️</div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
