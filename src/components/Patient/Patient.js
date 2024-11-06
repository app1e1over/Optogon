import React, { useState } from "react";
import "./style.css";
import Modal from "../Modal/Modal";
import Eye from "./Eye";
import { Confirm } from "notiflix";

function Patient({ patient, kill, modify }) {
  const [editing, setEditing] = useState(false);
  const { name, surname, birth, left, right, checkedAt, firm, id } = patient;
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
        <Eye title={"Праве око:"} eye={right} />

        <Eye title={"Ліве око:"} eye={left} />
      </div>
      <div>
        <span>Фірма лінз: {firm}</span>

        <p>Дата обстеження: {checkedAt}</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log(
                Confirm.show(
                  "Підтвердити",
                  "Точно видалити?",
                  "Так",
                  "Ні",
                  () => kill(id)
                )
              );
            }}
          >
            🗑️
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => setEditing(true)}>
            ✍️
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
