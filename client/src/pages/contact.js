import React from "react";


const Contact = () => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return(
    
    <div className="App">
        <header className="App-header">
          <p>
           {!data ? "If you can read this, start your server" : data }
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
    
  )


};



export default Contact