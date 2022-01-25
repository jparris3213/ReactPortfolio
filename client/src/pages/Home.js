import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div class="bs-example" data-example-id="simple-jumbotron">
          <div class="jumbotron">
            <h1>Hello Dev World</h1>
            <h2>I am Jacob Parris</h2>
            <p2>
              Having spent the last 6 months working my way through an intensive
              MERN Bootcamp,
            </p2>
            <p>
              I have built this initial MERN-stack Profile as a centralized place to
              exhibit my work.
            </p>
            <p2>
              In fact, while it doesn't currently DO anything, if the light in
              the corner is green{" "}
            </p2>
            <p>
              the back end server is connected to the front-end successfully
            </p>

            <p>
              <Link
                className="btn btn-primary btn-lg"
                activeclassname="is-active"
                role="button"
                to="/development"
              >
                Take a Look!
              </Link>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
