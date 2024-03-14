import '../stylesheets/linkstripe.css'
export default function LinksStripe({ content, style }) {
  return (
    <div className={`link-stripe link-stripe-${style}`}>
      <a target="blank" href={content.appLink} className="link-stripe__link link-light has-link-hover">
        Visualizza l'applicazione
      </a>
      <a target="blank" href={content.gitLink} className="link-stripe__link link-light has-link-hover">
        Visualizza la rep su GitHub
      </a>
    </div>
  );
}
