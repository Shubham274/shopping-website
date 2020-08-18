let menuIcon = document.getElementById('menu-icon');
let menuItems = document.getElementById('menu-items');

menuItems.style.maxHeight = "0px";

menuIcon.addEventListener('click', function () {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    }
    else {
        menuItems.style.maxHeight = "0px";
    }

});
