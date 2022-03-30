//global vars and xml object
var xmlObject = new XMLHttpRequest();
var planterSelected;
const square = "Square/Rectangular Cubes";
const flatCyl = "Flat bottomed cylinders";
const halfSpher = "half-Spherical";
const truncCone = "Truncated cone";

//show form when user selects a type of planter

// show form - Square/Rectangular Cubes
function showSquareForm(){
    planterSelected = square;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };

    console.log("showSquareForm...loading BLsquare.html")
    xmlObject.open("GET", "BLsquare.html", true);
    xmlObject.send();

    document.getElementById("showForm").style.display = "block";
    
}


// show form - Flat bottomed cylinders
function showFBCylinderForm(){
    planterSelected = square;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };

    console.log("showSquareForm...loading flatCylinder.html")
    xmlObject.open("GET", "flatCylinder.html", true);
    xmlObject.send();

    document.getElementById("showForm").style.display = "block";
}


// show form - ½ Spherical
function showSphericalForm(){
    planterSelected = square;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };

    console.log("showSquareForm...loading showSphericalForm")
    xmlObject.open("GET", "spherical.html", true);
    xmlObject.send();

    document.getElementById("showForm").style.display = "block";
    
}


// show form - Truncated cone
function showTruncForm(){
    planterSelected = square;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };

    console.log("showSquareForm...loading showTruncForm")
    xmlObject.open("GET", "cone.html", true);
    xmlObject.send();

    document.getElementById("showForm").style.display = "block";
    
}


// print message on page
function printToPage(){
    
}

//returns customerInfo
function customerInfo(){
    
}







