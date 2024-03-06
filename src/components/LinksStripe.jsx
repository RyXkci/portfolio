
export default function LinksStripe({ content, style }) {
  console.log(content)
  return (
    <div className={`link-stripe link-stripe-${style}`}>
      <a target="blank" href={content.appLink} className="link-stripe__link link-light">
        Visualizza l'applicazione
      </a>
      <a target="blank" href={content.gitLink} className="link-stripe__link link-light">
        Visualizza la rep su GitHub
      </a>
    </div>
  );
}
