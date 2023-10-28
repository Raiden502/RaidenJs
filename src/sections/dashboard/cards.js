export default function Cards() {
	const cardElement = document.createElement('div');
    cardElement.className = 'card';
	cardElement.innerHTML = "<h2>Card</h2><p>This is the pri content.</p>";
	return cardElement;
}
