import React, { useEffect, useState } from "react";
import "./style.css";
import Modal from "../Modal/Modal";

function Patient({
  patient: { name, surname, birth, left, right, checkedAt, firm, id },
  kill,
  modify,
}) {
  const [editing, setEditing] = useState(false);
  if (editing) {
    return (
      <Modal open={true} setOpen={()=>setEditing(false)} onAdd={(e)=>modify(id, e)}/>
    );
  }
  return (
    <div className="patient">
      <div>
        {name} {surname}
        <p>{birth}</p>
      </div>

      <div>
        <span>Ліве око: {left}</span>
        <span> Праве око: {right}</span>
        <span>Фірма лінз: {firm}</span>

        <p>Дата обстеження: {checkedAt}</p>
        <div>
          <div onClick={() => kill(id)}>🗑️</div>
          <div onClick={() => setEditing(true)}>✍️</div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
