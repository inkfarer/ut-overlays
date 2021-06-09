// Minor: background Animation
// generate background elements

for (let i = 1; i <= 6; i++) {
	const bgTile = document.createElement('div');
	bgTile.classList.add('bgTextContainer');

	var tileTextValue, textLineClass, reverseTextLineClass;

	if (i % 2 === 1) {
		bgTile.classList.add('blueBgText');
		tileTextValue = 'UNNAMED ';
		textLineClass = 'textAnimUnnamed';
		reverseTextLineClass = 'reverseTextAnimUnnamed';
	} else {
		bgTile.classList.add('greenBgText');
		tileTextValue = 'TOURNAMENT ';
		textLineClass = 'textAnimTournament';
		reverseTextLineClass = 'reverseTextAnimTournament';
	}

	for (let j = 1; j <= 8; j++) {
		const textLine = document.createElement('p');
		textLine.innerText = tileTextValue.repeat(5);
		if (j % 2 === 1) {
			textLine.classList.add(textLineClass);
		} else {
			textLine.classList.add(reverseTextLineClass);
		}
		bgTile.appendChild(textLine);
	}

	document.querySelector('.background').appendChild(bgTile);
}

// animate

let bgTextAnimTL = gsap.timeline({repeat: -1});

const bgTextAnimDuration = 30;

bgTextAnimTL.to('.textAnimUnnamed', {marginLeft: -300, ease: 'none', duration: bgTextAnimDuration}, 'woo');
bgTextAnimTL.to('.reverseTextAnimUnnamed', {marginLeft: -700, ease: 'none', duration: bgTextAnimDuration}, 'woo');

bgTextAnimTL.to('.textAnimTournament', {marginLeft: -960, ease: 'none', duration: bgTextAnimDuration}, 'woo');
bgTextAnimTL.to('.reverseTextAnimTournament', {marginLeft: -40, ease: 'none', duration: bgTextAnimDuration}, 'woo');
