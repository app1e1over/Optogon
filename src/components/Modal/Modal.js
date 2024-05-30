import React, { useState } from "react";
import "./style.css";
import { Notify } from "notiflix";
import { nanoid } from "nanoid";

function Modal({ open, setOpen, onAdd, patient }) {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    birth: null,
    left: 0,
    right: 0,
    id: nanoid(),
    checkedAt: new Date().toLocaleDateString(),
    firm: "",
    ...patient
  });
  if (!open) {
    return null;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.name && input.surname && input.birth) {
      onAdd(input);
      setInput({});
      setOpen(false);
      Notify.success("Додано успішно)");
    } else {
      Notify.failure("Не всі поля заповнені");
    }
  };

  return (
    <div
      className="backDrop"
      id="close"
      onClick={(e) => {
        if (e.target.id === "close") {
          setOpen(false);
        }
      }}
    >
      <form onSubmit={onSubmit}>
        <h1>{patient ? "Редагувати":"Додати"} користувача</h1>
        <label>
          Ім'я{" "}
          <input
            value={input.name}
            onInput={(e) => {
              setInput({ ...input, name: e.target.value.toLowerCase() });
            }}
          />
        </label>
        <label>
          Призвіще{" "}
          <input
            value={input.surname}
            onInput={(e) => {
              setInput({ ...input, surname: e.target.value.toLowerCase() });
            }}
          />
        </label>
        <label>
          Дата народження{" "}
          <input
            type="date"
            value={input.birth}
            onInput={(e) => {
              setInput({ ...input, birth: e.target.value });
            }}
          />
        </label>
        <label>
          Ліве око{" "}
          <ul>
            <li>
              Сфера:
              <input
                type="number"
                value={input.left.ball}
                onInput={(e) => {
                  setInput({ ...input, left: {...input.left, ball: e.target.value} });
                }}
              />
            </li>
            <li>
              Цилінд:
              <input
                type="number"
                value={input.left.cylinder}
                onInput={(e) => {
                  setInput({ ...input, left: {...input.left, cylinder: e.target.value} });
                }}
              />
            </li>
            <li>
              Вісь:
              <input
                type="number"
                value={input.left.axis}
                onInput={(e) => {
                  setInput({ ...input, left: {...input.left, axis: e.target.value} });
                }}
              />
            </li>
          </ul>
        </label>
        <label>
          Праве око{" "}
          <ul>
            <li>
              Сфера:
              <input
                type="number"
                value={input.right.ball}
                onInput={(e) => {
                  setInput({ ...input, right: {...input.right, ball: e.target.value} });
                }}
              />
            </li>
            <li>
              Цилінд:
              <input
                type="number"
                value={input.right.cylinder}
                onInput={(e) => {
                  setInput({ ...input, right: {...input.right, cylinder: e.target.value} });
                }}
              />
            </li>
            <li>
              Вісь:
              <input
                type="number"
                value={input.right.axis}
                onInput={(e) => {
                  setInput({ ...input, right: {...input.right, axis: e.target.value} });
                }}
              />
            </li>
          </ul>
        </label>
        <label>
          Фірма{" "}
          <input
            value={input.firm}
            onInput={(e) => {
              setInput({ ...input, firm: e.target.value.toLowerCase() });
            }}
          />
        </label>
        <button>{patient ? "Редагувати":"Додати"}</button>
      </form>
    </div>
  );
}

export default Modal;
