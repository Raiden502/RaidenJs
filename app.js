document.addEventListener("DOMContentLoaded", function () {
	const ChildComponent = document.getElementById("app");
	const script = document.createElement('script');
    script.src = 'components/dashboard/new.js';
    script.onload = function () {
        const newsElement = news();
        ChildComponent.appendChild(newsElement);
    };
	document.head.appendChild(script);
});