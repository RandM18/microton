import { useState } from "react";

const Textbox = ({ defaultValue, max, id, name, disabled, after }) => {
  const [val, setVal] = useState(defaultValue, 0, max);
  return (
    <div className='textbox'>
      <input
        className='textbox__input'
        type='number'
        id={id}
        name={name}
        disabled={disabled}
        min={0}
        max={max}
        step={1}
        inputMode='numeric'
        value={val}
        onChange={(e) => {
          const raw = e.target.value;
          if (raw === "") return;
          setVal(Number(raw));
        }}
        onBlur={(e) => {
          const raw = e.target.value;
          if (raw === "") setVal(0);
          else setVal(Number(raw));
        }}
      />
      {after && <span className='textbox__after'>{after}</span>}
    </div>
  );
};
export default Textbox;
