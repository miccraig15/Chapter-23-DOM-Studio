// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    takeoff.addEventListener('click', event => {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            let newTakeOffStatus = document.querySelector("#flightStatus");
            let newTakeOffBackground = document.querySelector("#shuttleBackground");
            let newTakeOffShuttleHeight = document.querySelector("#spaceShuttleHeight");
            newTakeOffStatus.innerHTML = "Shuttle in flight.";
            newTakeOffBackground.style.backgroundColor = "blue";
            newTakeOffShuttleHeight.innerHTML = 10000;
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
    missionAbort.addEventListener('click', event => {
    let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            let newAbortStatus = document.querySelector("#flightStatus");
            let newAbortBackground = document.querySelector("#shuttleBackground");
            let newAbortShuttleHeight = document.querySelector("#spaceShuttleHeight");
            newAbortStatus.innerHTML = "Mission aborted";
            newAbortBackground.style.backgroundColor = "green";
            newAbortShuttleHeight.innerHTML = 0;
        }
    })
});