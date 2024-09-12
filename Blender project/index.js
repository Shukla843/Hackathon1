


var tl = gsap.timeline()


tl.to("#wrapper #card1",{
transform:"translateY(-10%)",
duration:1.2,
stagger:1,

scrollTrigger:{
    trigger:"#wrapper   ",
    scroller:"body",
    
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    
}



})

tl.to(" #wrapper #card1",{
    transform:"translateX(-150%)",
    duration:0.3,
    delay:1,
    scrollTrigger:{
        trigger:"#wrapper   ",
        scroller:"body",
        
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true,
    }
    
    })
    