import mongoClient from "./db.js";
import {escapeRegExp} from "./utils/utils.js";

const db = await mongoClient.db('StarWarsDatabase');
const starshipsData = [
    {
        "fields": {
            "pilots": [],
            "MGLT": "60",
            "starship_class": "corvette",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 2
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "60",
            "starship_class": "Star Destroyer",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 3
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "70",
            "starship_class": "landing craft",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 5
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "10",
            "starship_class": "Deep Space Mobile Battlestation",
            "hyperdrive_rating": "4.0"
        },
        "model": "resources.starship",
        "pk": 9
    },
    {
        "fields": {
            "pilots": [
                13,
                14,
                25,
                31
            ],
            "MGLT": "75",
            "starship_class": "Light freighter",
            "hyperdrive_rating": "0.5"
        },
        "model": "resources.starship",
        "pk": 10
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "80",
            "starship_class": "assault starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 11
    },
    {
        "fields": {
            "pilots": [
                1,
                9,
                18,
                19
            ],
            "MGLT": "100",
            "starship_class": "Starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 12
    },
    {
        "fields": {
            "pilots": [
                4
            ],
            "MGLT": "105",
            "starship_class": "Starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 13
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "40",
            "starship_class": "Star dreadnought",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 15
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "20",
            "starship_class": "Medium transport",
            "hyperdrive_rating": "4.0"
        },
        "model": "resources.starship",
        "pk": 17
    },
    {
        "fields": {
            "pilots": [
                22
            ],
            "MGLT": "70",
            "starship_class": "Patrol craft",
            "hyperdrive_rating": "3.0"
        },
        "model": "resources.starship",
        "pk": 21
    },
    {
        "fields": {
            "pilots": [
                1,
                13,
                14
            ],
            "MGLT": "50",
            "starship_class": "Armed government transport",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 22
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "40",
            "starship_class": "Escort ship",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 23
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "60",
            "starship_class": "Star Cruiser",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 27
    },
    {
        "fields": {
            "pilots": [
                29
            ],
            "MGLT": "120",
            "starship_class": "Starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 28
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "91",
            "starship_class": "Assault Starfighter",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 29
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "Space cruiser",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 31
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "Droid control ship",
            "hyperdrive_rating": "2.0"
        },
        "model": "resources.starship",
        "pk": 32
    },
    {
        "fields": {
            "pilots": [
                11,
                35,
                60
            ],
            "MGLT": "unknown",
            "starship_class": "Starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 39
    },
    {
        "fields": {
            "pilots": [
                39
            ],
            "MGLT": "unknown",
            "starship_class": "yacht",
            "hyperdrive_rating": "1.8"
        },
        "model": "resources.starship",
        "pk": 40
    },
    {
        "fields": {
            "pilots": [
                44
            ],
            "MGLT": "unknown",
            "starship_class": "Space Transport",
            "hyperdrive_rating": "1.5"
        },
        "model": "resources.starship",
        "pk": 41
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "Diplomatic barge",
            "hyperdrive_rating": "0.7"
        },
        "model": "resources.starship",
        "pk": 43
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "freighter",
            "hyperdrive_rating": "unknown"
        },
        "model": "resources.starship",
        "pk": 47
    },
    {
        "fields": {
            "pilots": [
                10,
                58
            ],
            "MGLT": "unknown",
            "starship_class": "Starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 48
    },
    {
        "fields": {
            "pilots": [
                35
            ],
            "MGLT": "unknown",
            "starship_class": "yacht",
            "hyperdrive_rating": "0.9"
        },
        "model": "resources.starship",
        "pk": 49
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "assault ship",
            "hyperdrive_rating": "0.6"
        },
        "model": "resources.starship",
        "pk": 52
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "yacht",
            "hyperdrive_rating": "1.5"
        },
        "model": "resources.starship",
        "pk": 58
    },
    {
        "fields": {
            "pilots": [
                10,
                11
            ],
            "MGLT": "unknown",
            "starship_class": "capital ship",
            "hyperdrive_rating": "1.5"
        },
        "model": "resources.starship",
        "pk": 59
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "transport",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 61
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "star destroyer",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 63
    },
    {
        "fields": {
            "pilots": [
                10,
                35
            ],
            "MGLT": "unknown",
            "starship_class": "yacht",
            "hyperdrive_rating": "0.5"
        },
        "model": "resources.starship",
        "pk": 64
    },
    {
        "fields": {
            "pilots": [
                10,
                11
            ],
            "MGLT": "unknown",
            "starship_class": "starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 65
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "100",
            "starship_class": "starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 66
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "cruiser",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 68
    },
    {
        "fields": {
            "pilots": [
                10,
                79
            ],
            "MGLT": "unknown",
            "starship_class": "starfighter",
            "hyperdrive_rating": "6"
        },
        "model": "resources.starship",
        "pk": 74
    },
    {
        "fields": {
            "pilots": [],
            "MGLT": "unknown",
            "starship_class": "starfighter",
            "hyperdrive_rating": "1.0"
        },
        "model": "resources.starship",
        "pk": 75
    }
]
const peopleData = [
    {
        "fields": {
            "name": "Luke Skywalker",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "172",
            "eye_color": "blue",
            "mass": "77",
            "homeworld": 1,
            "birth_year": "19BBY"
        },
        "model": "resources.people",
        "pk": 1
    },
    {
        "fields": {
            "name": "C-3PO",
            "gender": "n/a",
            "skin_color": "gold",
            "hair_color": "n/a",
            "height": "167",
            "eye_color": "yellow",
            "mass": "75",
            "homeworld": 1,
            "birth_year": "112BBY"
        },
        "model": "resources.people",
        "pk": 2
    },
    {
        "fields": {
            "name": "R2-D2",
            "gender": "n/a",
            "skin_color": "white, blue",
            "hair_color": "n/a",
            "height": "96",
            "eye_color": "red",
            "mass": "32",
            "homeworld": 8,
            "birth_year": "33BBY"
        },
        "model": "resources.people",
        "pk": 3
    },
    {
        "fields": {
            "name": "Darth Vader",
            "gender": "male",
            "skin_color": "white",
            "hair_color": "none",
            "height": "202",
            "eye_color": "yellow",
            "mass": "136",
            "homeworld": 1,
            "birth_year": "41.9BBY"
        },
        "model": "resources.people",
        "pk": 4
    },
    {
        "fields": {
            "name": "Leia Organa",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "150",
            "eye_color": "brown",
            "mass": "49",
            "homeworld": 2,
            "birth_year": "19BBY"
        },
        "model": "resources.people",
        "pk": 5
    },
    {
        "fields": {
            "name": "Owen Lars",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "brown, grey",
            "height": "178",
            "eye_color": "blue",
            "mass": "120",
            "homeworld": 1,
            "birth_year": "52BBY"
        },
        "model": "resources.people",
        "pk": 6
    },
    {
        "fields": {
            "name": "Beru Whitesun Lars",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "165",
            "eye_color": "blue",
            "mass": "75",
            "homeworld": 1,
            "birth_year": "47BBY"
        },
        "model": "resources.people",
        "pk": 7
    },
    {
        "fields": {
            "name": "R5-D4",
            "gender": "n/a",
            "skin_color": "white, red",
            "hair_color": "n/a",
            "height": "97",
            "eye_color": "red",
            "mass": "32",
            "homeworld": 1,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 8
    },
    {
        "fields": {
            "name": "Biggs Darklighter",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "84",
            "homeworld": 1,
            "birth_year": "24BBY"
        },
        "model": "resources.people",
        "pk": 9
    },
    {
        "fields": {
            "name": "Obi-Wan Kenobi",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "auburn, white",
            "height": "182",
            "eye_color": "blue-gray",
            "mass": "77",
            "homeworld": 20,
            "birth_year": "57BBY"
        },
        "model": "resources.people",
        "pk": 10
    },
    {
        "fields": {
            "name": "Anakin Skywalker",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "188",
            "eye_color": "blue",
            "mass": "84",
            "homeworld": 1,
            "birth_year": "41.9BBY"
        },
        "model": "resources.people",
        "pk": 11
    },
    {
        "fields": {
            "name": "Wilhuff Tarkin",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "auburn, grey",
            "height": "180",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 21,
            "birth_year": "64BBY"
        },
        "model": "resources.people",
        "pk": 12
    },
    {
        "fields": {
            "name": "Chewbacca",
            "gender": "male",
            "skin_color": "unknown",
            "hair_color": "brown",
            "height": "228",
            "eye_color": "blue",
            "mass": "112",
            "homeworld": 14,
            "birth_year": "200BBY"
        },
        "model": "resources.people",
        "pk": 13
    },
    {
        "fields": {
            "name": "Han Solo",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "180",
            "eye_color": "brown",
            "mass": "80",
            "homeworld": 22,
            "birth_year": "29BBY"
        },
        "model": "resources.people",
        "pk": 14
    },
    {
        "fields": {
            "name": "Greedo",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "n/a",
            "height": "173",
            "eye_color": "black",
            "mass": "74",
            "homeworld": 23,
            "birth_year": "44BBY"
        },
        "model": "resources.people",
        "pk": 15
    },
    {
        "fields": {
            "name": "Jabba Desilijic Tiure",
            "gender": "hermaphrodite",
            "skin_color": "green-tan, brown",
            "hair_color": "n/a",
            "height": "175",
            "eye_color": "orange",
            "mass": "1,358",
            "homeworld": 24,
            "birth_year": "600BBY"
        },
        "model": "resources.people",
        "pk": 16
    },
    {
        "fields": {
            "name": "Wedge Antilles",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "170",
            "eye_color": "hazel",
            "mass": "77",
            "homeworld": 22,
            "birth_year": "21BBY"
        },
        "model": "resources.people",
        "pk": 18
    },
    {
        "fields": {
            "name": "Jek Tono Porkins",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "180",
            "eye_color": "blue",
            "mass": "110",
            "homeworld": 26,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 19
    },
    {
        "fields": {
            "name": "Yoda",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "white",
            "height": "66",
            "eye_color": "brown",
            "mass": "17",
            "homeworld": 28,
            "birth_year": "896BBY"
        },
        "model": "resources.people",
        "pk": 20
    },
    {
        "fields": {
            "name": "Palpatine",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "grey",
            "height": "170",
            "eye_color": "yellow",
            "mass": "75",
            "homeworld": 8,
            "birth_year": "82BBY"
        },
        "model": "resources.people",
        "pk": 21
    },
    {
        "fields": {
            "name": "Boba Fett",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "78.2",
            "homeworld": 10,
            "birth_year": "31.5BBY"
        },
        "model": "resources.people",
        "pk": 22
    },
    {
        "fields": {
            "name": "IG-88",
            "gender": "none",
            "skin_color": "metal",
            "hair_color": "none",
            "height": "200",
            "eye_color": "red",
            "mass": "140",
            "homeworld": 28,
            "birth_year": "15BBY"
        },
        "model": "resources.people",
        "pk": 23
    },
    {
        "fields": {
            "name": "Bossk",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "190",
            "eye_color": "red",
            "mass": "113",
            "homeworld": 29,
            "birth_year": "53BBY"
        },
        "model": "resources.people",
        "pk": 24
    },
    {
        "fields": {
            "name": "Lando Calrissian",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "black",
            "height": "177",
            "eye_color": "brown",
            "mass": "79",
            "homeworld": 30,
            "birth_year": "31BBY"
        },
        "model": "resources.people",
        "pk": 25
    },
    {
        "fields": {
            "name": "Lobot",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "none",
            "height": "175",
            "eye_color": "blue",
            "mass": "79",
            "homeworld": 6,
            "birth_year": "37BBY"
        },
        "model": "resources.people",
        "pk": 26
    },
    {
        "fields": {
            "name": "Ackbar",
            "gender": "male",
            "skin_color": "brown mottle",
            "hair_color": "none",
            "height": "180",
            "eye_color": "orange",
            "mass": "83",
            "homeworld": 31,
            "birth_year": "41BBY"
        },
        "model": "resources.people",
        "pk": 27
    },
    {
        "fields": {
            "name": "Mon Mothma",
            "gender": "female",
            "skin_color": "fair",
            "hair_color": "auburn",
            "height": "150",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 32,
            "birth_year": "48BBY"
        },
        "model": "resources.people",
        "pk": 28
    },
    {
        "fields": {
            "name": "Arvel Crynyd",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "unknown",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 28,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 29
    },
    {
        "fields": {
            "name": "Wicket Systri Warrick",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "brown",
            "height": "88",
            "eye_color": "brown",
            "mass": "20",
            "homeworld": 7,
            "birth_year": "8BBY"
        },
        "model": "resources.people",
        "pk": 30
    },
    {
        "fields": {
            "name": "Nien Nunb",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "160",
            "eye_color": "black",
            "mass": "68",
            "homeworld": 33,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 31
    },
    {
        "fields": {
            "name": "Qui-Gon Jinn",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "193",
            "eye_color": "blue",
            "mass": "89",
            "homeworld": 28,
            "birth_year": "92BBY"
        },
        "model": "resources.people",
        "pk": 32
    },
    {
        "fields": {
            "name": "Nute Gunray",
            "gender": "male",
            "skin_color": "mottled green",
            "hair_color": "none",
            "height": "191",
            "eye_color": "red",
            "mass": "90",
            "homeworld": 18,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 33
    },
    {
        "fields": {
            "name": "Finis Valorum",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "blond",
            "height": "170",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 9,
            "birth_year": "91BBY"
        },
        "model": "resources.people",
        "pk": 34
    },
    {
        "fields": {
            "name": "Padm\u00e9 Amidala",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "185",
            "eye_color": "brown",
            "mass": "45",
            "homeworld": 8,
            "birth_year": "46BBY"
        },
        "model": "resources.people",
        "pk": 35
    },
    {
        "fields": {
            "name": "Jar Jar Binks",
            "gender": "male",
            "skin_color": "orange",
            "hair_color": "none",
            "height": "196",
            "eye_color": "orange",
            "mass": "66",
            "homeworld": 8,
            "birth_year": "52BBY"
        },
        "model": "resources.people",
        "pk": 36
    },
    {
        "fields": {
            "name": "Roos Tarpals",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "224",
            "eye_color": "orange",
            "mass": "82",
            "homeworld": 8,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 37
    },
    {
        "fields": {
            "name": "Rugor Nass",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "206",
            "eye_color": "orange",
            "mass": "unknown",
            "homeworld": 8,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 38
    },
    {
        "fields": {
            "name": "Ric Oli\u00e9",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "183",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 8,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 39
    },
    {
        "fields": {
            "name": "Watto",
            "gender": "male",
            "skin_color": "blue, grey",
            "hair_color": "black",
            "height": "137",
            "eye_color": "yellow",
            "mass": "unknown",
            "homeworld": 34,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 40
    },
    {
        "fields": {
            "name": "Sebulba",
            "gender": "male",
            "skin_color": "grey, red",
            "hair_color": "none",
            "height": "112",
            "eye_color": "orange",
            "mass": "40",
            "homeworld": 35,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 41
    },
    {
        "fields": {
            "name": "Quarsh Panaka",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 8,
            "birth_year": "62BBY"
        },
        "model": "resources.people",
        "pk": 42
    },
    {
        "fields": {
            "name": "Shmi Skywalker",
            "gender": "female",
            "skin_color": "fair",
            "hair_color": "black",
            "height": "163",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 1,
            "birth_year": "72BBY"
        },
        "model": "resources.people",
        "pk": 43
    },
    {
        "fields": {
            "name": "Darth Maul",
            "gender": "male",
            "skin_color": "red",
            "hair_color": "none",
            "height": "175",
            "eye_color": "yellow",
            "mass": "80",
            "homeworld": 36,
            "birth_year": "54BBY"
        },
        "model": "resources.people",
        "pk": 44
    },
    {
        "fields": {
            "name": "Bib Fortuna",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "none",
            "height": "180",
            "eye_color": "pink",
            "mass": "unknown",
            "homeworld": 37,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 45
    },
    {
        "fields": {
            "name": "Ayla Secura",
            "gender": "female",
            "skin_color": "blue",
            "hair_color": "none",
            "height": "178",
            "eye_color": "hazel",
            "mass": "55",
            "homeworld": 37,
            "birth_year": "48BBY"
        },
        "model": "resources.people",
        "pk": 46
    },
    {
        "fields": {
            "name": "Ratts Tyerel",
            "gender": "male",
            "skin_color": "grey, blue",
            "hair_color": "none",
            "height": "79",
            "eye_color": "unknown",
            "mass": "15",
            "homeworld": 38,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 47
    },
    {
        "fields": {
            "name": "Dud Bolt",
            "gender": "male",
            "skin_color": "blue, grey",
            "hair_color": "none",
            "height": "94",
            "eye_color": "yellow",
            "mass": "45",
            "homeworld": 39,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 48
    },
    {
        "fields": {
            "name": "Gasgano",
            "gender": "male",
            "skin_color": "white, blue",
            "hair_color": "none",
            "height": "122",
            "eye_color": "black",
            "mass": "unknown",
            "homeworld": 40,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 49
    },
    {
        "fields": {
            "name": "Ben Quadinaros",
            "gender": "male",
            "skin_color": "grey, green, yellow",
            "hair_color": "none",
            "height": "163",
            "eye_color": "orange",
            "mass": "65",
            "homeworld": 41,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 50
    },
    {
        "fields": {
            "name": "Mace Windu",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "none",
            "height": "188",
            "eye_color": "brown",
            "mass": "84",
            "homeworld": 42,
            "birth_year": "72BBY"
        },
        "model": "resources.people",
        "pk": 51
    },
    {
        "fields": {
            "name": "Ki-Adi-Mundi",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "white",
            "height": "198",
            "eye_color": "yellow",
            "mass": "82",
            "homeworld": 43,
            "birth_year": "92BBY"
        },
        "model": "resources.people",
        "pk": 52
    },
    {
        "fields": {
            "name": "Kit Fisto",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "196",
            "eye_color": "black",
            "mass": "87",
            "homeworld": 44,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 53
    },
    {
        "fields": {
            "name": "Eeth Koth",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "black",
            "height": "171",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 45,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 54
    },
    {
        "fields": {
            "name": "Adi Gallia",
            "gender": "female",
            "skin_color": "dark",
            "hair_color": "none",
            "height": "184",
            "eye_color": "blue",
            "mass": "50",
            "homeworld": 9,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 55
    },
    {
        "fields": {
            "name": "Saesee Tiin",
            "gender": "male",
            "skin_color": "pale",
            "hair_color": "none",
            "height": "188",
            "eye_color": "orange",
            "mass": "unknown",
            "homeworld": 47,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 56
    },
    {
        "fields": {
            "name": "Yarael Poof",
            "gender": "male",
            "skin_color": "white",
            "hair_color": "none",
            "height": "264",
            "eye_color": "yellow",
            "mass": "unknown",
            "homeworld": 48,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 57
    },
    {
        "fields": {
            "name": "Plo Koon",
            "gender": "male",
            "skin_color": "orange",
            "hair_color": "none",
            "height": "188",
            "eye_color": "black",
            "mass": "80",
            "homeworld": 49,
            "birth_year": "22BBY"
        },
        "model": "resources.people",
        "pk": 58
    },
    {
        "fields": {
            "name": "Mas Amedda",
            "gender": "male",
            "skin_color": "blue",
            "hair_color": "none",
            "height": "196",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 50,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 59
    },
    {
        "fields": {
            "name": "Gregar Typho",
            "gender": "male",
            "skin_color": "dark",
            "hair_color": "black",
            "height": "185",
            "eye_color": "brown",
            "mass": "85",
            "homeworld": 8,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 60
    },
    {
        "fields": {
            "name": "Cord\u00e9",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "157",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 8,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 61
    },
    {
        "fields": {
            "name": "Cliegg Lars",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "brown",
            "height": "183",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 1,
            "birth_year": "82BBY"
        },
        "model": "resources.people",
        "pk": 62
    },
    {
        "fields": {
            "name": "Poggle the Lesser",
            "gender": "male",
            "skin_color": "green",
            "hair_color": "none",
            "height": "183",
            "eye_color": "yellow",
            "mass": "80",
            "homeworld": 11,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 63
    },
    {
        "fields": {
            "name": "Luminara Unduli",
            "gender": "female",
            "skin_color": "yellow",
            "hair_color": "black",
            "height": "170",
            "eye_color": "blue",
            "mass": "56.2",
            "homeworld": 51,
            "birth_year": "58BBY"
        },
        "model": "resources.people",
        "pk": 64
    },
    {
        "fields": {
            "name": "Barriss Offee",
            "gender": "female",
            "skin_color": "yellow",
            "hair_color": "black",
            "height": "166",
            "eye_color": "blue",
            "mass": "50",
            "homeworld": 51,
            "birth_year": "40BBY"
        },
        "model": "resources.people",
        "pk": 65
    },
    {
        "fields": {
            "name": "Dorm\u00e9",
            "gender": "female",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "165",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 8,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 66
    },
    {
        "fields": {
            "name": "Dooku",
            "gender": "male",
            "skin_color": "fair",
            "hair_color": "white",
            "height": "193",
            "eye_color": "brown",
            "mass": "80",
            "homeworld": 52,
            "birth_year": "102BBY"
        },
        "model": "resources.people",
        "pk": 67
    },
    {
        "fields": {
            "name": "Bail Prestor Organa",
            "gender": "male",
            "skin_color": "tan",
            "hair_color": "black",
            "height": "191",
            "eye_color": "brown",
            "mass": "unknown",
            "homeworld": 2,
            "birth_year": "67BBY"
        },
        "model": "resources.people",
        "pk": 68
    },
    {
        "fields": {
            "name": "Jango Fett",
            "gender": "male",
            "skin_color": "tan",
            "hair_color": "black",
            "height": "183",
            "eye_color": "brown",
            "mass": "79",
            "homeworld": 53,
            "birth_year": "66BBY"
        },
        "model": "resources.people",
        "pk": 69
    },
    {
        "fields": {
            "name": "Zam Wesell",
            "gender": "female",
            "skin_color": "fair, green, yellow",
            "hair_color": "blonde",
            "height": "168",
            "eye_color": "yellow",
            "mass": "55",
            "homeworld": 54,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 70
    },
    {
        "fields": {
            "name": "Dexter Jettster",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "none",
            "height": "198",
            "eye_color": "yellow",
            "mass": "102",
            "homeworld": 55,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 71
    },
    {
        "fields": {
            "name": "Lama Su",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "229",
            "eye_color": "black",
            "mass": "88",
            "homeworld": 10,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 72
    },
    {
        "fields": {
            "name": "Taun We",
            "gender": "female",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "213",
            "eye_color": "black",
            "mass": "unknown",
            "homeworld": 10,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 73
    },
    {
        "fields": {
            "name": "Jocasta Nu",
            "gender": "female",
            "skin_color": "fair",
            "hair_color": "white",
            "height": "167",
            "eye_color": "blue",
            "mass": "unknown",
            "homeworld": 9,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 74
    },
    {
        "fields": {
            "name": "R4-P17",
            "gender": "female",
            "skin_color": "silver, red",
            "hair_color": "none",
            "height": "96",
            "eye_color": "red, blue",
            "mass": "unknown",
            "homeworld": 28,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 75
    },
    {
        "fields": {
            "name": "Wat Tambor",
            "gender": "male",
            "skin_color": "green, grey",
            "hair_color": "none",
            "height": "193",
            "eye_color": "unknown",
            "mass": "48",
            "homeworld": 56,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 76
    },
    {
        "fields": {
            "name": "San Hill",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "191",
            "eye_color": "gold",
            "mass": "unknown",
            "homeworld": 57,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 77
    },
    {
        "fields": {
            "name": "Shaak Ti",
            "gender": "female",
            "skin_color": "red, blue, white",
            "hair_color": "none",
            "height": "178",
            "eye_color": "black",
            "mass": "57",
            "homeworld": 58,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 78
    },
    {
        "fields": {
            "name": "Grievous",
            "gender": "male",
            "skin_color": "brown, white",
            "hair_color": "none",
            "height": "216",
            "eye_color": "green, yellow",
            "mass": "159",
            "homeworld": 59,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 79
    },
    {
        "fields": {
            "name": "Tarfful",
            "gender": "male",
            "skin_color": "brown",
            "hair_color": "brown",
            "height": "234",
            "eye_color": "blue",
            "mass": "136",
            "homeworld": 14,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 80
    },
    {
        "fields": {
            "name": "Raymus Antilles",
            "gender": "male",
            "skin_color": "light",
            "hair_color": "brown",
            "height": "188",
            "eye_color": "brown",
            "mass": "79",
            "homeworld": 2,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 81
    },
    {
        "fields": {
            "name": "Sly Moore",
            "gender": "female",
            "skin_color": "pale",
            "hair_color": "none",
            "height": "178",
            "eye_color": "white",
            "mass": "48",
            "homeworld": 60,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 82
    },
    {
        "fields": {
            "name": "Tion Medon",
            "gender": "male",
            "skin_color": "grey",
            "hair_color": "none",
            "height": "206",
            "eye_color": "black",
            "mass": "80",
            "homeworld": 12,
            "birth_year": "unknown"
        },
        "model": "resources.people",
        "pk": 83
    }
]

const filter = { name: escapeRegExp };
const collectionInfos = (collection) => db.listCollections(escapeRegExp(collection)).toArray();

async function up(){
   const createCollection = await db.createCollection('starships');
   if(starshipsData) {
       await createCollection.insertMany(starshipsData);
       return createCollection;
   } else {
       return createCollection
   }
}

// createCollection('starships', starshipsData);
// createCollection('people', peopleData);