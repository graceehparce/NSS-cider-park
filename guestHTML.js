import { getGuests } from "./database.js";
import { getParkAreas } from "./database.js"

let guests = getGuests()
let locations = getParkAreas()

// Creates HTML for guest list
export const guestHTML = () => {
    let guestHTMLString = ""
    for (let each of guests) {
        guestHTMLString += `<div>${each.id}. ${each.name}`
    }
    guestHTMLString += '</div>'
    return guestHTMLString
}

//Event Listener for the number of guests at each location
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("locations")) {
            const [, locationId] = itemClicked.id.split("--")

            for (const location of locations) {
                if (location.id === parseInt(locationId)) {
                    let finalCount = findGuest(parseInt(locationId))
                    window.alert(`There are ${finalCount} guests in this area`)
                }
            }
        }
    }
)

//This function creates a guest count for each location 
//that can be used by the event listener. When clicked, 
//tells how many guests in each area


let findGuest = (locationId) => {
    let guestCount = 0
    for (let guest of guests) {
        if (guest.locationId === locationId) {
            guestCount++
        }
    }
    return guestCount
}






//This function returns a string of HTML that lists the guests at the park
//To be imported into the main.js to be added to the body