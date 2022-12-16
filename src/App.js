import React , {useState} from "react";
import "./app.css"



function App() {

  const [state,setState] = useState(0)
  const [status, setStatus] = useState(0);

  const handleOneChange = (e) =>{
    setStatus(e.target.value)
  }

  const handleSet= () => {
    if (status) setState(state - parseInt(status, 10));
  };

  const handleAdd = () => {
    if (status) setState(state + parseInt(status, 10));
  };

  const handleReset = () => {
    setState(0);
    setStatus(0);
  };

  return (
    <div className="header">
      <div className="content">
        <div >
          <p>{state}</p>
        </div>
        <div>
          <div className="text">
            <input
              type="text"
              value={status}
              onChange={handleOneChange}  
            />
            <button className="btn"
              onClick={handleSet}
            >
              -
            </button>
            <button className="btn2" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
        <button className="btn reset" onClick={handleReset}>
          Reset click
        </button>
      </div>
    </div>
  );
  
}

export default App;
