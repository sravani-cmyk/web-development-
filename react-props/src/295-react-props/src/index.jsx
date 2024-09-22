import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return;
  <div className="my-style">
    <h2>{props.name}</h2>
    <img src={props.img} alt="avatar_img" />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>;
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauez"
      img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.duvalpride.com%2Farchive%2Findex.php%2Fthread-8708.html&psig=AOvVaw2yRhelI18xAQLGfMGSxln9&ust=1727062039137000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLi7iNDN1YgDFQAAAAAdAAAAABAE"
      tel="778307800"
      email="jack_Bauez@.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
