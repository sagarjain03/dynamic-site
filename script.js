const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//gsap to animate
gsap.from(".nlink", {
    stagger: 0.1,
    y: 10,
    duration: 1,
    ease: "power2",
    opacity: 0
});

Shery.textAnimate(".heading h1" , {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2", {
    y: 50,
    duration: 2,
    stagger : .2,
    ease: "expo",
    opacity: 0,
    debug:true
});
Shery.imageEffect(".card2 img",{
    style:4,
    config:{"uColor":{"value":true},"uSpeed":{"value":0.55,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.33,"range":[0,5]},"uFrequency":{"value":3.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":15.43},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500000186264513},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
Shery.imageEffect(".card1 img",{
    style:5,
    config:{"uColor":{"value":true},"uSpeed":{"value":0.55,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.33,"range":[0,5]},"uFrequency":{"value":3.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":15.43},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500000186264513},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
gsap.from(".card2 img",{
    y:"+=100",
    opacity:0,
    duration:2,
    ease: Expo
})
Shery.imageEffect(".pgc2 img",{
    style:5,
    config:{"uColor":{"value":true},"uSpeed":{"value":0.55,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.33,"range":[0,5]},"uFrequency":{"value":3.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":15.43},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500000186264513},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
Shery.imageEffect(".pgc1 img",{
    style:5,
    config:{"uColor":{"value":true},"uSpeed":{"value":0.55,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.33,"range":[0,5]},"uFrequency":{"value":3.82,"range":[0,10]},"geoVertex":{"range":[1,64],"value":15.43},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500000186264513},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
Shery.imageEffect(".bannerimg ",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0689772114406484},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":6.26,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
    
})

document.querySelector(".videotxt button").addEventListener("mouseover", () => {
    gsap.to(".videopart video", {
        opacity: 1,
        duration: 1.5,
        ease: "power4"
    });
});

document.querySelector(".videotxt button").addEventListener("mouseleave", () => {
    gsap.to(".videopart video", {
        opacity: 0,
        duration: 1.5,
        ease: "power4"
    });
});
