let imgs = document.querySelectorAll('.imgs');
before = document.querySelector('.before');
after = document.querySelector('.after');
play = document.querySelector('.play');
pause = document.querySelector('.pause');
// console.log(imgs);
var nodar = [];

before.addEventListener('click', movingLeft);
after.addEventListener('click', movingRight);
play.addEventListener('click', playSlider);
pause.addEventListener('click', pauseSlider);
positioning();

// console.log(imgs)

function positioning() {
    for (i = 0; i < imgs.length; i++) {
        let im = imgs[i];
        im.classList.add('img' + i); //adding Classes
        var position = imgs.length * (-600) + 1200;
        im.style.left = position + 600 * i+"px"; //adding  Position  

        var lefty = im.style.left
           
            
      
        console.log(lefty);

        //                    //sending Element, Index and position
        playy(im, i, lefty);
        // console.log(im, i, lefty);
    };
    // nodar.unshift(imgs.length-1);
}

var x;

function changingClass() {}

// function movingRight(im, i, position){
// }

function playy(im, i, lefty) {

    // console.log(lefty)
    let hefty = parseInt(lefty);

setInterval(function() {
        hefty+=600;
        var integy = hefty + "px"
         if (hefty == 1200) {
            hefty=  -2400 ;
            im.style.display= "none";
            }else{
                im.style.display = "block";
            }
            console.log(integy);
        im.style.left = integy
        
            console.log(im, lefty);
 

  //       im.style.left = parseInt(lefty) + 600  + "px"; // moving right for one position
  //       }


        integy += 600; //all elements have good position
console.log(lefty);
// console.log(position);
        // return;

    }, 4000);
}
playSlider();




function roto() {

}




function playSlider() {
    // console.log(imgs);
    // toTheRight();
    // // $('.pause').prop("disabled", false);
    // // $('.play').prop("disabled", true);
    // myInterval = setInterval(toTheRight, 3500);
}









// let aftr = function() {
//     after.click(function() {
//         movingRight()
//     })
// }


// let bfr = function() {
//     before.click(function() {
//         movingLeft()
//     })
// };



function movingRight(imgs, i) { //Right Arrow Function
    // imgs[i].style.left = position +600*i+600+"px";
    // pauseSlider();
    // after.off('click');
    // console.log(i);
    // toTheRight();
    // setTimeout(aftr, 3000);
}


function movingLeft() { //Left Arrow Function
    // pauseSlider();
    // before.off('click');
    // toTheLeft();
    // setTimeout(bfr, 3000);
};




function pauseSlider() {
    //     clearInterval(myInterval);
    //     $('.play').prop("disabled", false);
    //     $('.pause').prop("disabled", true);
    //     console.log(imgs);
}


// function toTheRight(imgs,i){ //Right Arrow Function
//     imgs[i].style.left = position +600*i+600+"px";
//     $('.img2').removeClass('img2').addClass('imga2'); //imga2 is helping class (prevent immediately changing img1 to img2 to img0)
//     $('.img0').removeClass('img0').addClass('img2');
//     $('.img1').removeClass('img1').addClass('img0');
//     $('.imga2').removeClass('imga2').addClass('img1');
// // $('.img0').css('left','0px');
// // $('.img1').css('left','-600px');
// // $('.img2').css('left','600px');
// $.each(imgs, function(i) {
//     console.log(imgs);
//     console.log(i);
// $('.img' + (i + 2)).removeClass('img' + (i + 2)).addClass('imga2');
// $('.img' + i).removeClass('img' + i).addClass('img' + (i + 2));
// $('.img' + (i + 1)).removeClass('img' + (i + 1)).addClass('img' + i);
// $('.imga2').removeClass('imga2').addClass('img' + (i + 1));
// $(this).addClass('img'+(i))
// }

function toTheLeft() {
    //     $('.img1').removeClass('img1').addClass('imga3'); //imga3 is helping class (prevent immediately changing img1 to img2 to img0)
    //     $('.img0').removeClass('img0').addClass('img1');
    //     $('.img2').removeClass('img2').addClass('img0');
    //     $('.imga3').removeClass('imga3').addClass('img2');
}



// function positioning() {
//     for (i = 0; i < imgs.length; i++) {
//         let im = imgs[i];
//         im.classList.add('img' + i);                //adding Classes
//         var position = imgs.length * (-600) + 1200;
//         im.style.left = position + 600 * i + "px";  //adding  Position
//         // imgs[imgs.length].removeAttribute("class", "img" + imgs.length)
//         var current = im.getAttribute("class");


//         playy(im, i, position);  
//         piccar.push(im)
//                            //sending Element, Index and position
//     };
// }
