function copyToClipboard(text) {
	try {
		let e = document.createElement('textarea');
		e.value = text;
		document.body.appendChild(e);
		e.select();
		document.execCommand('copy');
		document.body.removeChild(e);

		return true
	} catch (e) {
		return false;
	}
}

function isValidJson(jsonString) {
	try {
		return JSON.parse(jsonString);
	} catch (e) {
		throw 'not a valid json string'
	}
}

export {
	copyToClipboard,
	isValidJson
}