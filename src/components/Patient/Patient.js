import React, {  useState } from "react";
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
      <Modal
        open={true}
        setOpen={() => setEditing(false)}
        onAdd={(e) => modify(id, e)}
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
        <span>
          Ліве око:{" "}
          <ul>
            <li>Сфера: {left.ball}</li>
            <li>Циліндер: {left.cylinder}</li>
            <li>Вісь: {left.axis}</li>
          </ul>
        </span>
        <span>
          {" "}
          Праве око:
          <ul>
            <li>Сфера: {right.ball}</li>
            <li>Циліндер: {right.cylinder}</li>
            <li>Вісь: {right.axis}</li>
          </ul>
        </span>
      </div>
      <div>
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
