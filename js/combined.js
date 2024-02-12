/** The Flying Dutchman
 *  management.js
 *  Created by 'Pirates of the Caribbean' on 11 of February 2018.
 */

/*MANAGEMENT PAGE SCRIPTS
* All scripts related to the management page. Each page has their own scripts in a single js document.
* Method translate() is unique for each individual page and can be found at the bottom of each script.
*/

var big_orders = []; // keeps list of drinks ordered
var big_quantity = []; // keeps list of quantities with matching indexes
var big_total = 0; // calculates the big_total

var current_manager = localStorage.getItem('id');
var current_tab = "drinks_list";

/*UNDO-REDO ARRAYS*/
var done = new Array([]);    //keeps track of 'done' actions
var undone = new Array(); //keeps track of 'redone' actions

$(document).ready(function() {

    //addBackground();
    retrieveSystembolaget(); // load database on page load
    highlightTab("drinks_list");
    
    $("#drinks_list").click(function(){ /* Retrieve from Systembolaget*/
        highlightTab("drinks_list");
        $("#drink_database").empty();
        //addBackground();
        retrieveSystembolaget();
    });

    $("#specials_db").click(function(){ /* Retrieve from Mike's Specials*/
        highlightTab("specials_db");
        $("#drink_database").empty();
        //addBackground();
        $.each(DB_MIKES, function(element){
            printToDOM(this);
        });
    });

    $("#check_stock").click(function(){ /* Retrieve in stock*/
        highlightTab("check_stock");
        $("#drink_database").empty();
        //addBackground();
        $.each(DB_SYSTEMBOLAGET, function(element){
            if (checkStock(this.artikelid) > 0){
                printToDOM(this);
            };
        });
    });

    $("#shortage_alert").click(function(){ /* Retrieve on shortage alert*/
        highlightTab("shortage_alert");
        $("#drink_database").empty();
        //addBackground();
        $.each(DB_SYSTEMBOLAGET, function(element){
            if (checkStock(this.artikelid) > 0 && checkStock(this.artikelid) < 15){
                printToDOM(this);}
        });

        $.each(DB_MIKES, function(element){
            if (checkStock(this.artikelid) > 0 && checkStock(this.artikelid) < 15){
                printToDOM(this);}
        });
    });


    $(document).on('click','#add1',function(){
        var article_id = $(this).parent().find('span').html();
        addOrder(article_id, 1);

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $(document).on('click','#add10',function(){
        var article_id = $(this).parent().find('span').html();
        addOrder(article_id, 10);

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $(document).on('click','#add100',function(){
        var article_id = $(this).parent().find('span').html();
        addOrder(article_id, 100);

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    $("#pay").click(function(){

        if (big_orders.length > 0){
            orders_counter ++;

            var newBigOrder = {
                "order_id": "R" + ((orders_counter + 100000).toString()).slice(1),
                "manager_id": current_manager,
                "order": big_orders,
                "quantities": big_quantity,
                "amount": big_total,
                "timestamp": formatDate(new Date($.now()))
            };
            SESSIONS_ORDERS.push(newBigOrder);

            var flag;
            for (i = 0 ; i < (big_orders.length); i++){
                flag = true;
                for (j = 0 ; j < (SESSION_STOCK_INFO.length); j++){
                    if (SESSION_STOCK_INFO[j].article_id == big_orders[i]){
                        flag = false;
                        SESSION_STOCK_INFO[j].in_stock += big_quantity[i]; // if already in stock update stock
                    }
                }

                if (flag){ // if not in stock add object to array
                    //alert("Not currently in stock!");

                    var drinkIndex= getDrinkIndex(big_orders[i]);

                    is_wine = ((DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("vin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("fruktvin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("shiraz") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("pinot") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("rött vin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("vitt vin") >= 0 ||
                              (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("champagne") >= 0);

                    is_beer = ((DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("öl") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("larger") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("pale") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("stout") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("ale") >= 0 );

                    is_spirit = ((DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("vodka") >= 0) ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("cognac") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("bourbon") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("cider") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("gin") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("rom") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("sprit") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("blended") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("whiskey") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("whisky") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("sake") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("aquavit") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("chartreuse") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("likör") >= 0 ||
                        (DB_SYSTEMBOLAGET[drinkIndex].varugrupp).toLowerCase().indexOf("malt") >= 0;

                    var newObject = {
                        "article_id": DB_SYSTEMBOLAGET[drinkIndex].artikelid, // same as Sytembolaget
                        "name": DB_SYSTEMBOLAGET[drinkIndex].namn +  ' ' + DB_SYSTEMBOLAGET[drinkIndex].namn2,
                        "beer": is_beer,
                        "wine": is_wine,
                        "spirit":is_spirit,
                        "year": DB_SYSTEMBOLAGET[drinkIndex].year,
                        "country": DB_SYSTEMBOLAGET[drinkIndex].ursprunglandnamn,
                        "volume_ml": DB_SYSTEMBOLAGET[drinkIndex].volymiml,
                        "alcohol_percentage": DB_SYSTEMBOLAGET[drinkIndex].alkoholhalt,
                        "sale_price": DB_SYSTEMBOLAGET[drinkIndex].prisinklmoms,
                        "in_stock": big_quantity[i],
                        "kosher": (DB_SYSTEMBOLAGET[drinkIndex].kosher == "1"),
                        "ecologic": (DB_SYSTEMBOLAGET[drinkIndex].ekologisk == "1"),
                        "special": false // all special drinks are already on the database!
                    };
                    SESSION_STOCK_INFO.push(newObject);
                }
            }

            sessionStorage.setItem("SESSION_ORDERS",JSON.stringify(SESSIONS_ORDERS));
            sessionStorage.setItem("orders_counter", orders_counter);
            sessionStorage.setItem("SESSION_STOCK_INFO",JSON.stringify(SESSION_STOCK_INFO));

            //resetPage();
            alert(message_placed_order[localStorage.getItem("index")]);
//            alert("Order is placed message goes here!");

        } else { alert(message_empty_order[localStorage.getItem("index")]); }

    });

    $(document).on('click','.delete',function(){

        big_total-= $(this).closest('.order').find('.hiden_price_sum').html(); // deduct from total
        updateTotal();

        var article_id = $(this).closest('.order').attr('id'); // get id
        var i = $.inArray(article_id,big_orders);

        big_orders.splice(i, 1); // remove both order and quantity (same index)
        big_quantity.splice(i, 1);

        $(this).closest('.order').remove(); // remove from DOM

        //Undo-Redo
        pushOrderTo(done); // update done stack
        clearUndone();     // clear undone stack after a 'proper' action
    });

    //UNDO REDO BUTTONS
    $(document).on('click','#undo',function() {
        var article_id = $(this).find('span').html();
        undo();
    });

    $(document).on('click','#redo',function() {
        var article_id = $(this).find('span').html();
        redo();
    });
});

function retrieveSystembolaget() {
    $.each(DB_SYSTEMBOLAGET, function(element) { printToDOM(this); });
}

// check in_stock for the given article_id
function checkStock (article_id) {
    var counter = 0;
    $.each(SESSION_STOCK_INFO, function(element) {
        if (this.article_id == article_id) {
            counter = this.in_stock;
        }
    });
    return counter;
}

function printToDOM (element) {

    var classes = '';

    if (checkStock(element.artikelid) < 15) {
        classes = ' class ="textRed"';
    }

    if (checkStock(element.artikelid) == 0) {
        classes = ' class ="textLightGreen"';
    }

    if (checkStock(element.artikelid) >= 15) {
        classes = ' class ="textDarkGreen"';
    }

    $("#drink_database").append(
        '<div class="drink">'+

        '<div class="c1">' +
        '<img src="img/drinks/' + element.artikelid + '.png">' +
        '</div>' +

        '<div class="c2">'+
        '<b class="drink_name">Name:</b> ' + element.namn + ' ' + element.namn2 + '<br>' +
        '<b class="type">Type:</b> ' + element.varugrupp + '<br>' +
        '<b class="price">Price:</b> SEK ' + parseInt(element.prisinklmoms) + ':-<br>' +
        '<b class="country">Country:</b> ' + element.ursprunglandnamn + '<br>' +
        '<b class="volume">Volume:</b> ' + element.volymiml + '<br>' +
        '<b class="alcohol">Alcohol:</b> ' + element.alkoholhalt + '<br>' +
        '<b class="drink_id">ID:</b> '+ element.artikelid +'<br>' +
        '<b class="producer">Producer:</b> '+ element.producent +'<br>' +
        '<b class="delivery">Delivery:</b> '+ element.leverantor +'<br>' +
        '<b class="cost">Cost per Liter:</b> SEK '+ element.prisperliter + '<br>' +
        '</div>' +

        '<div class="c3">' +
        '<br><br><br>' +
        '<h2 '+ classes +'><span class="inStock">Current Stock</span> <br> '+ checkStock(element.artikelid) +'</h2>' +
        '</div>' +

        '<div class="c4">' +
        '<a class="add_button" id="add1"><h4 class="add_one">Add +1</h4></a>' +
        '<a class="add_button" id="add10"><h4 class="add_ten">Add +10</h4></a>' +
        '<a class="add_button" id="add100"><h4 class="add_hundred">Add +100</h4></a>' +
        '<span hidden>' + element.artikelid + '</span>'+
        '<span hidden>' + element.prisinklmoms +'</span>'+
        '</div>'+
        '</div>'
    );
}

function addOrder (article_id, number) {
    i = -1;//$.inArray(article_id, big_orders);
    if ((i == -1) || ($.inArray(article_id, big_orders) == -1)) {
        big_orders.push(article_id);
        big_quantity.push(number);
        big_total+= number*parseInt($("#"+article_id).find('.hiden_price_sum').html());
        updateTotal();
    } else {
        big_quantity[i]+= number;
        big_total+= number*parseInt($("#"+article_id).find('.hiden_price_sum').html());
        updateTotal();
    }
}

function updateTotal() {
    $("#total").html("<h2>Total: SEK " + big_total + ":-</h2>");
}

/*Undo-Redo Section
* Array 'done' is where the actions are recorded. Undo moves the last action from done to undone.
* Redo moves the last action from undone back to done.
*/

function pushOrderTo(stack) {
    stack.push(big_orders.slice()); // cloning
    stack.push(big_quantity.slice()); // cloning
    stack.push(big_total); // cloning
}

function undo() {
    if (done.length > 0){
        undone.push(done.pop());
        big_total = done.pop();
        big_quantity = done.pop();
        big_orders = done.pop();
        resetPage();
    }
}

function redo() {
    if (undone.length > 0){
        done.push(undone.pop());
        big_orders = undone.pop();
        big_quantity = undone.pop();
        big_total = undone.pop();
        resetPage();
    }
}

function clearUndone() {
    undone = new Array();
}

function resetPage(){
    // Update the displayed orders according to the current order list
    $("#orders").empty();
    for (i = 0 ; i < big_orders.length; i++){
        var drinkIndex = getDrinkIndex(big_orders[i]);
        $("#orders").append(
            '<div class="order" id="'+ big_orders[i] +'">'+
            DB_SYSTEMBOLAGET[drinkIndex].namn + ' '+ DB_SYSTEMBOLAGET[drinkIndex].namn2 +' :'+
            big_quantity[i] +' st '+
            big_quantity[i]*DB_SYSTEMBOLAGET[drinkIndex].prisinklmoms +
            '<span class="delete">Delete</span>'+
            '<span hidden class="hiden_price_sum">'+ big_quantity[i]*DB_SYSTEMBOLAGET[drinkIndex].prisinklmoms +'</span>'+
            '</div>'
        );
    }
    updateTotal();
}

function formatDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return year + '-' + month + '-' + day;
}

// Function to highlight the currently active tab
function highlightTab(tabId) {
    $(".tablinks").removeClass("active");
    $("#" + tabId).addClass("active");
    current_tab = tabId;
}

function getDrinkIndex(id){
    for (i = 0 ; i < DB_SYSTEMBOLAGET.length; i++){
        if (DB_SYSTEMBOLAGET[i].artikelid == id){
            return i;
        }
    }
}