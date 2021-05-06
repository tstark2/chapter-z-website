export default {
    shuffle() {
        let sponsorIds = [];

        for(const index in this.list) {
            sponsorIds.push(index);
        }

        for(let i = sponsorIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = sponsorIds[i];
            sponsorIds[i] = sponsorIds[j];
            sponsorIds[j] = temp;
        }

        return sponsorIds;
    },
    list: [
        {
            "name": "Niehaus Cycle Sales",
            "website": "https://www.niehauscycle.com",
            "phone": "217-324-6565",
            "address": {
                "street": "718 Old Route 66 North",
                "city": "Litchfield",
                "state": "IL",
                "zip": "62056"
            },
            "category": "Motorcycle",
            "logo": "Niehaus",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Germantown Grille",
            "website": "http://germantowngrille.com",
            "phone": "309-383-3030",
            "address": {
                "street": "505 Ten Mile Creek Rd",
                "city": "Germantown Hills",
                "state": "IL",
                "zip": "61548"
            },
            "category": "Restaurant",
            "logo": "Germantown_Grille",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Our Inn Place",
            "website": "https://www.ourinnplace.com",
            "phone": "309-347-7777",
            "address": {
                "street": "1901 Willow St",
                "city": "Pekin",
                "state": "IL",
                "zip": "61554"
            },
            "category": "Restaurant",
            "logo": "Our_Inn_Place",
            "resolutions": [1, 2, 3]
        },
        // {
        //     "name": "Town and Kountry Kitchen",
        //     "website": "https://www.facebook.com/townandkountrykitchen/",
        //     "phone": "309-383-2900",
        //     "address": {
        //         "street": "385 Germantown Rd",
        //         "city": "Germantown Hills",
        //         "state": "IL",
        //         "zip": "61548"
        //     },
        //     "category": "Restaurant",
        //     "logo": "Town&Kountry",
        //     "resolutions": [1, 2, 3]
        // },
        {
            "name": "Big Art's Yokel",
            "website": "https://www.bigartsyokel.com",
            "phone": "309-925-2607",
            "address": {
                "street": "22461 IL-9",
                "city": "Tremont",
                "state": "IL",
                "zip": "61568"
            },
            "category": "Restaurant",
            "logo": "Big_Arts_Yokel",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Kouri's Pub",
            "website": "https://www.kourispub.com/germantown-hills/",
            "phone": "309-383-4551",
            "address": {
                "street": "105 Elizabeth Pointe Drive",
                "city": "Germantown Hills",
                "state": "IL",
                "zip": "61548"
            },
            "category": "Restaurant",
            "logo": "Kouris_Pub",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Semper Fi Cycle",
            "website": "https://semperficycle.com",
            "phone": "309-925-5191",
            "address": {
                "street": "200 S Baer Rd",
                "city": "Tremont",
                "state": "IL",
                "zip": "61568"
            },
            "category": "Motorcycle",
            "logo": "Semper_Fi_Cycle",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Perdue's Grill",
            "website": "https://perduesrestaurant.com/",
            "phone": "309-925-5200",
            "address": {
                "street": "201 S. Sampson St",
                "city": "Tremont",
                "state": "IL",
                "zip": "61568"
            },
            "category": "Restaurant",
            "logo": "Perdues",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Jack's Cafe",
            "website": "https://www.facebook.com/JacksCafeTremont/",
            "phone": "309-925-2233",
            "address": {
                "street": "130 Lake Street",
                "city": "Tremont",
                "state": "IL",
                "zip": "61568"
            },
            "category": "Restaurant",
            "logo": "Jacks_Cafe",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "The Spotted Cow",
            "website": "http://www.thespottedcow.net/",
            "phone": "309-691-1910",
            "address": {
                "street": "718 West Glen Avenue",
                "city": "Peoria",
                "state": "IL",
                "zip": "61614"
            },
            "category": "Restaurant",
            "logo": "The_Spotted_Cow",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Mickie's Pizzeria",
            "website": "http://mickiespizzeria.com/",
            "phone": "309-966-0448",
            "address": {
                "street": "1051 E Washington St",
                "city": "East Peoria",
                "state": "IL",
                "zip": "61611"
            },
            "category": "Restaurant",
            "logo": "Mickies_Pizzeria",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Germantown Hills PC",
            "website": "https://www.germantown-pc.com/",
            "phone": "309-648-1553",
            "address": {
                "street": "509 Jubilee Lane",
                "city": "Germantown Hills",
                "state": "IL",
                "zip": "61548"
            },
            "category": "Services",
            "logo": "Germantown_PC",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Busy Corner",
            "website": "https://abusycorner.com/",
            "phone": "309-695-2361",
            "address": {
                "street": "302 S. Eureka Street",
                "city": "Goodfield",
                "state": "IL",
                "zip": "61742"
            },
            "category": "Restaurant",
            "logo": "Busy_Corner",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Investment Strategists at Better Banks",
            "website": "https://www.betterbanks.com/investment-strategists-better-banks",
            "phone": "309-685-9595",
            "address": {
                "street": "10225 N. Knoxville Avenue",
                "city": "Peoria",
                "state": "IL",
                "zip": "61615"
            },
            "category": "Services",
            "logo": "Better_Banks_Investments",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "Ricky's Gas",
            "website": "https://facebook.com/rickysgas",
            "phone": "309-550-5109",
            "address": {
                "street": "409 Jubilee Ln",
                "city": "Germantown Hills",
                "state": "IL",
                "zip": "61548"
            },
            "category": "Retail",
            "logo": "Rickys_Gas",
            "resolutions": [1, 2, 3]
        },
        {
            "name": "T & D Windshield",
            "website": null,
            "phone": "309-369-4590",
            "address": {
                "street": "205 John",
                "city": "North Pekin",
                "state": "IL",
                "zip": "61554"
            },
            "category": "Services",
            "logo": "T&D_Windshield",
            "resolutions": [1, 2, 3]
        }
    ]
}
