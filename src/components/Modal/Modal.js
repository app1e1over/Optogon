import React, { useState } from "react";
import "./style.css";
import { Notify } from "notiflix";
import { nanoid } from "nanoid";

function Modal({ open, setOpen, onAdd }) {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    birth: null,
    left: 0,
    right: 0,
    id:nanoid(),
    checkedAt: new Date().toLocaleDateString(),
    firm:""
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
      Notify.success("Додано успішно)")
    }else{
        Notify.failure("Не всі поля заповнені")
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
        <h1>Додати користувача</h1>
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
          <input
            type="number"
            value={input.left}
            onInput={(e) => {
              setInput({ ...input, left: e.target.value });
            }}
          />
        </label>
        <label>
          Праве око{" "}
          <input
            type="number"
            value={input.right}
            onInput={(e) => {
              setInput({ ...input, right: e.target.value });
            }}
          />
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
        <button>Додати</button>
      </form>
    </div>
  );
}

export default Modal;
