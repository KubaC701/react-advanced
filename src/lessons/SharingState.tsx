import { ChangeEvent, useState } from "react";

const RangeInput = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(Number(e.target.value));
  };

  return (
    <input
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
};

const NumberInput = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(Number(e.target.value));
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
};

const NumberPicker = () => {
  return (
    <div>
      <RangeInput />
      <NumberInput />
    </div>
  );
};

const SharingState = () => {
  return <NumberPicker />;
};

export default SharingState;
