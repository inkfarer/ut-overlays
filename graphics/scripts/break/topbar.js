// top bar

const topBarTL = gsap.timeline();

function setTopBarTextLoop() {
	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			let finalElem = ''
			// Form new casters line from objects
			Object.keys(casters.value).forEach((item, index, arr) => {
				const element = casters.value[item];  // Get caster from object
				if (index > 0 && index < (arr.length-1)){ finalElem += ` , ` }
				else if(index > 0){ finalElem += ` & ` }
				finalElem += `${element.twitter}<span class="pronoun">${element.pronouns}</span>`
			});
			setTopBarText(finalElem, document.querySelector('#breakTopRightInfo'), 'img/microphone.svg', false, true);
		} else if (i === 1) {
			var songName;

			if (nowPlayingSource.value === "manual"){
				songName = getSongNameString(manualNowPlaying.value);
			}else{
				songName = getSongNameString(nowPlaying.value)
			}

			setTopBarText(songName, document.querySelector('#breakTopRightInfo'), 'img/music.svg', true, true);
		}
	}
}

function setTopBarText(text, elem, icon, repeat, useInnerHTML = false) {
	let textWidth = measureText(text, breakMainTextProps.fontFamily, breakMainTextProps.fontSize, 800, useInnerHTML) + 20;

	let textElem = elem.querySelector('fitted-text');
	let bgElem = elem.querySelector('div.mainInfoBG');
	let iconElem = elem.querySelector('div.mainInfoIcon img');

	topBarTL.add(gsap.to([textElem, iconElem], {duration: 0.5, opacity: 0, onComplete: function() {
			textElem.setAttribute('text', text);
			iconElem.src = icon;
		}}, 'hide'))
		.add(gsap.to([bgElem, elem], {duration: 0.5, width: textWidth, ease: 'power2.inOut'}))
		.add(gsap.to([textElem, iconElem], {duration: 0.5, opacity: 1}, 'show'))
		.add(gsap.to({}, 10, {}));
	if (repeat) {
		topBarTL.to({}, {duration: 0.01, onComplete: function() {
				setTopBarTextLoop();
			}});
	}
}

NodeCG.waitForReplicants(nowPlaying, manualNowPlaying, nowPlayingSource).then(() => {
	setTopBarTextLoop();
});

function toggleTopBar(delay, shown) {
	var styleTop;

	if (shown) { styleTop = 15; }
	else { styleTop = -100; }

	gsap.to('.breakTopBar', {top: styleTop, duration: 0.5, ease: 'power2.inOut', delay: delay});
}
