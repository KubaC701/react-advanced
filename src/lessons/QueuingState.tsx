import { useState } from "react";

// setState with a callback function
export const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <button onClick={handleClick}>Clicked {count}</button>
  );
};

const QueuingState = () => {
  return <Button />;
};

export default QueuingState;
