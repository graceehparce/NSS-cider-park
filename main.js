import { guestHTML } from "./guestHTML.js";
import { locationHTML } from "./locationHTML.js";
import { serviceHTML } from "./serviceHTML.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Park Falls</h1>
<article class="theBody">
    <section class="theServices">
        <h2>Cider Park Services</h2>
        <div class="serveBox">${serviceHTML()}</div>
    </section>
    <section class="bigSection">
        <section class="theLocations">
            <h2>Cider Falls Park Areas</h2>
            <div class="locBox">${locationHTML()}</div>
        </section>
        <section class="theGuests">
            <h2>Cider Park Guests</h2>
            <div class="guestBox">${guestHTML()}</div>
        </section>
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML



// // What are the main resources (i.e. tables)? Design your ERD first.
// //     Done! Resources are guests, services, locations
// What are the properties of each resource?
// //      guests:id, name, services
//         location: Id, location, service
//         service: id, type
// What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
// //       guests.servies many-to-one services.type
//          services.id one-to-many location.service
// Which modules should you create?
// //       
// What is the responsibility of each module?
// //       -database.js 
//          -guestsInLocation.js
//          -guestHTML.js
//          -serviceLocations.js
//          -locationHTML.js
// What functions should be in which modules?
//          -main.js: funciton containing html string that is calling functions from other modules when needed.
// //       -database.js: getter function for each resource in the database
//          -guestsInLocation.js: function that tells how many guests are in each location, with another event listener 
//          -guestHTML.js: function that creates html for guest list
//          -serviceLocations.js: function that creates an array of locations for each service, event listener that says which services are offered
//          -locationHTML.js: function that creates html for locations w/ services
// What is the responsibility of each function?
// // 
// What should each function return?
// // 
// What is the spcific algorithm for each function? Does the function need parameters? Should it return something?