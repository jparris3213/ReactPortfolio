import React from "react";
//import image from '../images/TFLogo32.png'


const Image = (props) => {
  const [data, setData] = React.useState(null);

  const { image } = props;
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
        <div>
          <div className="card" ><img src={image} alt="..." style={{ backgroundcolor: "transparent"}}  /></div>
        </div>
  );
};

export default Image;
