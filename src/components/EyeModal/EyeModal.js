import React, { useState } from "react";
import "./style.css";
import { Notify } from "notiflix";
import { nanoid } from "nanoid";

function EyeModal({ open, setOpen, onAdd, def }) {
  const [input, setInput] = useState({
    ball:0,
    cylinder:0,
    axis:0,
    ...def
  });
  if (!open) {
    return null;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.ball && input.cylinder && input.axis) {
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
        <h1>Око</h1>
        <label>
          Сфера{" "}
          <input
            value={input.ball}
            onInput={(e) => {
              setInput({ ...input, ball: e.target.value.toLowerCase() });
            }}
          />
        </label>
        <label>
          Цилінд{" "}
          <input
            value={input.cylinder}
            onInput={(e) => {
              setInput({ ...input, cylinder: e.target.value.toLowerCase() });
            }}
          />
        </label>
        <label>
          Вісь{" "}
          <input
            type="date"
            value={input.axis}
            onInput={(e) => {
              setInput({ ...input, axis: e.target.value });
            }}
          />
        </label>
        <button>Зберегти</button>
      </form>
    </div>
  );
}

export default EyeModal;
