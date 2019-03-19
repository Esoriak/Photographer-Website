const modals = [
	{ buttonId: "#button1", modalId: '#projet1', src: 'images/animals-basket.jpg', text: 'test texte 1', titleOne: 'Douceur Animale', titleTwo: 'Project Description', titleThree: 'Project Tips/Details', liste: '' },
	{ buttonId: "#button2", modalId: '#projet2', src: 'images/eagle-eye.jpg', text: 'test texte 2', titleOne: 'Infinite Loop', titleTwo: 'Project Description', titleThree: 'Project Tips/Details', liste: '' },
	{ buttonId: "#button3", modalId: '#projet3', src: 'images/architecture-building.jpg', text: 'test texte 3', titleOne: 'Inception Varsovienne', titleTwo: 'Project Description', titleThree: 'Project Tips/Details', liste: '' },
	{ buttonId: "#button4", modalId: '#projet4', src: 'images/aerial-beach.jpg', text: 'test texte 4', titleOne: 'Marseille, a la bien cousing !', titleTwo: 'Project Description', titleThree: 'Project Tips/Details', liste: '' },
];

modals.forEach(modalObject => {
	document.querySelector(modalObject.buttonId).addEventListener('click', _ => { ajaxSuccess(modalObject) });
});

function ajaxSuccess(modalObject) {
	const modal = $(modalObject.modalId);
	console.log(modal);

	modal.find('.title-test-one').html(modalObject.titleOne);
	modal.find('.title-test-two').html(modalObject.titleTwo);
	modal.find('.title-test-three').html(modalObject.titleThree);
	modal.find('.modals-text-1').html(modalObject.text);
	modal.find('.modal-image-1').attr('src', modalObject.src);
}