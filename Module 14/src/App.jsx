import Content from "./pages/Content";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  const quote =
    "When you marooned me on that God forsaken spit of land, you forgot one very important thing, mate. I am Captain Jack Sparrow.";

  return (
    <>
      <Header title="React Application" />
      <Content />
      <Footer name="Rifat" age={26} quote={quote} />
    </>
  );
}

export default App;
