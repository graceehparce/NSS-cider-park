const database = {
    guests: [{
        id: 1,
        name: "Cindy",
        locationId: 2,
    }, {
        id: 2,
        name: "Erich",
        locationId: 5,
    }, {
        id: 3,
        name: "Joe",
        locationId: 4,
    },
    {
        id: 4,
        name: "Wren",
        locationId: 2,
    },
    {
        id: 5,
        name: "Louise",
        locationId: 1,
    },
    {
        id: 6,
        name: "Terry",
        locationId: 6,
    },
    {
        id: 7,
        name: "Stetson",
        locationId: 3,
    },
    {
        id: 8,
        name: "Richard",
        locationId: 5,
    },
    {
        id: 9,
        name: "Mina",
        locationId: 6,
    },
    {
        id: 10,
        name: "Tim",
        locationId: 1,
    }
    ],

    areaServices: [{
        id: 1,
        locationId: 1,
        serviceId: 7
    },
    {
        id: 2,
        locationId: 1,
        serviceId: 8
    },
    {
        id: 3,
        locationId: 1,
        serviceId: 9
    },
    {
        id: 4,
        locationId: 2,
        serviceId: 6
    },
    {
        id: 5,
        locationId: 2,
        serviceId: 4
    },
    {
        id: 6,
        locationId: 2,
        serviceId: 5
    },
    {
        id: 7,
        locationId: 3,
        serviceId: 1
    },
    {
        id: 8,
        locationId: 3,
        serviceId: 2
    },
    {
        id: 9,
        locationId: 3,
        serviceId: 3
    },
    {
        id: 10,
        locationId: 3,
        serviceId: 4
    },
    {
        id: 11,
        locationId: 3,
        serviceId: 11
    },
    {
        id: 12,
        locationId: 4,
        serviceId: 5
    },
    {
        id: 13,
        locationId: 4,
        serviceId: 8
    },
    {
        id: 14,
        locationId: 5,
        serviceId: 10
    },
    {
        id: 15,
        locationId: 5,
        serviceId: 12
    },
    {
        id: 16,
        locationId: 5,
        serviceId: 3
    },
    {
        id: 17,
        locationId: 5,
        serviceId: 2
    },
    {
        id: 18,
        locationId: 6,
        serviceId: 1,
    },
    {
        id: 19,
        locationId: 6,
        serviceId: 4,
    },
    {
        id: 20,
        locationId: 6,
        serviceId: 5,
    },
    {
        id: 21,
        locationId: 6,
        serviceId: 11
    }],

    parkAreas: [{
        name: "Chamfort River",
        id: 1,
    },
    {
        name: "Lost Wolf Hiking Trail",
        id: 2,
    },
    {
        name: "The Lodge",
        id: 3,
    },
    {
        name: "Gander River",
        id: 4,
    },
    {
        name: "Campgrounds",
        id: 5,
    },
    {
        name: "Pine Bluff Trails",
        id: 6,
    }],

    services: [{
        id: 1,
        type: "Food vending",
    },
    {
        id: 2,
        type: "Lodging",
    },

    {
        id: 3,
        type: "Parking",
    },
    {
        id: 4,
        type: "Picknicking",
    },
    {
        id: 5,
        type: "Hiking",
    },
    {
        id: 6,
        type: "Rock-climbing",
    },
    {
        id: 7,
        type: "Canoeing",
    },
    {
        id: 8,
        type: "Fishing",
    },
    {
        id: 9,
        type: "Rafting",
    },
    {
        id: 10,
        type: "Playground",
    },
    {
        id: 11,
        type: "Zip-lining",
    },
    {
        id: 12,
        type: "Information",
    }]
}

// These are my getter functions....

export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({ ...parkArea }))
}

export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({ ...areaService }))
}