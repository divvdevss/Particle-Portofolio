particlesJS("background", {

    particles: {
        
        number:{
            value: 15, //Number of Particles (count)
            density: {
                enable: true,
                value_area: 800 // Area where particles will be distributed
            },
        },

        color: {
            value: "#ffffff", // Particles color 
        },
        shape: {
            type: "triangle", //Shape Type
        },
        opacity: {
            value : 0.8,
            random: true,
            anum :{
                enable : true,
                speed : 1, 
                opacity_min : 0.1,
                sync : false
            },           
        },
        size: {
            value: 5, //Base Size
            random: true,
            anim: {
                enable: true, 
                speed: 4, 
                size_min: 0.3,
                sync: false
            },
        },

        line_linked: {
            enable: true,
            distance: 150, // Maximum distance
            color: "#ffffff",
            opacity: 0.4,
            width: 2.5, 
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",

            bounce: false,
        },

    },

    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, 

                mode: "repulse",
            },
            oneclick: {
                enable: true, 
                mode: "push",
            },
            resize: true,
    
    },

    retina_detect: true, 

}, 
})