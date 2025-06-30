var images = [
	"../favicons/banana/1.png",
	"../favicons/banana/2.png",
	"../favicons/banana/3.png",
	"../favicons/banana/4.png",
	"../favicons/banana/5.png",
	"../favicons/banana/6.png",
	"../favicons/banana/7.png",
	"../favicons/banana/8.png"
]; // Replace with your paths and names
var currentIndex = 0; // Which image?
var isFocused = true; // Flag to track focus state
var animationInterval;

function iconChange() {
    document.getElementById("icon").href = images[currentIndex]; // Get the current picture
    currentIndex = (currentIndex + 1) % images.length;           // Increment the index for the next image
}

window.onload = function() {
    // Initial icon change
    iconChange();
    
    // Start animation only when tab is focused
    window.onfocus = function() {
        isFocused = true;
        if (!animationInterval) {
            animationInterval = setInterval(iconChange, 65);
        }
    };
    
    // Stop animation when tab loses focus
    window.onblur = function() {
        isFocused = false;
        clearInterval(animationInterval);
        animationInterval = null;
    };
    
    // Start animation if tab is focused
    if (isFocused) {
        animationInterval = setInterval(iconChange, 65);
    }
};
