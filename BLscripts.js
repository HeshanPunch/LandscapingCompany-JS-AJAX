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
    
    console.log("showSquareForm...loading BLsquare.html");
    xmlObject.open("GET", "BLsquare.html", true);
    xmlObject.send();
    
    
    
    document.getElementById("showForm").style.display = "block";
    
}


// show form - Flat bottomed cylinders
function showFBCylinderForm(){
    planterSelected = flatCyl;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };
    
    console.log("showSquareForm...loading flatCylinder.html");
    xmlObject.open("GET", "flatCylinder.html", true);
    xmlObject.send();
    
    document.getElementById("showForm").style.display = "block";
}


// show form - ½ Spherical
function showSphericalForm(){
    planterSelected = halfSpher;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };
    
    console.log("showSquareForm...loading showSphericalForm");
    xmlObject.open("GET", "spherical.html", true);
    xmlObject.send();
    
    document.getElementById("showForm").style.display = "block";
    
}


// show form - Truncated cone
function showTruncForm(){
    planterSelected = truncCone;
    
    xmlObject.onreadystatechange = function(){
        if (xmlObject.readyState == 4 && xmlObject.status == 200){
            document.getElementById("showForm").innerHTML = xmlObject.responseText;
        }
    };
    
    console.log("showSquareForm...loading showTruncForm");
    xmlObject.open("GET", "cone.html", true);
    xmlObject.send();
    
    document.getElementById("showForm").style.display = "block";
    
}


//returns customerInfo
function customerInfo(){
    var name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var postalCode = document.getElementById("postalCode").value;
    console.log("Called customerInfo()");
    
    
    console.log(name);
    document.getElementById("customerInfo").innerHTML = `${name} <br> ${address} <br> ${postalCode} <br>`;
    
    
    document.getElementById("customerInfo").style.display = "block";
}

//calculate
function orderInfo(){
    var volume;
    var cost;
    var radius1 = 0;
    var radius2 = 0;
    var length = 0;
    var width = 0;
    var height = 0;
    
    console.log("selected " + planterSelected);
    switch(planterSelected){
        case square:
        //math for the square selection
        length = document.getElementById("sqLength").value;
        width = document.getElementById("sqWidth").value;
        height = document.getElementById("sqHeight").value;
        volume = length * width * height;
        cost = volume * 0.001;
        
        document.getElementById("orderinfo").innerHTML = `${planterSelected} <br> ${length} CM x ${width}CM x ${height} CM <br> Volume: ${volume.toFixed(2)} CM<sup>3</sup> <br> Total: $${cost.toFixed(2)}`;
        //test
        // console.log(`${planterSelected} <br> ${length} x ${width} x ${height}<br> $${cost.toFixed(2)}`);
        break;
        
        //math for the Flat bottomed cylinders selection
        case flatCyl:
        radius1 = document.getElementById("fbRadius").value;
        height = document.getElementById("fbHeight").value;
        volume = Math.PI * radius1 * radius1 * height;
        cost = volume * 0.0012;
        
        document.getElementById("orderinfo").innerHTML = `${planterSelected} <br> ${radius1} CM x ${height} CM <br> Volume: ${volume.toFixed(2)} CM<sup>3</sup> <br> Total: $${cost.toFixed(2)}`;
        
        break;
        
        //math for the ½ Spherical selection
        case halfSpher:
        radius1 = document.getElementById("hsRadius").value;
        volume = (1/2) * ((4/3) * Math.PI * radius1 * radius1 * radius1);
        cost = volume * 0.0015;
        
        document.getElementById("orderinfo").innerHTML = `${planterSelected} <br> Radius: ${radius1} CM <br> Volume: ${volume.toFixed(2)} CM<sup>3</sup> <br> Total: $${cost.toFixed(2)}`;
        
        break;
        
        //math for the Truncated cone selection
        case truncCone:
        radius1 = document.getElementById("tcRadius1").value;
        radius2 = document.getElementById("tcRadius2").value;
        height = document.getElementById("tcHeight").value;
        volume =(1/3) * Math.PI * (radius1*radius1+radius1*radius2+radius2*radius2) * height;
        cost = volume * 0.002;
        
        document.getElementById("orderinfo").innerHTML = `${planterSelected} <br> ${radius1} CM x ${radius2} CM x ${height} CM<br> Volume: ${volume.toFixed(2)} CM<sup>3</sup> <br> Total: $${cost.toFixed(2)}`;
        break;
        
        //default to catch errors
        default:
        console.log("issue with switch, selected default");
        
    }
    
    document.getElementById("orderinfo").style.display = "block";
    
}

// print message on page
function printToPage(){
    customerInfo();
    orderInfo();
}










