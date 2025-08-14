  $(document).ready(function() {
            // Create multiple fish
            const fishCount = 5;
            
            for (let i = 0; i < fishCount; i++) {
                // Create fish element
                const fish = $('<img>', {
                    class: 'fish',
                    src: '/fishbowl_page/swimming-fish_mirror-final.png',
                });
                
                //adding in random positions
                fish.css({
                    top: Math.random() * (window.innerHeight - 100) + 'px',
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
                    left: windowWidth + 100 // Go slightly off-screen
                }, speed, function() {
                    //reset to the left side 
                    fishElement.css({
                        right: fishWidth,
                        top: Math.random() * (window.innerHeight + 100) + 'px' // New random height
                    });
                    
                    //random speed
                    animateFish(fishElement, Math.random() * 3000 + 2000);
                });
            }
        });