import "../styles/App.scss";
import iconLaptop from "../images/laptop-code-solid.svg";
import adaLogo from "../images/adalab.png";
import { useState } from "react";

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
  const handleInputImage = (ev) => {
    setImage(ev.target.value);
  };
  const handleInputPhoto = (ev) => {
    setPhoto(ev.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <a
          className="header__brand"
          href="./"
          title="Haz click para volver a la página inicial"
        >
          <img
            className="header__companyLogo"
            src={iconLaptop}
            alt="Logo proyectos molones"
          />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img className="logoSponsor" src={adaLogo} alt="Logo Adalab" />
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button--link" href="./">
            Ver proyectos
          </a>
        </section>

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{job || "Full stack Developer"} </p>
              <h3 className="card__name"> {autor || "Emmelie Bjôrklund"} </h3>
            </div>

            <div className="card__project">
              <h3 className="card__name"> {name || "Elegant Workspace"}</h3>
              <p className="card__slogan">{slogan || "Diseños Exclusivos"}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">
                {desc ||
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}
              </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">
                  {technologies || "React JS - HTML - CSS"}
                </p>

                <a
                  className="icon icon__www"
                  href={demo}
                  target="_blank"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={repo}
                  target="_blank"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
              onChange={handleInputName}
            />
            <input
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleInputSlogan}
            />
            <div className="addForm__2col">
              <input
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
                onChange={handleInputRepo}
              />
              <input
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
                onChange={handleInputDemo}
              />
            </div>
            <input
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
              onChange={handleInputTechnologies}
            />
            <textarea
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              rows="5"
              onChange={handleInputDesc}
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
              onChange={handleInputAutor}
            />
            <input
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
              onChange={handleInputJob}
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label className="button">
              Subir foto del proyecto
              <input className="addForm__hidden" type="file" />
            </label>
            <label className="button">
              Subir foto de la autora
              <input className="addForm__hidden" type="file" />
            </label>
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>

      <footer className="footer">
        <img className="logoSponsor" src={adaLogo} alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
