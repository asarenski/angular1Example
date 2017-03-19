'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        })
        .constant('STUB_DATA', {
            data: [
                    {
                        "_id": "58cd96147fa087c48d3cd4ee",
                        "index": 0,
                        "guid": "32f0bc90-4838-446b-ad94-8a2399576bc0",
                        "isActive": true,
                        "balance": "$2,134.82",
                        "picture": "http://placehold.it/32x32",
                        "age": 31,
                        "eyeColor": "green",
                        "name": "Miranda Key",
                        "gender": "male",
                        "company": "QNEKT",
                        "email": "mirandakey@qnekt.com",
                        "phone": "+1 (948) 490-2142",
                        "address": "919 Franklin Avenue, Elfrida, Florida, 7961",
                        "about": "Eu do enim pariatur irure occaecat Lorem esse laborum. Proident consequat in excepteur do reprehenderit mollit nostrud. Aute id officia fugiat labore qui consequat. Non cillum commodo esse dolor aliquip ea excepteur cupidatat officia proident. Aliqua id in non pariatur id amet velit ullamco labore ullamco consequat.\r\n",
                        "registered": "2015-09-21T06:16:17+04:00",
                        "latitude": -33.443338,
                        "longitude": 84.484635,
                        "tags": [
                        "tempor",
                        "esse",
                        "voluptate",
                        "sit",
                        "nisi",
                        "tempor",
                        "nulla"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Luella Morse"
                        },
                        {
                            "id": 1,
                            "name": "Hoffman Espinoza"
                        },
                        {
                            "id": 2,
                            "name": "Adrian Sanders"
                        }
                        ],
                        "greeting": "Hello, Miranda Key! You have 9 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "_id": "58cd9614c09ca21445b11dca",
                        "index": 1,
                        "guid": "23ffd3aa-1f58-4e48-874f-1fe6bb2428e5",
                        "isActive": false,
                        "balance": "$1,997.84",
                        "picture": "http://placehold.it/32x32",
                        "age": 32,
                        "eyeColor": "green",
                        "name": "Liz Calhoun",
                        "gender": "female",
                        "company": "APEXIA",
                        "email": "lizcalhoun@apexia.com",
                        "phone": "+1 (861) 447-3869",
                        "address": "707 Balfour Place, Twilight, California, 820",
                        "about": "Pariatur adipisicing magna nisi ad. Incididunt nisi dolore culpa amet dolore. Aliqua veniam irure tempor nisi cillum deserunt do aliquip excepteur elit non. Eu amet sunt mollit laboris culpa mollit esse. Anim minim reprehenderit consequat mollit ullamco commodo. Dolor culpa sint nisi voluptate veniam enim adipisicing aliqua veniam qui ut ut do in.\r\n",
                        "registered": "2015-01-19T02:57:32+05:00",
                        "latitude": 50.982171,
                        "longitude": 108.219808,
                        "tags": [
                        "magna",
                        "minim",
                        "incididunt",
                        "laborum",
                        "dolor",
                        "quis",
                        "sit"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Leola Collier"
                        },
                        {
                            "id": 1,
                            "name": "Sims Santana"
                        },
                        {
                            "id": 2,
                            "name": "Bradley Galloway"
                        }
                        ],
                        "greeting": "Hello, Liz Calhoun! You have 4 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "_id": "58cd9614f8329b01250a6328",
                        "index": 2,
                        "guid": "a5fd5740-66a4-404a-a76e-33584880e8a5",
                        "isActive": false,
                        "balance": "$1,016.08",
                        "picture": "http://placehold.it/32x32",
                        "age": 32,
                        "eyeColor": "brown",
                        "name": "Pickett Horne",
                        "gender": "male",
                        "company": "LUDAK",
                        "email": "picketthorne@ludak.com",
                        "phone": "+1 (932) 514-3535",
                        "address": "221 Ferry Place, Machias, Kansas, 6209",
                        "about": "Quis enim exercitation sit anim. Et eu incididunt ullamco ex enim fugiat ex in sunt aliquip sit minim. Reprehenderit pariatur enim reprehenderit nulla ea dolore nostrud est consectetur reprehenderit do labore aliqua nulla.\r\n",
                        "registered": "2016-11-17T06:08:29+05:00",
                        "latitude": 52.307695,
                        "longitude": 76.479773,
                        "tags": [
                        "cupidatat",
                        "aute",
                        "sunt",
                        "quis",
                        "proident",
                        "ut",
                        "ipsum"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Alexandra Ray"
                        },
                        {
                            "id": 1,
                            "name": "Mariana Herman"
                        },
                        {
                            "id": 2,
                            "name": "Davenport Wolf"
                        }
                        ],
                        "greeting": "Hello, Pickett Horne! You have 1 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "58cd9614127cf320c5a1bc62",
                        "index": 3,
                        "guid": "114d28fc-3a3a-46af-8a74-b5200c8bfcc3",
                        "isActive": false,
                        "balance": "$1,948.70",
                        "picture": "http://placehold.it/32x32",
                        "age": 23,
                        "eyeColor": "blue",
                        "name": "Bird Sutton",
                        "gender": "male",
                        "company": "CINESANCT",
                        "email": "birdsutton@cinesanct.com",
                        "phone": "+1 (810) 445-2365",
                        "address": "779 Legion Street, Hayden, Ohio, 6275",
                        "about": "Lorem ex adipisicing cillum Lorem aute sunt voluptate amet irure laborum. Voluptate anim laboris sit ut labore nisi ullamco. Eiusmod enim voluptate mollit ut ipsum elit. In culpa aliqua ipsum ullamco reprehenderit consequat commodo Lorem pariatur mollit in consequat quis quis.\r\n",
                        "registered": "2015-10-07T09:46:45+04:00",
                        "latitude": -22.83806,
                        "longitude": -106.611789,
                        "tags": [
                        "in",
                        "quis",
                        "sit",
                        "qui",
                        "tempor",
                        "occaecat",
                        "mollit"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Banks Humphrey"
                        },
                        {
                            "id": 1,
                            "name": "Collier Roth"
                        },
                        {
                            "id": 2,
                            "name": "Tracie Dalton"
                        }
                        ],
                        "greeting": "Hello, Bird Sutton! You have 9 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "58cd96147d1d3474dc6430a7",
                        "index": 4,
                        "guid": "ea3dd505-9253-47ba-be01-de7ff7bf7133",
                        "isActive": true,
                        "balance": "$2,656.56",
                        "picture": "http://placehold.it/32x32",
                        "age": 34,
                        "eyeColor": "green",
                        "name": "Christa Bean",
                        "gender": "female",
                        "company": "EARTHWAX",
                        "email": "christabean@earthwax.com",
                        "phone": "+1 (984) 497-3633",
                        "address": "613 Eldert Lane, Westboro, Guam, 5391",
                        "about": "Duis ea aliquip sunt sunt do officia exercitation occaecat ut. Amet et ullamco laboris ea est tempor ad aliqua id quis magna amet fugiat. Id enim deserunt sit ad ea. Amet in excepteur mollit culpa magna nisi pariatur. Dolor eu nisi Lorem aute occaecat minim.\r\n",
                        "registered": "2014-10-27T05:37:01+04:00",
                        "latitude": 0.480938,
                        "longitude": -124.539209,
                        "tags": [
                        "culpa",
                        "consectetur",
                        "non",
                        "cupidatat",
                        "mollit",
                        "labore",
                        "anim"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Stephens Austin"
                        },
                        {
                            "id": 1,
                            "name": "Tammy Mann"
                        },
                        {
                            "id": 2,
                            "name": "Howe Manning"
                        }
                        ],
                        "greeting": "Hello, Christa Bean! You have 5 unread messages.",
                        "favoriteFruit": "banana"
                    },
                    {
                        "_id": "58cd961444eba48e2294975c",
                        "index": 5,
                        "guid": "435dc413-0f5b-487d-a471-6e55e7c9b53a",
                        "isActive": false,
                        "balance": "$1,195.78",
                        "picture": "http://placehold.it/32x32",
                        "age": 36,
                        "eyeColor": "brown",
                        "name": "Kelsey Mullins",
                        "gender": "female",
                        "company": "ACRUEX",
                        "email": "kelseymullins@acruex.com",
                        "phone": "+1 (825) 449-2351",
                        "address": "944 Rapelye Street, Montura, Virginia, 9116",
                        "about": "Magna occaecat nostrud duis irure mollit aute aliqua et. Nostrud cillum ut et velit excepteur exercitation labore ad id consequat aliqua quis veniam. Eu ex Lorem ex aliqua ad laboris ea sit nisi cupidatat magna duis. Lorem aliquip ea sint id sit veniam nulla dolore laborum sunt deserunt consectetur magna. Pariatur anim duis cillum ad.\r\n",
                        "registered": "2015-04-20T10:07:58+04:00",
                        "latitude": 48.141395,
                        "longitude": -65.084242,
                        "tags": [
                        "nisi",
                        "laborum",
                        "duis",
                        "esse",
                        "minim",
                        "magna",
                        "ipsum"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Gray Holder"
                        },
                        {
                            "id": 1,
                            "name": "Winnie Rowland"
                        },
                        {
                            "id": 2,
                            "name": "Delacruz Silva"
                        }
                        ],
                        "greeting": "Hello, Kelsey Mullins! You have 7 unread messages.",
                        "favoriteFruit": "strawberry"
                    },
                    {
                        "_id": "58cd96147fc86c13e66f6c1f",
                        "index": 6,
                        "guid": "0ed36d7e-d962-43ac-8d85-14a9d37c6391",
                        "isActive": true,
                        "balance": "$3,457.22",
                        "picture": "http://placehold.it/32x32",
                        "age": 28,
                        "eyeColor": "green",
                        "name": "Ware Simon",
                        "gender": "male",
                        "company": "SEALOUD",
                        "email": "waresimon@sealoud.com",
                        "phone": "+1 (925) 462-3800",
                        "address": "515 Sullivan Place, Grayhawk, Nevada, 937",
                        "about": "Velit duis incididunt sint quis tempor ut ullamco do. Non in ipsum do culpa culpa deserunt culpa ea laborum aute quis laborum. Cupidatat deserunt deserunt ullamco reprehenderit magna laboris nulla laborum voluptate exercitation. Enim excepteur sunt nostrud consequat non ad nostrud proident tempor. Aliquip ullamco adipisicing nisi minim. Consequat magna enim ipsum enim ipsum nulla eiusmod exercitation incididunt laborum est. Nulla adipisicing occaecat sunt officia.\r\n",
                        "registered": "2016-09-06T11:02:08+04:00",
                        "latitude": -21.098318,
                        "longitude": -10.819771,
                        "tags": [
                        "voluptate",
                        "elit",
                        "irure",
                        "occaecat",
                        "aliquip",
                        "incididunt",
                        "mollit"
                        ],
                        "friends": [
                        {
                            "id": 0,
                            "name": "Lawson Richard"
                        },
                        {
                            "id": 1,
                            "name": "Hopper Valenzuela"
                        },
                        {
                            "id": 2,
                            "name": "Kathleen James"
                        }
                        ],
                        "greeting": "Hello, Ware Simon! You have 5 unread messages.",
                        "favoriteFruit": "apple"
                    }
                    ]
        });
}
