import "../styles/Sidebar.css"
import { competences } from "../datas/Competences"

function Sidebar(){
    return <div className="sidebar-div">
        <ul>
            {competences.map(({name,urlImg}) =>
                <li>
                    <img src={urlImg} alt='{name} icone'></img><span>{name}</span>
                </li>
            )}
        </ul>
    </div>
}

export default Sidebar