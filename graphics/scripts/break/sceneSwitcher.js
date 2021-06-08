// Scene switching
activeBreakScene.on('change', (newValue, oldValue) => {
	var bgMarginLeft, scenesLeft;
	var animDuration = 1;

	if (oldValue === 'maps' && newValue === 'teams' || oldValue === 'teams' && newValue === 'stages') {
		animDuration = 1.5;
	}

	switch(newValue) {
		case 'main':
			toggleTopBar(0, false);
			bgMarginLeft = -2320;
			scenesLeft = -1920;
			break;
		case 'teams':
			toggleTopBar(0, true);
			showTeamsScene(animDuration);
			break;
		case 'stages':
			toggleTopBar(0, true);
			bgMarginLeft = -200;
			scenesLeft = 0;
	}

	gsap.to('.background', {left: bgMarginLeft, ease: 'power2.inOut', duration: animDuration});
	gsap.to('.breakScenes', {left: scenesLeft, ease: 'power2.inOut', duration: animDuration});
});

function showTeamsScene(animDuration) {
	let teamAPlayers = document.querySelectorAll('.nextTeamAPlayer');
	let teamBPlayers = document.querySelectorAll('.nextTeamBPlayer');

	for (let i = 0; i < teamAPlayers.length; i++) {
		element = teamAPlayers[i];

		element.style.opacity = '0';
		gsap.to(element, {opacity: 1, duration: 0.25, delay: (i * 0.05) + (animDuration * 0.9)});
	};

	for (let j = 0; j < teamBPlayers.length; j++) {
		element = teamBPlayers[j];

		element.style.opacity = '0';
		gsap.to(element, {opacity: 1, duration: 0.25, delay: (j * 0.05) + (animDuration * 0.9)});
	};

	var bgMarginLeft = -4440;
	var scenesLeft = -3840;

	gsap.to('.background', {left: bgMarginLeft, ease: 'power2.inOut', duration: animDuration});
	gsap.to('.breakScenes', {left: scenesLeft, ease: 'power2.inOut', duration: animDuration});
};
