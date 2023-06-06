import React from "react"
import { LanguageContext } from "./Languageselect"

export class DisplayLanguage extends React.Component {
    render(){
        return (
            <div>
               <LanguageContext.Consumer>
                 {value  =>{
                    return  <h1>{value}</h1>
                 }}
               </LanguageContext.Consumer>
            </div>
        )
    }
}