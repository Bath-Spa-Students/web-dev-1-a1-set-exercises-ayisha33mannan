

let filtersApplied = false; // Flag to keep track of whether filters are applied or not

// Function to toggle filters on images
function magicFilters() {
    const images = document.querySelectorAll('.imageContainer img'); // Select all images
    // Loop through each image
    images.forEach(image => {
        if (filtersApplied) {
            image.style.filter = 'none'; // Remove filters if they are applied
        } else {
            // Apply filters based on image class
            if (image.parentElement.classList.contains('image1')) {
                image.style.filter = 'grayscale(100%)';
            } else if (image.parentElement.classList.contains('image2')) {
                image.style.filter = 'blur(5px)';
            } else if (image.parentElement.classList.contains('image3')) {
                image.style.filter = 'hue-rotate(90deg)';
            }
        }
    });
    filtersApplied = !filtersApplied; // Toggle the flag
}