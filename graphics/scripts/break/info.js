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
	let textElem = elem.querySelector('fitted-text');
	const maxWidth = parseInt(textElem.getAttribute('max-width'));

	let textWidth = measureText(text, breakMainTextProps.fontFamily, breakMainTextProps.fontSize, maxWidth, useInnerHTML) + 20;
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
	setMainSceneText(newValue, document.querySelector('#breakTopLeftInfo'));
});
