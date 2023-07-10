import Sidebar from "./Sidebar"
import WhoIAm from "./WhoIAm"
import Xperiences from "./Xperiences"

import "../styles/Content.css"

function Content(){
    return <div className="content-div">
        <Sidebar />
        <div className="resume-div">
            <WhoIAm />
            <Xperiences />
        </div>
    </div>
}

export default Content