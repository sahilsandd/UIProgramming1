/** The Flying Dutchman
 *  view_customer.js
 *  Created by 'Pirates of the Caribbean' on 21 of February 2018.
 *  Updated on 23 of February 2018.
 */

/* CUSTOMER PAGE TEXTS
*  The indexes and their corresponding languages: [0] English , [1] Swedish, [2] Italian, [3] Spanish, [4] Pirate
*  1. First create an array, follow this template:
*
*  var redundant_name = ["ENGLISH",
*                        "SWEDISH",
*                        "ITALIAN",
*                        "SPANISH",
*                        "PIRATE"]
*
*  Do not skip any indexes! Follow indentation!
*  2. Locate HTML object on the corresponding HTML file -> add id="unique_id"
*  3. Then update translate() method on the corresponding js script page!
*/

var title = ["The Flying Dutchman's List of Drinks",
            "Flygande Holländaren drycklista",
            "Die Getränkeliste des fliegenden Holländers",
            "Lista de tragos del Holandés Volador",
            "Th' Flyin' Dutchman't Loot"];

// User info panel (top right corner)
var customer= ["Customer:",
                "Kund:",
                "Kunde:",
                "Cliente:",
                "Pirate:"
                ];

var credit= ["Credit:",
            "Kredit:",
            "Kredit:",
            "Crédito:",
            "Yu'r Loot:"
];

// The drink list panel
var drink_list= ["Our Drink List",
                "Vår drycklista",
                "Unsere Getränkeliste",
                "Nuestra lista de bebidas",
                "Booty Chest"
];
// start drinks taps
var all= ["All",
        "Allt",
        "Alle",
        "Todas",
        "Argh!"
];

var beers= ["Beers",
            "Öl",
            "Bier",
            "Cervezas",
            "Them Beers"
];

var wines= ["Wines",
            "Vin",
            "Wein",
            "Vinos",
            "Ol' Wines"
];

var spirits= ["Spirits",
            "Sprit",
            "Spirituosen",
            "Destiladas",
            "Rons!"
];

var kosher= ["Kosher",
            "Koscher",
            "Koscher",
            "Kosher",
            "K'sher"
];

var ecologic= ["Ecologic",
                "Ekologisk",
                "Ökologisch",
                "Ecológico",
                "Tree Hugga'"
];

var specials= ["specials",
                "Särskild",
                "Sonderangebote",
                "Especiales",
                "King' Onlies"
];
//end of drinks taps

var your_order= ["Your Order",
                "Din beställning",
                "Deine Bestellung",
                "Su pedido",
                "Th' Booty"
];

var total= ["TOTAL:",
            "TOTALT:",
            "GESAMT:",
            "TOTAL:",
            "WADARTA:"
];

var pl_order= ["Place Order",
                "Beställ",
                "Bestellung aufgeben",
                "Realizar pedido",
                "Board 'em!"
];

var hello = ["Hello ",
             "Hejsan ",
             "Hallo ",
             "Hola ",
             "Ahoy "];

var your_credit = ["Your credit is ",
                   "Din kredit är ",
                   "Dein Kredit ist ",
                   "Tu crédito es ",
                   "In yer duffle there be " ];

// Alert pop-up messages
var message_empty_order = ["You must select your drinks before placing an order!",
                   "Du måste välja dina drycker innan du gör din beställning!",
                   "Du musst Getränke auswählen bevor die Bestellung aufgegeben werden kann!",
                   "¡Debe seleccionar sus bebidas antes de realizar un pedido!",
                   "Ye must select yer drinks afore placin' an order!"
                  ];

var message_payed_order = ["Your order has been payed using your available credit, you can pick up your beverages in the VIP fridge.",
                   "Din beställning har blivit betalad med din tillgängliga kredit, du kan hämta dina drycker i VIP kylen.",
                   "Deine Bestellung wurde mit deinen zur Verfügung stehenden Krediten bezahlt, du kannst sie im VIP Kühlschrank entgegennehmen",
                   "Su orden ha sido pagada usando su crédito disponible, puede recoger sus bebidas en el refrigerador VIP.",
                   "Yer order has been payed usin' yer available credit, ye can pick up yer beverages in th' VIP fridge."
                  ];

var message_placed_order = ["Your order has been placed! Direct to the counter and pay for your order before you can pick up your drinks.",
                    "Din beställning är skickad! Var vänlig betala vid disken innan du kan hämta dina drycker.",
                    "Deine Bestellung wurde aufgegeben! Begebe dich zur Theke and bezahle deine Bestellung bevor du deine Getränke entgegennehmen kannst.",
                    "¡Su orden ha sido puesta! Dirígete al mostrador y paga tu pedido antes de que puedas recoger tus bebidas.",
                    "Yer order has been placed! Direct t' th' counter 'n pay fer yer order afore ye can pick up yer drinks."         
                   ];

