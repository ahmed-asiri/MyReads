import logo from '../image/logo.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt=""/>
        </div>
        <h1 className="header__title ui header">MyReads</h1>
      </div>
    </div>
  );
}

export default App;
