import { useState } from 'react';
import './App.css';
import DisplayMap from './DisplayMap';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showMap, setShowMap] = useState(false); // State to control map visibility

  const handleClickOpenMap = () => {
    setShowMap(true); // Show the map when the button is clicked
  };

  return (
    <>
      <h1>Welcome to MapQuest</h1>
      <button type="button" onClick={handleClickOpenMap}>
        Click Here
      </button>
      {showMap && <DisplayMap></DisplayMap>} {/* Conditionally render the DisplayMap component */}
    </>
  );
}
export default App;
