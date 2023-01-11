import { memo, useCallback, useState } from "react";

interface ButtonProps {
  onClick: () => void;
}

export const Button = memo(({ onClick }: ButtonProps) => (
  <button onClick={onClick}>Click</button>
));

Button.displayName = "Button";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </>
  );
};

export default UseCallback;
