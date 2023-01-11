import { useRef, useState } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState<number | null>(
    null
  );
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number>();

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

const UseRef = () => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (value.length === 0) {
      setIsError(true);
      inputRef.current?.focus();
    }

    // Send data to server
  };
  return (
    <>
      <Stopwatch />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(event) =>
              setValue(event.target.value)
            }
          />
          {isError && (
            <p style={{ color: "red" }}>
              Value is required
            </p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRef;
