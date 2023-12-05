import * as React from "react";
import { useDocumentTitle } from "@uidotdev/usehooks";

export const Exercise = () => {
  const [name, setName] = React.useState("PWL");

  useDocumentTitle(name);

  const handleInputChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title : </label>
        <input type="text" value={name} onChange={handleInputChange} />
        <input type="submit" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Exercise;
