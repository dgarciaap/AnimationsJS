//initialize full page js

//ID from our index.html
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        //We get the section (the one we just arrived) and add an animation
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.5 });
        //5ns, opacity going from 0 to 1
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

        //CHAIR ANIMATION
        //Index === 1 bc we have 3 different sections
        if(destination.index === 1) {
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');

            tl.fromTo(chairs, 0.7, { x: '100%' }, { x: '-35%' })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
            .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
            .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
        }
    }
});