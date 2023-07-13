import '../styles/App.css';
import '../styles/AppResponsive.css';

function WhoIAm(){
    return <div className="mon-parcours">
        <h1>Maxime Dhénin</h1>
        <div className="linkd-btn-div">
            <a href="https:\\www.linkedin.com/in/maxime-dhenin" target="__blank" className='linkd-btn'>Mon profil Linkedin</a>
            <a href="https://github.com/Maaax971" target="__blank" className='linkd-btn'>Mon GitHub</a>
        </div>
        <h2>Mon parcours</h2>
        <p>Diplômé d'un <strong>titre professionnel en développement web (niveau 5)</strong> ainsi que d'un <strong>master en écologie</strong>. Je souhaite approfondir mes connaissances en programmation et apporter mes qualités et ma motivation au sein d'une entreprise.</p>
        <h2>Compétences et Expériences</h2>
    </div>
}

export default WhoIAm