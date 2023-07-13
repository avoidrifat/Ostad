/* eslint-disable react/prop-types */
const Footer = (props) => {
  const container = {
    margin: "10px",
    backgroundColor: "#444654",
    padding: "20px",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const quoteStyle = {
    fontSize: "18px",
    fontStyle: "italic",
  };

  return (
    <div style={container}>
      <p style={nameStyle}>Name: {props.name}</p>
      <p style={nameStyle}>Age: {props.age}</p>
      <p style={quoteStyle}>
        Favourite Quote: <q>{props.quote}</q> <br/>
      </p>
    </div>
  );
};

export default Footer;
