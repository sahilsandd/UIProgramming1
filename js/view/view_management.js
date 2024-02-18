/** The Flying Dutchman
 *  view_management.js
 *  Created by 'Pirates of the Caribbean' on 21 of February 2018.
 */

/* MANAGEMENT PAGE TEXTS
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

var title = ["Drink Delivery Database System",
             "Databas för Drikesleverance",
             "Datenbanksystem für Getränkelieferungen",
             "Sistema de base de datos para entregas",
             "Drink Delivery Database System"];

var stock_order = ["Stock Order",
                   "Lagerbeställning",
                   "Lagerbestellung",
                   "Orden de Stock",
                    "Stock Order"];

 var drinks_list = ["Full Drinks List",
                    "Full drinklista",
                    "Gesamte Getränkeliste",
                    "Lista completa",
                    "Full Drinks List"];
    
var check_stock = ["Check Bar Stock",
                "Kontrollera Bar Lager",
                "Barlager kontrollieren",
                "En Almacén",
                "Check Bar Stock"];

var shortage_alert = ["Shortage Alert (!)",
                    "Bristvarning (!)",
                    "Mangelwarnung (!)",
                    "Alerta de escasez (!)",
                    "Shortage Alert (!)"];

// The drink's details.
var drink_name = ["Name:",
                "Namn:",
                "Name:",
                "Nombre:",
                "Name:"];

var type = ["Type:",
            "Typ:",
            "Typ:",
            "El tipo:",
            "Type:"];

var price= ["Price:",
            "Pris:",
            "Preis:",
            "Precio:",
            "Price:"];

var country= ["Country:",
            "Land:",
            "Land:",
            "País:",
            "Country:"];

var volume= ["Volume:",
            "Volym:",
            "Volumen:",
            "Volumen:",
            "Volume:"];

var alcohol=["Alcohol:",
            "Alkohol:",
            "Alkohol:",
            "Alcohol:",
            "Alcohol:"];

var drink_id=["ID:",
            "ID:",
            "ID:",
            "ID:",
            "ID:"];

var producer=["Producer:",
            "Producent:",
            "Hersteller:",
            "Productor:",
            "Producer:"];

var delivery=["Delivery:",
            "Leverans:",
            "Lieferung:",
            "La Entrega:",
            "Delivery:"];

var cost=["Cost per Liter:",
        "Kostnad per liter:",
        "Preis pro Liter:",
        "Costo por litro:",
        "Cost per Liter:"];

var inStock=["In Stock:",
            "I lager:",
            "Auf Lager:",
            "En stock:",
            "In Stock:"];

var add_one=["Add +1",
            "Tillägga +1",
            "Hinzufügen +1",
            "Agregar +1",
            "Add +1"];

var add_ten=["Add +10",
            "Tillägga +10",
            "Hinzufügen +10",
            "Agregar +10",
            "Add +10"];

var add_hundred=["Add +100",
                "Tillägga +100",
                "Hinzufügen +100",
                "Agregar +100",
                "Add +100"];

var total= ["TOTAL:",
            "TOTAL:",
            "GESAMT:",
            "TOTAL:",
            "TOTAL:"];

var pay= ["Place Stock Order",
        "Placera lagerorder",
        "Lagerbestellung aufgeben",
        "Realizar pedido",
        "Place Stock Order"];

// Alert pop-up messages
var message_empty_order = ["You must select your drinks before placing an order!",
                   "Du måste välja dina drycker innan du gör din beställning!",
                   "Du musst Getränke auswählen bevor die Bestellung aufgegeben werden kann!",
                   "¡Debe seleccionar sus bebidas antes de realizar un pedido!",
                   "Ye must select yer drinks afore placin' an order!"];

var message_placed_order = ["Your order has been placed!",
                    "Din beställning är skickad!",
                    "Deine Bestellung wurde aufgegeben!",
                    "¡Su orden ha sido puesta!",
                    "Yer order has been placed!"];
