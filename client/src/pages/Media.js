import React from "react";
import Image from "../components/imgCard"


const Production = () => {
  const [data, setData] = React.useState(null);

  const images = '/images/TFLogo32.png'
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App-header">
      <header className="col">
      <h1>Photography</h1>
        <div className="row" style={{ margin: "0", padding:"0", width: "20vw"}}>
          <Image image={images} /> 
        </div>
      </header>
    </div>
  );
};

export default Production;
