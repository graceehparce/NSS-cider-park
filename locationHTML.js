import { getParkAreas } from "./database.js";
import { getServices } from "./database.js";
import { getAreaServices } from "./database.js"

let locations = getParkAreas()
let services = getServices()
let areaServices = getAreaServices()


// Functions needed for event listener

const findServiceById = (serviceId) => {
    let foundService = {}
    for (let service of services) {
        if (service.id === serviceId) {
            foundService = service
        }
    }
    return foundService
}

const findServiceAreas = (serviceId) => {
    let foundAreaArray = []
    for (let areaService of areaServices) {
        if (serviceId === areaService.serviceId) {
            foundAreaArray.push(areaService)
        }
    }
    return foundAreaArray
}

let namedLocations = (array) => {
    let foundLocationNames = ""
    for (let each of array) {
        for (let locationObject of locations) {
            if (each.locationId === locationObject.id) {
                foundLocationNames += `${locationObject.name} and `
            }
        }
    } return foundLocationNames.slice(0, -5)
}

// End of Functions for event listener

// Functions for building string of services under each location

const servicesForLocation = (location) => {
    let serviceIdArray = []
    for (let area of areaServices) {
        if (location.id === area.locationId) {
            serviceIdArray.push(area)
        }
    } return serviceIdArray
}

const servicesWritten = (array) => {
    let writtenArray = []
    for (let item of array) {
        for (let service of services) {
            if (item.serviceId === service.id) {
                writtenArray.push(service.type)
            }
        }
    } return writtenArray
}

const htmlForWrittenArray = (array) => {
    let html = ""
    for (let item of array) {
        html += `${item}, `
    }
    return html.slice(0, -2)
}

export const locationHTML = () => {
    let locationHTMLString = ""
    for (let location of locations) {
        locationHTMLString += `<h3 id="locations--${location.id}">${location.name}</h3>`
        let servicesFL = servicesForLocation(location)
        let servicesW = servicesWritten(servicesFL)
        let HTMLFWA = htmlForWrittenArray(servicesW)
        locationHTMLString += `<div>Services Provided: ${HTMLFWA}`
        locationHTMLString += "</div>"
    }
    return locationHTMLString
}

// End of functions needed to build HTML string











document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("services")) {
            const [, serviceId] = itemClicked.id.split("--")
            let foundServiceObject = findServiceById(parseInt(serviceId))
            let foundAreaServices = findServiceAreas(parseInt(serviceId))
            let click = namedLocations(foundAreaServices)
            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    window.alert(`${service.type} is availble at ${click}`)
                }
            }
        }
    }
)

// step 1-find service object for serviceId
// step 2-iterate services array to find all matching relationships for chosen service
// step 3-nested loop, when a match is found, iterate park areas to find the matching area and grab name property

// Array Destructuring
// (itemClicked.id === "services--1")
// const idArray = itemClicked.id.split('--')
// (idArray === ['services', '1'])
// const serviceId = idArray[1]
// what were doing on line 51 is a shortcut
// const [title, serviceId] = itemClicked.id.split('--')
// However, I don't care about the title. So I have no reason to store it in a variable. 
// So I do this instead:
// const [, serviceId] = itemClicked.id.split("--") I'm skippinf the first item in the array that split gave us


//

//Write funtion that creates HTML string for locations and their services
//First loop through the locations, get, then loop through services, 
//the loop through the array of services. 
//If the serviceId matches the Id in the location's services array, 
//add to the HTML string