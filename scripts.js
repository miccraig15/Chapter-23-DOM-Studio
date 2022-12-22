// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    takeoff.addEventListener('click', event => {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            let newTakeOffStatus = document.querySelector("#flightStatus");
            let newTakeOffBackground = document.querySelector("#shuttleBackground");
            let shuttleHeight1 = document.querySelector("#spaceShuttleHeight");
            newTakeOffStatus.innerHTML = "Shuttle in flight.";
            newTakeOffBackground.style.backgroundColor = "blue";
            shuttleHeight1.innerHTML = 10000;
        }
    });
    landing.addEventListener('click', event => {
    let response = window.alert("The shuttle is landing. Landing gear engaged.");
            let newLandingStatus = document.querySelector("#flightStatus");
            let newLandingShuttleBackground = document.querySelector("#shuttleBackground")
            let newLandingShuttleHeight = document.querySelector("#spaceShuttleHeight")
            newLandingStatus.innerHTML = "The shuttle has landed.";
            newLandingShuttleBackground.style.backgroundColor = "green";
            newLandingShuttleHeight.innerHTML = 0;
    })
});