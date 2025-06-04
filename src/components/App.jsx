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
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [desc, setDesc] = useState("");
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");

  const [cardInfo, setCardInfo] = useState("");

  const changeStates = (field, value) => {
    if (field === "name") {
      setName(value);
    } else if (field === "slogan") {
      setSlogan(value);
    } else if (field === "technologies") {
      setTechnologies(value);
    } else if (field === "repo") {
      setRepo(value);
    } else if (field === "demo") {
      setDemo(value);
    } else if (field === "desc") {
      setDesc(value);
    } else if (field === "autor") {
      setAutor(value);
    } else if (field === "job") {
      setJob(value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // const objToSend = {
    //   name: name,
    //   slogan: slogan,
    //   technologies: technologies,
    //   repo: repo,
    //   demo: demo,
    //   desc: desc,
    //   autor: autor,
    //   job: job,
    //  photo: "https://mi-sitio.com/foto.jpg",
    //  image: "https://mi-sitio.com/imagen-proyecto.jpg",
    // };

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        slogan: slogan,
        technologies: technologies,
        demo: demo,
        repo: repo,
        desc: desc,
        author: autor,
        job: job,
        photo:
          "https://media.istockphoto.com/id/513133900/es/foto/oro-retriever-sentado-en-frente-de-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=0lRWImB8Y4p6X6YGt06c6q8I3AqBgKD-OGQxjLCI5EY=",
        image:
          "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVycm98ZW58MHx8MHx8fDA%3D",
      }),
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
        <Preview
          job={job}
          autor={autor}
          name={name}
          slogan={slogan}
          desc={desc}
          technologies={technologies}
          demo={demo}
          repo={repo}
          cardInfo={cardInfo}
        />
        <Form changeStates={changeStates} handleSubmit={handleSubmit} />
      </main>
      <Footer adaLogo={adaLogo} />
    </div>
  );
}

export default App;
