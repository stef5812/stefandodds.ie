function toggleMenu() {
    var menu = document.getElementById("menu-options");
    if (menu.classList.contains("visible")) {
        // Apply hide animation to each item first
        document.body.style.backgroundColor = '#D14140';
        
        document.getElementById("item-about").style.animation = 'slideOutAbout 0.775s forwards';
        document.getElementById("item-contact").style.animation = 'slideOutContact 0.75s forwards';
        document.getElementById("item-sample").style.animation = 'slideOutSample 0.75s forwards';
        document.getElementById("item-other").style.animation = 'slideOutOther 0.75s forwards';

        // Wait for the animations to finish before hiding the menu
        setTimeout(() => {
            menu.classList.remove("visible"); // This class will be used to show the menu
            // Reset animation styles after the menu is hidden
            document.querySelectorAll('.menu-item').forEach(function(item) {
                item.style.animation = '';
            });
        }, 500); // Adjust this timeout to match your longest animation duration
    } else {
        menu.classList.add("visible"); // Add class to show the menu
        // Apply show animation to each item
        document.body.style.backgroundColor = 'white';

        document.getElementById("item-about").style.animation = 'slideInAbout 0.5s forwards';
        document.getElementById("item-contact").style.animation = 'slideInContact 0.5s forwards';
        document.getElementById("item-sample").style.animation = 'slideInSample 0.5s forwards';
        document.getElementById("item-other").style.animation = 'slideInOther 0.5s forwards';
    }
}


document.getElementById('item-about').addEventListener('click', function() {
    var menuButton = document.getElementById('menu-button');
    if (menuButton.classList.contains('small-top-left')) {
        menuButton.classList.remove('small-top-left'); // Return to original size and position
    } else {
        menuButton.classList.add('small-top-left'); // Move to top left and reduce size
    }
});