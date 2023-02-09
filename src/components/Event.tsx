import React from "react";

const Event = () => {
  return (
    <div>
      <h2>Event playground</h2>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          console.log(e.target)
        }
      >
        Click
      </button>
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
};

export default Event;

type inputProps = {
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: inputProps) => {
  return <input type="text" value={value} onChange={handleChange} />;
};
