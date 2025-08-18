


window.addEventListener("resize", () => {
  clearTimeout(resizeId)
  resizeId = setTimeout(doneResizing, 500);
});
//have to set this otherwise it will be annoying in resizing

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflowX = "hidden";
  document.body.style.maxWidth = "100vw";
  document.body.style.margin = "0";
  document.body.style.padding = "0";

  // Create multiple fish
  const fishCount = 7;
//have to set styles/css here because otherwise it is a mess without it
  for (let i = 0; i < fishCount; i++) {
    // Create fish element
    const fish = document.createElement("img");
    fish.className = "fish";
    fish.src = "/fishbowl_page/swimming-fish_mirror-final.png";

    fish.style.position = "absolute";
    fish.style.top = Math.random() * (window.innerHeight - 100) + "px";
    fish.style.left = "-100px"; // Start off-screen to the left
    fish.style.zIndex = "1000";
    fish.style.pointerEvents = "none";
    fish.style.maxWidth = "50px";
    fish.style.height = "auto";

    document.body.appendChild(fish);

    // Animation beginning
    setTimeout(() => {
      animateFish(fish, Math.random() * 2000 + 2000); // speed between 2 - 4 seconds
    }, Math.random() * 3000); // random!
  }

  // function that obtains info about the window and animates
  function animateFish(fishElement, speed) {
    const windowWidth = window.innerWidth;
    const fishWidth = fishElement.offsetWidth || 50;// setting a default 

    // Animate fish across the screen
    const startTime = performance.now();
    const startLeft = Number.parseInt(fishElement.style.left) || -100;
    const endLeft = windowWidth + 50;

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / speed, 1);

      const currentLeft = startLeft + (endLeft - startLeft) * progress;
      fishElement.style.left = currentLeft + "px";
        
        // not entirely sure what this does due to animation logic from stack

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // reset to the left side  -- adds to the lack of overflow 
        fishElement.style.left = -fishWidth + "px";
        fishElement.style.top = Math.random() * (window.innerHeight - 100) + "px";

        // Continue animation with random speed
       // animateFish(fishElement, Math.random() * 3000 + 2000);
      }
    }

    requestAnimationFrame(animate);
  }
});





















/*  var resizeId;
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
});




$(document).ready(function() {
            // Create multiple fish
            const fishCount = 7;
            
            for (let i = 0; i < fishCount; i++) {
                // Create fish element
                const fish = $('<img>', {
                    class: 'fish',
                    src: '/fishbowl_page/swimming-fish_mirror-final.png',
                });
                
                //adding in random positions
                fish.css({
                    top: Math.random() * (window.innerHeight) + 'px',
                    left: Math.random() * 200 + 'px' // Start off-screen
                });
                
                $('body').append(fish);
                
//animation beginning
                setTimeout(() => {
                    animateFish(fish, Math.random() * 2000 + 2000); // Random speed between 2-4 seconds
                }, Math.random() * 3000); // Random start delay
            }
            //function that obtiains info about the window, and animate
            function animateFish(fishElement, speed) {
                const windowWidth = $(window).width();
                const fishWidth = fishElement.width();
                
                //move across the page
                fishElement.animate({
                  //  left: windowWidth // Go slightly off-screen
                }, speed, function() {
                    //reset to the left side 
                    fishElement.css({
                       // right: fishWidth,
                        //top: Math.random() * (window.innerHeight - 100) + 'px' // New random height
                    });
                    
                    //random speed
                    animateFish(fishElement, Math.random() * 3000 - 2000);
                });
            }
        }); */