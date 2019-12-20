"use strict"

//================================= FUNCTION TO DISPLAY COFFEE NAME & ROAST ==========================================//

function renderCoffee(coffee) {
    var html = '<body class="coffee">';

    html += '<div style=" display: flex; justify-content: center; align-items: center;">' + '<span style="font-size: x-large; font-weight:bold; color: black; text-shadow: 1px 1px 1px black; margin: 5px; line-height: 18px; text-align: center ">' + coffee.name + '</span>' + " " + '<span style="color: lightgrey; font-size: medium; text-shadow: 2px 2px 8px black; margin: 5px; line-height: 16px">' + coffee.roast + '</span>' +'</div>';
    html += '</body>';

    return html;
}
// Added color to coffee.roast items in the array using a span tag with a style property of color.//

//====================== LOOPS ARRAY TO DISPLAY ALL COFFEE NAMES AND ROASTS (ASCENDING ORDER) ========================//

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//=== Descending Order function ===//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

//===================================== DISPLAYS COFFEE LIST PER SELECTION ===========================================//

function updateCoffees(e) {
    if (typeof e != "string") {//if coming in as an object(and NOT as a string), dont 'run' submit, just show results
        //above line not needed without the functionality of the submit button
        e.preventDefault(); // don't submit the form, we just want to update the data
        // var selectedRoast = roastSelection.value; // === "light/dark" etc....
    }

    var filteredCoffees = [];
    var allCoffee = [];
    var filter = coffeeFilter.value.toUpperCase();

    //coffeeFilter.value attaches input from search to value property
    coffees.forEach(function(coffee) {
        var name = coffee.name.toUpperCase();
        //must match filter for even comparison
        if(coffee.roast === roastSelection.value && name.indexOf(filter) > -1) {
            //indexOf === 'instance of' + value
            filteredCoffees.push(coffee); // adding to empty 'bucket'
            tbody.innerHTML = renderCoffees(filteredCoffees);
            //adds text to html via renderCoffees, but only passing in filtered coffees, showing in tbody area
        }
        else if(coffee.roast === roastSelection.value && name.indexOf(filter) > -1){
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
        else if(coffee.roast === roastSelection.value && name.indexOf(filter) > -1){
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
        else if(roastSelection.value === "all" && name.indexOf(filter) > -1) {
            allCoffee.push(coffee);
            tbody.innerHTML = renderCoffees(allCoffee);
        }
    });
}

//============================================= COFFEE ARRAY =========================================================//

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


//=================================================ADDING A NEW COFFEE================================================//

function addCoffee(e) {
    e.preventDefault();

    var newRoast = document.getElementById('new-roast').value;
    var newName = document.getElementById('new-name').value;

    var coffee = {
        id: coffees.length + 1,
        name: newName,
        roast: newRoast
    };

    coffees.push(coffee);
    updateCoffees(e); // wipes out wish list, refills it with gifts array
    document.getElementById("new-name").value = "";
}
// function renderWishList() {
//     var giftString = "";
//     gifts.forEach(function(gift) {
//         giftString += "<li>" + gift + "</li>";
//     });
//     document.getElementById("wishList").innerHTML = giftString;
// }
// renderWishList();
//===================================== VARIABLES AND SUBMIT EVENT LISTENER ==========================================//

var tbody = document.getElementsByTagName('div')[4];
// THIS VAR WAS BEING USED BY THE EVENT LISTENER FOR 'submitButton'//
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeFilter = document.querySelector('#coffee-filter');
//#coffee-filter attaches ID to 'search/input' fields
roastSelection.addEventListener('click', updateCoffees);//next two lines update home page to display all coffees when refreshed
document.getElementById('roast-selection').value = 'all';
updateCoffees("");

submitButton.addEventListener('click', addCoffee);

// roastSelection.addEventListener('change', updateCoffees);

// THE SUBMIT BUTTON EVENT LISTENER DOESN'T NEED TO BE USED BE IS A GOOD REFERENCE//
// submitButton.addEventListener('click', updateCoffees);


