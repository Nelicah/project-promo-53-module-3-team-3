import "../styles/App.scss";
import iconLaptop from "../images/laptop-code-solid.svg";
import adaLogo from "../images/adalab.png";
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  /*
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [desc, setDesc] = useState("");
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");
  */

  const [objToSend, setObjToSend] = useState({
    name: "",
    slogan: "",
    technologies: "",
    demo: "",
    repo: "",
    desc: "",
    autor: "",
    job: "",
    photo:
      "https://media.istockphoto.com/id/513133900/es/foto/oro-retriever-sentado-en-frente-de-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=0lRWImB8Y4p6X6YGt06c6q8I3AqBgKD-OGQxjLCI5EY=",
    image:
      "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVycm98ZW58MHx8MHx8fDA%3D",
  });

  const [cardInfo, setCardInfo] = useState("");

  const changeStates = (field, value) => {
    setObjToSend({ ...objToSend, [field]: value });
  };

  localStorage.setItem("newProject", JSON.stringify(objToSend));

  const [newProject, setNewProject] = useState(
    JSON.parse(localStorage.getItem("newProject"))
  );

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("URL de la tarjeta del proyecto:", data.cardURL);
        setCardInfo(data.cardURL);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al generar la tarjeta del proyecto:", error);
      });

    return;
  };

  return (
    <div className="container">
      <Header iconLaptop={iconLaptop} adaLogo={adaLogo} />

      <main className="main">
        <Hero />
        <Preview objToSend={objToSend} cardInfo={cardInfo} />
        <Form changeStates={changeStates} handleSubmit={handleSubmit} />
      </main>
      <Footer adaLogo={adaLogo} />
    </div>
  );
}

export default App;
