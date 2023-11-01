const Images = [
    {image: require("../assets/rue_des_aqueducs.png")},
    {image: require("../assets/la_favorite.jpg")},
    {image: require("../assets/planet_tacos.webp")}
]

export const pointsOfInterests = [
    {
        coordinate:{
            latitude: 45.7598982,
            longitude: 4.7885529,
        },
        title: "Maison",
        "description": "Chez maman restaurant",
        image: Images[0].image
    },
    {
        coordinate:{
            latitude: 45.75641,
            longitude: 4.80518,
        },
        title: "La Favorite",
        "description": "Collège lycée situé avenue du Point du jour",
        image: Images[1].image
    },
    {
        coordinate:{
            latitude: 45.74780,
            longitude: 4.79009,
        },
        title: "Planet tacos",
        "description": "Les meilleurs tacos de la région lyonnaise",
        image: Images[2].image
    },
]