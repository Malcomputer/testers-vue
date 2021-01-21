window.onscroll = () => 100 > window.pageYOffset ? document.getElementById("navbar").style.backgroundColor = "#333" : document.getElementById("navbar").style.backgroundColor = "#FF0000";
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
	console.log(`${key}:${value}`);
}