//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.itemss');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .itemss');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .itemss');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// Counter
const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counters");
const bannerHeight = document.querySelector(".carousel").offsetHeight;

let activated = false;

// Scroll Event
window.addEventListener("scroll", () => {
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > containerTop - containerHeight - bannerHeight && !activated) {
        counters.forEach((counter) => {
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);

                if (count < target) {
                    count+=30;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
            activated = true;
        });
    } else if (scrollPosition < containerTop - containerHeight - bannerHeight || scrollPosition === 0) {
        counters.forEach((counter) => {
            counter.innerText = 0;
        });
        activated = false;
    }
});