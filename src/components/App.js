import "../styles/App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <img
        className="logo-main"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa-logo"
      />
      <Search />
    </div>
  );
}

export default App;
