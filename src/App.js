import Navbar from "/component/navbar.js";

function App() {
  return (
    <>
      <Navbar title="Saim Babar" about="About Us" />

      <div className="container" my-10>
        <Forms heading="My First Form" />
      </div>

      <div className="container my-3">
        <Counter />
      </div>
    </>
  );
}
export default App;
