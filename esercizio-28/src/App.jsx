import { LanguageContext } from "./Components/Languageselect"
import { DisplayLanguage } from "./Components/DisplayLanguage"
import React from "react"

export class App extends React.Component {
  state = {
    language: 'en'
  }

  handleLanguageChange = (event) => {
    this.setState({language: event.target.value})
  }
  render() {


    return (
      <>
        <select onChange={this.handleLanguageChange} value={this.state.language}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>

      </>
    )
  }
}

export default App
