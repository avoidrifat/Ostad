import { useState } from "react";
const Content = () => {
  const [displayText, setDisplayText] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleClick = () => {
    setDisplayText(textValue);
  };

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    backgroundColor: "#5C82FF",
    color: "#fff",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  };

  const container = {
    margin: "10px",
    backgroundColor: "#F0F0F0",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const displayTextStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  const textareaStyle = {
    width: "98%",
    height: "90px",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={container}>
      <button style={buttonStyle} onClick={handleClick}>
        Click to display the text from Textarea
      </button>
      <p style={displayTextStyle}>{displayText}</p>
      <textarea
        value={textValue}
        onChange={handleChange}
        style={textareaStyle}
      ></textarea>
    </div>
  );
};
export default Content;
