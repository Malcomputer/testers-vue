let getJSON = function (url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		let status = xhr.status;
		if (status === 200) {
			callback(null, xhr.response);
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
};

// let linkEls = document.getElementsByTagName('a');
//
// function updateContent(data) {
// 	if (data == null)
// 		return;
// 	let values = data.split('/');
// 	history.pushState(values[2], "", data);
// 	// switch (values[1]) {
// 	// 	case "":
// 	// 		history.pushState(values[2], "", data);
// 	// 		break;
// 	// 	case "playlist":
// 	// 		history.pushState(values[2], "", data);
// 	// 		break;
// 	// 	case "user":
// 	// 		history.pushState(values[2], "", data);
// 	// 		break;
// 	// 	case "artist":
// 	// 		history.pushState(values[2], "", data);
// 	// 		break;
// 	// 	case "collection":
// 	// 		history.pushState(values[2], "", data);
// 	// 		break;
// 	// 	case "search":
// 	// 		history.pushState(values[2], "", data);
// 	// 		break;
// 	// }
// }
//
// function clickHandler(event) {
// 	// updateContent(event.target.getAttribute('href'));
// 	console.log(event.target.getAttribute('href'));
// 	// event.preventDefault();
// 	// event.stopPropagation();
// }
//
// for (let i = 0; i < linkEls.length; i++) {
// 	if (linkEls[i].childElementCount > 0) {
// 		for (let j = 0; j < linkEls[i].children.length; j++) {
// 			linkEls[i].children[j].classList.add('inactiveLink')
// 		}
// 	}
// 	linkEls[i].addEventListener('click', clickHandler, false);
// }