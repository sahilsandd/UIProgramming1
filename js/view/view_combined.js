/** The Flying Dutchman
 *  view_management.js
 *  Created by 'Pirates of the Caribbean' on 21 of February 2018.
 *  Updated on 23 of February 2018.
 */

/* PAGE TEXTS */
var title = ["Drink Delivery Database System",
             "Databas för Drikesleverance",
             "Datenbanksystem für Getränkebestellungen",
             "Sistema de base de datos para entregas",
             "Drink Delivery Database System"];

var stock_order = ["Stock Order",
                   "Lagerbeställning",
                   "Lagerbestellung",
                   "Orden de Stock",
                   "Stock Order"];

var drinks_list = ["Full Drinks List",
                    "Full drinklista",
                    "Alle Getränke",
                    "Lista completa",
                    "Full Drinks List"];
    
var check_stock = ["Check Bar Stock",
                "Kontrollera Bar Lager",
                "Lager kontrollieren",
                "En Almacén",
                "Check Bar Stock"];

var shortage_alert = ["Shortage Alert (!)",
                    "Bristvarning (!)",
                    "Niedriger Lagerbestand (!)",
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
            "Produzent:",
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
            "TOTAL:",
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
                   "Du musst deine Getränke auswählen bevor du bestellst!",
                   "¡Debe seleccionar sus bebidas antes de realizar un pedido!",
                   "Ye must select yer drinks afore placin' an order!"];

var message_placed_order = ["Your order has been placed!",
                    "Din beställning är skickad!",
                    "Deine Bestellung wurde aufgegeben!",
                    "¡Su orden ha sido puesta!",
                    "Yer order has been placed!"];

// End of management page texts

/* BARTENDER PAGE TEXTS */

var orders_q= ["Orders Queue",
                "Beställningar kö",
                "Bestellungen Warteschlange",
                "Pedidos en cola",
                "Orders Queue"];

var cancel_order= ["Cancel Order",
                    "Avbryt beställning",
                    "Bestellung abbrechen",
                    "Cancelar orden",
                    "Cancel Order"];

var mark_paid= ["Mark as Paid",
                "Markera som betald",
                "Als bezahlt markieren",
                "Marcar como pagado",
                "Mark as Paid"];

// Alert pop-up messages

function message_mark_paid (order_id, index) {
    switch (index){
        case 0:
            return "The order #" + order_id.slice(1) + " has been marked as paid!";
        case 1:
            return "Beställningen #" + order_id.slice(1) + " har markerats som betald!";
        case 2:
            return "Die Bestellung #" + order_id.slice(1) + " wurde als bezahlt markiert!";
        case 3:
            return "La orden #" + order_id.slice(1) + " se ha marcado como paga!";
        case 4:
            return "Th' debt' #" + order_id.slice(1) + " been pai'!";
    }
}

function message_delete_order (order_id, index) {
    switch (index){
        case 0:
            return "The order #" + order_id.slice(1) + " has been deleted!";
        case 1:
            return "Beställningen #" + order_id.slice(1) + " har markerats som betald!";
        case 2:
            return "Die Bestellung #" + order_id.slice(1) + " wurde gelöscht";
        case 3:
            return "La orden #" + order_id.slice(1) + " se ha eliminado!";
        case 4:
            return "Th' debt' #" + order_id.slice(1) + " been forgotten!";
    }
}
