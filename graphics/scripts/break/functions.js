// hiding stuff

function hideMainElem(elem) {
	let elemWidth = elem.getBoundingClientRect().width + 80;
	elem = elem.parentNode;
	elem.style.maxWidth = elemWidth + 'px';
	gsap.to(elem, {opacity: 0, duration: 0.75, ease: 'power2.inOut'});
	gsap.to(elem, {maxWidth: 0, duration: 0.75, ease: 'power2.inOut', delay: 0.6});
}

function showMainElem(elem) {
	// SCARY overcomplicated code that took me HOURS
	// ensures that the animation is always smooth no matter how the element moves
	let elemWidth = elem.getBoundingClientRect().width + 80;
	let proxy = {progress: 0};
	gsap.to(elem.parentNode, {opacity: 1, duration: 0.75, ease: 'power2.inOut', delay: 0.6});
	gsap.to(proxy, {progress: 1, duration: 0.75, ease: 'power2.inOut', onComplete: function() {
			elem.parentNode.style.maxWidth = '1000px';
		}, onUpdate: function() {
			elemWidth = elem.getBoundingClientRect().width + 80;
			elem.parentNode.style.maxWidth = elemWidth * proxy.progress + 'px';
		}});
}
