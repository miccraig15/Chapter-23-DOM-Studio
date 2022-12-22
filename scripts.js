// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    takeoff.addEventListener('click', event => {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            let newStatus = document.querySelector("#flightStatus");
            let newBackground = document.querySelector("#shuttleBackground");
            let shuttleHeight1 = document.querySelector("#spaceShuttleHeight");
            newStatus.innerHTML = "Shuttle in flight.";
            newBackground.style.backgroundColor = "blue";
            shuttleHeight1.innerHTML = 10000;
        }
    });
});