import Navbar from "/component/navbar.js";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload scha theek hai.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <>
      <Navbar title="Saim Babar" about="About Us" />

      <div className="container" my-10>
        <Forms heading="My First Form" />
      </div>

      <div className="container my-3">
        <Counter />
      </div>
    </>
>>>>>>> e726e27cb4f2ca00e6dd26994d191da3dbaa5d08
  );
}
export default App;
