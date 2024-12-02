function toggleMenu() {
    var menu = document.getElementById("menu-options");
    if (menu.classList.contains("visible")) {
        // Apply hide animation to each item first
        document.body.style.backgroundColor = '#D14140';
        console.log("toggled");
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
        // document.body.style.backgroundColor = 'white';

        document.getElementById("item-about").style.animation = 'slideInAbout 0.5s forwards';
        document.getElementById("item-contact").style.animation = 'slideInContact 0.5s forwards';
        document.getElementById("item-sample").style.animation = 'slideInSample 0.5s forwards';
        document.getElementById("item-other").style.animation = 'slideInOther 0.5s forwards';
    }
}

//form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('sendEmail.php', { // The URL to the server-side script
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

// Updated JavaScript - about
document.getElementById('item-about').addEventListener('click', function() {
    var modal = document.getElementById('modal-about');
    modal.style.display = 'flex'; // Use flex to center the modal content
    setTimeout(function() {
        modal.querySelector('.modal-content-about').style.transform = 'scale(1)';
    }, 500); // Timeout to ensure the display change has taken effect
});

document.getElementById('closeAbout').addEventListener('click', function() {
    var modalContent = document.getElementById('modal-about').querySelector('.modal-content-about');
    modalContent.style.transform = 'scale(0)'; // Shrink the modal
    setTimeout(function() {
        document.getElementById('modal-about').style.display = 'none';
    }, 500); // Match the duration of the transition
});

// Updated JavaScript = contact
document.getElementById('item-contact').addEventListener('click', function() {
    var modal = document.getElementById('modal-contact');
    modal.style.display = 'flex'; // Use flex to center the modal content
    setTimeout(function() {
        modal.querySelector('.modal-content-contact').style.transform = 'scale(1)';
    }, 500); // Timeout to ensure the display change has taken effect
});

document.getElementById('closeContact').addEventListener('click', function() {
    var modalContent = document.getElementById('modal-contact').querySelector('.modal-content-contact');
    modalContent.style.transform = 'scale(0)'; // Shrink the modal
    setTimeout(function() {
        document.getElementById('modal-contact').style.display = 'none';
    }, 500); // Match the duration of the transition
});

// Updated JavaScript = sample
document.getElementById('item-sample').addEventListener('click', function() {
    var modal = document.getElementById('modal-sample');
    modal.style.display = 'flex'; // Use flex to center the modal content
    setTimeout(function() {
        modal.querySelector('.modal-content-sample').style.transform = 'scale(1)';
    }, 500); // Timeout to ensure the display change has taken effect
});

document.getElementById('closeSample').addEventListener('click', function() {
    var modalContent = document.getElementById('modal-sample').querySelector('.modal-content-sample');
    modalContent.style.transform = 'scale(0)'; // Shrink the modal
    setTimeout(function() {
        document.getElementById('modal-sample').style.display = 'none';
    }, 500); // Match the duration of the transition
});

// Updated JavaScript = other
document.getElementById('item-other').addEventListener('click', function() {
    var modal = document.getElementById('modal-other');
    modal.style.display = 'flex'; // Use flex to center the modal content
    setTimeout(function() {
        modal.querySelector('.modal-content-other').style.transform = 'scale(1)';
    }, 500); // Timeout to ensure the display change has taken effect
});

document.getElementById('closeOther').addEventListener('click', function() {
    var modalContent = document.getElementById('modal-other').querySelector('.modal-content-other');
    modalContent.style.transform = 'scale(0)'; // Shrink the modal
    setTimeout(function() {
        document.getElementById('modal-other').style.display = 'none';
    }, 500); // Match the duration of the transition
});

// Show or hide the .me-panel when bubble0 is clicked
document.getElementById('bubble0').addEventListener('click', function () {
    var mePanel = document.querySelector('.me-panel');
    if (mePanel.classList.contains('hidden')) {
        mePanel.classList.remove('hidden'); // Show the panel
    } else {
        mePanel.classList.add('hidden'); // Hide the panel
    }
});

// Close the .me-panel when the close button is clicked
document.getElementById('close-me-Panel').addEventListener('click', function () {
    var mePanel = document.querySelector('.me-panel');
    mePanel.classList.add('hidden'); // Hide the panel
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Toggle menu visibility
    document.querySelector('.your-menu-selector').classList.toggle('show');
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

function toggleMenu() {
    var menu = document.getElementById("menu-options");
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
}
