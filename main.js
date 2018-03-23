let imgs = document.querySelectorAll('.imgs');
before = document.querySelector('.before');
after = document.querySelector('.after');
play = document.querySelector('.play');
pause = document.querySelector('.pause');

after.addEventListener('click', movingRight);
play.addEventListener('click', playSlider);
pause.addEventListener('click', pauseSlider);
before.addEventListener('click', movingLeft);
positioning();


function positioning() {
    position = imgs.length * (-600) + 1200; // this is start position, on the left side. for 6 pics it is -2400px.
    for (i = 0; i < imgs.length; i++) {
        im = imgs[i];
        im.style.left = position + 600 * i + "px"; //adding  Position                   
        lefty = im.style.left
        hefty = parseInt(lefty);
        playy(im, i, hefty); //sending element, index and position
    };
}


function playy(im, i, hefty) {
    setInterval(function() {
        hefty += 600;
        var integy = hefty + "px"
        if (hefty == 1200) {
            hefty = -600*imgs.length+1200;
            im.style.display = "none";
        } else {
            im.style.display = "block";
        }
        im.style.left = integy
    }, 4000);
}
