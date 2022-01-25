import React from "react";
import { Link } from "react-router-dom";
import AppLink from "../components/appLink";

const Development = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            
        </div>
        </div>
      </header>
    </div>
  );
};

export default Development;
