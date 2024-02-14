import './App.css';

// when GET button clicked make fetch to http://localhost:8080/api


function App() {

  const fetchGet = () => {
    console.log("Fetching Get from backend...");
    fetch("http://localhost:8080/api", {
      method: "GET"
    }).then(res => res.text())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const fetchPost = () => {
    console.log("Fetching Post from backend");
    fetch("http://localhost:8080/api", {
      method: "POST"
    }).then(res => res.text())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  return (
    <div>
      <h1>Welcome to our online shop :)</h1>
      <button onClick={fetchGet}>Backend Test: GET</button>
      <button onClick={fetchPost}>Backend Test: POST</button>
    </div>
  );
}

export default App;
