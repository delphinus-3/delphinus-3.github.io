var images = [
	"favicons/wumpa/1.png",
	"favicons/wumpa/2.png",
	"favicons/wumpa/3.png",
	"favicons/wumpa/4.png",
	"favicons/wumpa/5.png",
	"favicons/wumpa/6.png",
	"favicons/wumpa/7.png",
	"favicons/wumpa/8.png",
	"favicons/wumpa/9.png",
	"favicons/wumpa/10.png",
	"favicons/wumpa/11.png",
	"favicons/wumpa/12.png",
	"favicons/wumpa/13.png",
	"favicons/wumpa/14.png"];
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
            animationInterval = setInterval(iconChange, 45);
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
        animationInterval = setInterval(iconChange, 45);
    }
};
