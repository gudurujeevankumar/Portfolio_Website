
// ------------ GSAP Animations ------------ //

// Header animation //

gsap.from("header", {
    y: -100,
    duration:1
});

gsap.from(".blackhole-box", {
    y: -100,
    duration:1,
});

gsap.from(".img-box", {
    opacity: 0,
    duration:2
});

// Hero section animation //

gsap.from(".hero h1",{
    x: -150,
    opacity: 0,
    duration:1.5,
})

gsap.from(".hero-info",{
    x: -100,
    opacity: 0,
    duration: 1
});

// Info-section animation //
gsap.from("#hello", {
    y:-200,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#hello",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});


gsap.from("#my-projects-h1", {
    y:-140,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#my-projects-h1",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});

// Project section animation //

gsap.from("#project-info-1",{
    x:-400,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#projectVideo1",
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
        markers: false
    }
})

gsap.from("#project-info-2",{
    x:-400,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#projectVideo2",
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
        markers: false
    }
})

gsap.from("#project-info-3",{
    x:-400,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#projectVideo3",
        start: "top 100%",
        end: "bottom 70%",
        scrub: true,
        markers: false
    }
})

// My Skills section animation //

gsap.from("#skills-title", {
    y:-100,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#skills-title",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});

gsap.from(".skills-box", {
    y:-100,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#skills-title",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});

// Contact section animation //

gsap.from("#contact-h1", {
    y:-100,
    opacity: 0,
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: "#contact-h1",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});

gsap.from("input",{
    x: 200,
    opacity: 0,
    scale: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#contact-h1",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});
gsap.from(".contact-box p, .social-box",{
    x: -800,
    opacity: 0,
    scale: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#contact-h1",
        start: "top 60%",
        end: "bottom 10%",
        scrub: true,
        markers: false
    }
});






//------------ JavaScript for video hover effect and sidebar toggle ------------//



const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})