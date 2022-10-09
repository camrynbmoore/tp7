//function to load a file from the URL "fromFile" into the object "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}

// New receipe object- generic recipe creator
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    document.querySelector("#heroimage h1").innerHTML= this.recipeName;
    document.querySelector("#contributor").innerHTML= this.contributor;
    document.querySelector("#heroimage").style.backgroundImage = "url("+ this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }
  
}


TacoDip = new Recipe("Taco Dip", 
                     "Camryn", 
                     "https://images.unsplash.com/photo-1523634700860-90d0ef74f137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80", 
                     "ingredients.html", 
                     "equipment.html", 
                     "directions.html"
                    );


PeachCrisp = new Recipe("Peach Crisp", 
                     "Zaire Moon", 
                     "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
                     "peachcrisp-ingredients.html", 
                     "peachcrisp-equipment.html", 
                     "peachcrisp-directions.html"
                    );

FluffyFrenchToast = new Recipe("Fluffy French Toast",
                    "Analysse Palomares",
                    "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                    "fluffyfrenchtoast-ingredients.html",
                    "fluffyfrenchtoast-equipment.html",
                    "fluffyfrenchtoast-directions.html"
                    );



window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    TacoDip.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function() {
    PeachCrisp.displayRecipe();
  }
  
  document.querySelector("#thirdRecipe").onlick = function() {
    FluffyFrenchToast.displayRecipe();
  }
    
 
    
  
  
  
  
  
  
  
  
  
  
}