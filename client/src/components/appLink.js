import React from "react";
import image from '../images/TFLogo32.png'

import { Link } from "react-router-dom";


const AppLink = (props) => {
  const [data, setData] = React.useState(null);

  const { image } = props;
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
          <div className="thumbnail">
          <img src={image} alt="..." />
          <div className="caption">
            <h3>{props.appName}</h3>
            <button>
              <Link
                className="nav-link text-grey"
                activeclassname="is-active"
                to={props.url}
              ></Link>
              Github
            </button>
          </div>
        </div>
  );
};

export default AppLink;
