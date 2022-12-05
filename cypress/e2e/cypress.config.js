import { defineConfig } from 'cypress'; 

export default defineConfig({
  "chromeWebSecurity": false,
  "modifyObstructiveCode": false,
  "includeShadowDom": true,
  "experimentalModifyObstructiveThirdPartyCode": false,
  "experimentalInteractiveRunEvents": false,
  "e2e.baseUrl": "https://qa-verify.breaktech.org/exam",
  //"reporter": 'cypress-mochawesome-reporter',
  //"reporter":  "mochawesome",
  e2e: {
    "experimentalSessionAndOrigin": false,
    "experimentalSourceRewriting": true,
    setupNodeEvents(on, config) {
      //require('cypress-failed-log/on')(on)        
      ///console.log(config)
        ///config.defaultCommandTimeout = 10000
        ///config.baseUrl = 'https://qa-verify.breaktech.org/exam'
       // require("cypress-mochawesome-reporter/plugin")(on);
        on('task', {
          log(message) {
            console.log(message)
            return null
          }
          })
    }
  }
})
              
    
   // "specPattern":"cypress/integration/*.js"


