// Write your helper functions here!
require('isomorphic-fetch');

// ADD DESTINATION INFO
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

// VALIDATE INPUT: Should take in a string as parameter and return "Empty", NaN or "Is A Number" as appropriate.
function validateInput(testInput) {

    // ?? how can validateInput() work for all fields since it alerts for both NaN and numbers?

    if (!testInput) {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (testInput = (/^[0-9]+$/)) { 
        return "Is a Number";
    }

}

// FORM SUBMISSION:  Takes in a document parameter and strings representing the pilot, co-pilot, fuel level and cargo mass.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let list = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("faultyItems");

    // ??? AM I DOING THIS CORRECTLY ???
    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function () {

        // where do I call validateInput(), and how can I apply it equally to the four inputs?

        console.log("button clicked, console log inside formSubmission"); // test

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`; // using template literal, update the li element pilotStatus to include pilot's name
        copilotStatus.innerHTML = `Pilot ${copilot} is ready for launch`; // using template literal, update the li element copilotStatus to include copilot's name

        if (Number(fuelLevel) < 10000) {
            list.style.visibility = "visible";  // change faultyItems to visible
            launchStatus.style.color = "red"; // change h2 element launchStatus text color to red.
            launchStatus.innerHTML = "Shuttle not ready for launch"; // change h2 element launchStatus to "Shuttle not ready for launch"
            fuelStatus.innerHTML = "Fuel level too low for launch"; // if user submits < 10000 fuel level
        }

        if (Number(cargoLevel) > 10000) {
            list.style.visibility = "visible";  // change faultyItems to visible
            launchStatus.style.color = "red"; // change h2 element launchStatus text color to red.
            launchStatus.innerHTML = "Shuttle not ready for launch"; // change h2 element launchStatus to "Shuttle not ready for launch"
            cargoStatus.innerHTML = "Cargo weight too high for launch"; // if user submits > 10000 cargo level
        }

        if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
            list.style.visibility = "visible";
            launchStatus.style.color = "green"; // change h2 element launchStatus text color to green.
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    });
}
// myFetch function - Need to add the URL and return response.json().
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

// pickPlanet function - take in one argument (list of planets), return one planet from list with a randomly-selected index via Math.random().
function pickPlanet(planets) {
    let planetSelect;
    planetSelect = Math.floor(Math.random() * planets.length);
    return planetSelect;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
