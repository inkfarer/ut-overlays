// Informative texts on main scene

function measureText(text, fontFamily, fontSize, maxWidth, useInnerHTML = false) {
	const measurer = document.createElement('div');
	measurer.classList.add('measurer');
	if (useInnerHTML) {
		measurer.innerHTML = text;
	} else {
		measurer.innerText = text;
	}
	measurer.style.fontFamily = fontFamily;
	measurer.style.fontSize = fontSize;

	document.body.appendChild(measurer);
	let width = measurer.getBoundingClientRect().width;
	measurer.parentNode.removeChild(measurer);
	if (width > maxWidth) { return maxWidth; }
	else { return width; }
}

const breakMainTextProps = {
	fontFamily: '"Roboto Condensed", "Kosugi Maru"',
	fontSize: '45px',
	maxWidth: 650
}

function setMainSceneText(text, elem, useInnerHTML = false) {
	let textWidth = measureText(text, breakMainTextProps.fontFamily, breakMainTextProps.fontSize, breakMainTextProps.maxWidth, useInnerHTML) + 20;

	let textElem = elem.querySelector('fitted-text');
	let bgElem = elem.querySelector('div.mainInfoBG');

	if (textElem.getAttribute('text') === text) return;

	let textTL = gsap.timeline();

	textTL.to(textElem, {duration: 0.5, opacity: 0, onComplete: function() {
		textElem.setAttribute('text', text);
	}});
	textTL.to([bgElem, elem], {duration: 0.5, width: textWidth, ease: 'power2.inOut'});
	textTL.to(textElem, {duration: 0.5, opacity: 1});
}

mainFlavorText.on('change', newValue => {
	setMainSceneText(newValue, document.querySelector('#mainFlavorText'));
	setTopBarText(newValue, document.querySelector('#breakTopLeftInfo'));
});

casters.on('change', newValue => {

	let finalElem = ''
	// Form new casters line from objects
	Object.keys(newValue).forEach((item, index, arr) => {
		const element = newValue[item];  // Get caster from object
		if (index > 0 && index < (arr.length-1)){ finalElem += ` , ` }
		else if(index > 0){ finalElem += ` & ` }
		finalElem += `${element.name}<span class="pronoun">${element.pronouns}</span>`
	});

	setMainSceneText(finalElem, document.querySelector('#mainCasters'), true);
});
