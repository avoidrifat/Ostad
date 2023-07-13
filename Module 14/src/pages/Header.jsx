/* eslint-disable react/prop-types */

const Header = (props) => {
  const container = {
    margin: "10px",
    backgroundColor: "#444654",
    padding: "20px",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const title = {
    fontSize: "36px",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
  };

  return (
    <div style={container}>
      <h1 style={title}>{props.title}</h1>
    </div>
  );
};

export default Header;
