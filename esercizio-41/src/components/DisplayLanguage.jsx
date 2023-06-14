import { useContext } from "react";
import LanguageContext from "./LanguageContext";


function DisplayLanguage(){
    const language = useContext(LanguageContext)
    return(
        <div>
            <h1>Current Language : {language} </h1>
        </div>
    )
}

export default DisplayLanguage