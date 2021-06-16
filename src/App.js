import "./App.css";

import Steps from "./components/Steps";
import stepsData from "./core/data/steps-data";

function App() {
  return (
    <div className="App">
      <Steps stepsData={stepsData.stepsData} allTaskLink={stepsData.allTaskLink}/>
    </div>
  );
}

export default App;
