import CardPreview from "./CardPreview";

function Preview() {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <CardPreview />
      </article>
    </section>
  );
}

export default Preview;
