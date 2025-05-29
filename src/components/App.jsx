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
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");

  const handleInputName = (ev) => {
    setName(ev.target.value);
  };
  const handleInputSlogan = (ev) => {
    setSlogan(ev.target.value);
  };
  const handleInputTechnologies = (ev) => {
    setTechnologies(ev.target.value);
  };
  const handleInputRepo = (ev) => {
    setRepo(ev.target.value);
  };
  const handleInputDemo = (ev) => {
    setDemo(ev.target.value);
  };
  const handleInputDesc = (ev) => {
    setDesc(ev.target.value);
  };
  const handleInputAutor = (ev) => {
    setAutor(ev.target.value);
  };
  const handleInputJob = (ev) => {
    setJob(ev.target.value);
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
        />
        <Form />

        {/* PENDIENTE LAS FUNCIONES */}
      </main>
      <Footer adaLogo={adaLogo} />
    </div>
  );
}

export default App;
