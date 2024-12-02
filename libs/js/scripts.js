window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sentStatus = urlParams.get('sent');
    const responseMessagePanel = document.getElementById('responseMessagePanel');
    const responseMessage = document.getElementById('responseMessage');

    if (sentStatus === 'success' || sentStatus === 'error') {
        document.getElementById('closeResponseMessage').addEventListener('click', function() {
            responseMessagePanel.classList.add('hidden');
        });

        if (sentStatus === 'success') {
            responseMessage.innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
        } else if (sentStatus === 'error') {
            responseMessage.innerHTML = '<p style="color: red;">There was an error sending your message. Please try again.</p>';
        }
        
        // Remove the hidden class to show the panel
        responseMessagePanel.classList.remove('hidden');
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sentStatus = urlParams.get('sent');
    const responseMessagePanel = document.getElementById('responseMessagePanel');
    const responseMessage = document.getElementById('responseMessage');

    // Set up the response based on the URL parameter
    if (sentStatus === 'success' || sentStatus === 'error') {
        document.getElementById('closeResponseMessage').addEventListener('click', function() {
            togglePanel('responseMessagePanel', false);
        });

        responseMessage.innerHTML = sentStatus === 'success' 
          ? '<p style="color: green;">Your message has been sent successfully!</p>'
          : '<p style="color: red;">There was an error sending your message. Please try again.</p>';

        // Display the message panel
        togglePanel('responseMessagePanel', true);
    }

    function togglePanel(panelId, isVisible) {
        const panel = document.getElementById(panelId);
        if (isVisible) {
            panel.classList.remove('hidden');
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0%)';
        } else {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(100%)';
            setTimeout(() => {
                panel.classList.add('hidden');
            }, 500); // Ensure this matches the duration of the transition
        }
    }

    // Define click events for bubbles to toggle respective panels
    const bubbles = {
        'bubble1': 'Personal-Panel',
        'bubble4': 'Coding-Panel',
        'bubble2': 'Author-Panel',
        'bubble7': 'Contact-Panel',
    };

    Object.keys(bubbles).forEach(key => {
        document.getElementById(key).addEventListener('click', () => togglePanel(bubbles[key], true));
        const closeButtonId = `close-${bubbles[key]}`;
        document.getElementById(closeButtonId).addEventListener('click', () => togglePanel(bubbles[key], false));
    });

    // Optional: Toggle visibility of bubbles on logo click
    document.getElementById('logo').addEventListener('click', () => {
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.classList.toggle('visible'); // Ensure this class is defined in CSS
        });
    });
});

    document.getElementById('logo').addEventListener('click', () => {
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.opacity = bubble.style.opacity == "1" ? "0" : "1"; // Toggle visibility
        });
        document.body.classList.toggle('html-dark-mode');
    });
