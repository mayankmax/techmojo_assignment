gsap.registerPlugin(ScrollTrigger, Flip);

let wheel = document.querySelector(".wheel"),
	images = gsap.utils.toArray(".wheel__card"),
	cards = gsap.utils.toArray(".wheel__card"),
	header = document.querySelector(".header"),
	currentCard; // keep track of last clicked card so we can put it back

gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

function setup() {
	let radius = wheel.offsetWidth / 2,
		center = radius,
		slice = 360 / images.length,
		DEG2RAD = Math.PI / 270;
	gsap.set(images, {
		x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
		y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
		rotation: (i) => i * slice,
		xPercent: -50,
		yPercent: -50
	});
}

setup();

window.addEventListener("resize", setup);

// Remove the rotation property from the gsap.to() animation.
gsap.to(wheel, {
	duration: images.length
});

// Pass the wheel element to the Draggable.create() function.
Draggable.create(wheel, {
	type: "rotation"
});

cards.forEach((card) => card.addEventListener("click", onClickCard));

header.addEventListener("click", closeCurrentCard);

function closeCurrentCard() {
	if (currentCard) {
		let img = header.querySelector("img"),
			state = Flip.getState(img);
		currentCard.appendChild(img);
		Flip.from(state, {
			ease: "power1.inOut",
			scale: true
		});
		currentCard = null;
	}
}

function onClickCard(e) {
	let card = e.target,
		image = card.querySelector("img");
	if (card !== currentCard) {
		closeCurrentCard();
		currentCard = card;
		let state = Flip.getState(image);
		header.appendChild(image);
		Flip.from(state, {
			duration: 0.6,
			scale: true,
			ease: "power1.inOut"
		});
	} else {
		closeCurrentCard();
	}
}
