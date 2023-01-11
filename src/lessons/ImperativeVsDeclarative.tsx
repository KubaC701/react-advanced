import { useEffect } from "react";

const init = () => {
  const form = document.getElementById(
    "form"
  ) as HTMLFormElement;
  const input = document.getElementById(
    "input"
  ) as HTMLInputElement;
  const button = document.getElementById(
    "button"
  ) as HTMLButtonElement;
  const message = document.getElementById(
    "message"
  ) as HTMLParagraphElement;

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.style.display = "block";
    form.style.display = "none";
  });

  input?.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.value.length === 0) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  button?.addEventListener("click", () => {
    input.value = "";
  });
};

const Imperative = () => {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <form id="form">
        <input type="text" id="input" />
        <button type="submit" id="button" disabled>
          Submit
        </button>
      </form>
      <p id="message" style={{ display: "none" }}>
        Message sent
      </p>
    </>
  );
};

const Declarative = () => {
  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <p>Message sent</p>
    </>
  );
};

const ImperativeVsDeclarative = () => (
  <>
    <Imperative />
    <Declarative />
  </>
);

export default ImperativeVsDeclarative;
