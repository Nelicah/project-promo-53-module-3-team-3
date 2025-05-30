import CardPreview from "./CardPreview";

function Preview(props) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <CardPreview
          jobs={props.job}
          autor={props.autor}
          name={props.name}
          slogan={props.slogan}
          desc={props.desc}
          technologies={props.technologies}
          demo={props.demo}
          repo={props.repo}
        />
      </article>
    </section>
  );
}

export default Preview;
