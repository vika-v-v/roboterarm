let roboterarm;

window.onload = function() {
    roboterarm = new Roboterarm(0, 0, "0/0", 0, 0, "0/0");
    erstelleTabelle();
    manageFields();
};