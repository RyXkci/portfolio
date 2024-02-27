import "../stylesheets/about.css";

export default function About() {
  return (
    <section className="section about-section">
      <div className="about__inner contained">
        <div className="about about-left">
          <article className="about__content about-left-content">
            <h1 className="about__title title-dark">{`{hello world}`}</h1>
            <p className="about__text text-dark">
              Salve a tutti! Sono un appassionato sviluppatore frontend, nato in
              Inghilterra ma basato in Italia, con una predilezione per
              JavaScript e React. La mia passione per la programmazione ha preso
              vita in maniera autodidatta, spingendomi a intraprendere un
              percorso che mi ha portato a ottenere numerosi certificati in
              sviluppo frontend e ad acquisire una solida esperienza di tre anni
              nello sviluppo di siti web e applicazioni web.
            </p>
          </article>
          <div className="about__cta about-left__cta has-box-shadow">
            <a href="#" className="about__cta-btn cta-btn btn-ghost-dark">
              Vedi i miei lavori
            </a>
          </div>
        </div>
        <div className="about about-right">
          <article className="about__content about-right-content">
            <h1 className="about__title title-dark">meetMe()</h1>
            <p className="about__text text-dark">
              Un occhio attento per i dettagli e un amore per il codice pulito
              ed efficiente, conoscenza delle migliori pratiche ed una passione
              che mi spinge sempre ad imparare. Mi trovo bene in ambienti
              collaborativi e mi piace trasformare problemi complessi in
              soluzioni eleganti.
            </p>
          </article>
          <div className="about__cta about-right__cta">
            <a href="#" className="about__cta-btn cta-btn btn-ghost-dark">Contattami subito</a>
          </div>
        </div>
      </div>
    </section>
  );
}
