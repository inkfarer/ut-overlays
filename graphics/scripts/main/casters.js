const castersElem = document.querySelector('div.casters-wrapper > .background > .casters-content > .casters');
const castersShowTl = gsap.timeline();

casters.on('change', newValue => {
    let elemHtml = '';
    const castersHeight = 50 + Object.keys(newValue).length * 40;
    gsap.set('div.casters-wrapper > .background', {height: castersHeight});

    Object.keys(newValue).forEach((item, index, arr) => {
        const element = newValue[item];

        elemHtml += `
		<div class="caster">
			<div class="caster-name">
				<fitted-text text="${element.name} <span class=&quot;pronoun&quot;>${element.pronouns}</span>" useInnerHTML max-width="315"></fitted-text>
			</div>
			<div class="caster-twitter">
				<fitted-text text="${element.twitter} <span class=&quot;pronoun&quot;>${element.pronouns}</span>" useInnerHTML max-width="315"></fitted-text>
			</div>
		</div>`
    });

    castersElem.innerHTML = elemHtml;
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.set('div.casters-wrapper', {opacity: 0, top: 207});
});

nodecg.listenFor('mainShowCasters', DASHBOARD_BUNDLE_NAME, () => {
    const duration = 20;
    gsap.set('.caster > .caster-twitter', {opacity: 0});
    gsap.set('.caster > .caster-name', {opacity: 1});

    castersShowTl.add(gsap.to('.casters-wrapper', {opacity: 1, top: 227, duration: 0.5, ease: Power2.easeOut, force3D: false}));
    castersShowTl.add(gsap.to({}, {duration: duration}))
        .add(gsap.to('.caster > .caster-twitter', {opacity: 1, duration: 0.35}), `-=${duration / 2}`)
        .add(gsap.to('.caster > .caster-name', {opacity: 0, duration: 0.35}), `-=${duration / 2}`)
    castersShowTl.add(gsap.to('.casters-wrapper', {opacity: 0, top: 247, duration: 0.5, ease: Power2.easeIn, force3D: false}));
    castersShowTl.add(gsap.set('div.casters-wrapper', {top: 207}));
});
