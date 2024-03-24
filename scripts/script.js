document.addEventListener("DOMContentLoaded", function() {
    // Function to handle scrolling to section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Get developer buttons
    var developerButtons = document.querySelectorAll('.developer-button');
    // Get filter icon
    var filterIcon = document.querySelector('.filter-icon');
    // Get all sections
    var allSections = document.querySelectorAll('section');

    // Function to show selected section and hide others
    function showSelectedSection(sectionId) {
        allSections.forEach(function(section) {
            if (sectionId === 'all-sections') {
                section.style.display = 'block';
            } else {
                if (section.id === sectionId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            }
        });
    }

    // Add click event listener to each button
    developerButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Extract the section ID from the button's data attribute
            var sectionId = this.getAttribute('data-section-id');
            scrollToSection(sectionId);
        });
    });

    // Add click event listener to filter icon to toggle the developer list
    filterIcon.addEventListener('click', function() {
        var developerList = document.querySelector('.developer-list');
        developerList.classList.toggle('show');
    });

    // Add click event listeners to filter options in dropdown
    var filterOptions = document.querySelectorAll('.developer-list a');
    filterOptions.forEach(function(option) {
        option.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            var sectionId = this.getAttribute('data-section-id');
            showSelectedSection(sectionId);
        });
    });
});
