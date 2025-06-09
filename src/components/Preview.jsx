import CardPreview from "./CardPreview";

function Preview({ objToSend, cardInfo }) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        // style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <CardPreview objToSend={objToSend} cardInfo={cardInfo} />
        <a className="link" href={cardInfo} target="_blank">
          {cardInfo}
        </a>
      </article>
    </section>
  );
}

export default Preview;
