// teams

nextTeams.on('change', newValue => {
	nextTeamAName.setAttribute('text', newValue.teamAInfo.name);
	nextTeamBName.setAttribute('text', newValue.teamBInfo.name);

	teamAplayersBG.innerHTML = '';
	teamBplayersBG.innerHTML = '';

	newValue.teamAInfo.players.forEach(player => {
		const elem = createNextTeamPlayerElem(player.name, 'right', 'a');
		teamAplayersBG.appendChild(elem);
	});

	newValue.teamBInfo.players.forEach(player => {
		const elem = createNextTeamPlayerElem(player.name, 'left', 'b');
		teamBplayersBG.appendChild(elem);
	});
});

function createNextTeamPlayerElem(name, align, team) {
	const elem = document.createElement('fitted-text');
	elem.setAttribute('text', name);
	elem.setAttribute('max-width', '435');
	elem.setAttribute('align', align);
	if (team === 'a') {
		elem.classList.add('nextTeamAPlayer');
	} else {
		elem.classList.add('nextTeamBPlayer');
	}

	return elem;
}
