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
          job={props.job}
          autor={props.autor}
          name={props.name}
          slogan={props.slogan}
          desc={props.desc}
          technologies={props.technologies}
          demo={props.demo}
          repo={props.repo}
          cardInfo={props.cardInfo}
        />
        <a className="link" href={props.cardInfo} target="_blank">
          {props.cardInfo}
        </a>
      </article>
    </section>
  );
}

export default Preview;
