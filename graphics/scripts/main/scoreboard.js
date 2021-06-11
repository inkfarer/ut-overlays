teamScores.on('change', newValue => {
	document.getElementById('team-a-score').setAttribute('text', newValue.teamA);
	document.getElementById('team-b-score').setAttribute('text', newValue.teamB);
});

scoreboardData.on('change', (newValue, oldValue) => {
	if (!oldValue) {
		textOpacitySwap(newValue.teamAInfo.name, document.getElementById('team-a-name'));
		textOpacitySwap(newValue.teamBInfo.name, document.getElementById('team-b-name'));
		textOpacitySwap(newValue.flavorText, document.getElementById('scoreboard-flavor-text'));
	} else {
		if (newValue.teamAInfo.name !== oldValue.teamAInfo.name) {
			textOpacitySwap(newValue.teamAInfo.name, document.getElementById('team-a-name'));
		}

		if (newValue.teamBInfo.name !== oldValue.teamBInfo.name) {
			textOpacitySwap(newValue.teamBInfo.name, document.getElementById('team-b-name'));
		}

		if (newValue.flavorText !== oldValue.flavorText) {
			textOpacitySwap(newValue.flavorText, document.getElementById('scoreboard-flavor-text'));
		}
	}

	gsap.to('#team-a-color', {
		backgroundColor: newValue.swapColorOrder ? newValue.colorInfo.clrB : newValue.colorInfo.clrA,
		duration: 0.35
	});

	gsap.to('#team-b-color', {
		backgroundColor: newValue.swapColorOrder ? newValue.colorInfo.clrA : newValue.colorInfo.clrB,
		duration: 0.35
	});
});

function textOpacitySwap(newText, elem) {
	gsap.to(elem, {
		opacity: 0, duration: 0.35, onComplete: () => {
			elem.setAttribute('text', newText);
		}
	});

	gsap.to(elem, {opacity: 1, duration: 0.35, delay: 0.35});
}

scoreboardShown.on('change', newValue => {
	var sbTop, flavorBottom, ease;
	if (newValue) {
		sbTop = 40;
		flavorBottom = 10;
		ease = 'power2.out';
	} else {
		sbTop = -135;
		flavorBottom = -50;
		ease = 'power2.in';
	}
	gsap.to('.flavorTextWrapper', {bottom: flavorBottom, ease: ease});
	gsap.to('.scWrapper', {top: sbTop, ease: ease});
});
