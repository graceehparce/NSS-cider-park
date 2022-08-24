import { getServices } from "./database.js"

let services = getServices()

export const serviceHTML = () => {
    let serviceHTMLString = ""
    serviceHTMLString += "<h3>Services Provided: </h3>"
    for (let service of services) {
        serviceHTMLString += `<li id="services--${service.id}">${service.type}</li>`
    }
    return serviceHTMLString
}


//This function creates a string of HTML that lists the services provided at the park
//To be imported into the main.js module 