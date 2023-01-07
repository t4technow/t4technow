window.onscroll = () => {
	scrollNavbar();
};

scrollNavbar = () => {
	// Target elements
	const navBar = document.getElementById("navBar");
	const links = document.querySelectorAll(".nav-link");

	if (document.documentElement.scrollTop > 25) {
		navBar.classList.add("fixed-header");

		// Change the color of links on scroll
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.add("text-accent");
		}
	} else {
		navBar.classList.remove("fixed-header");

		// Change the color of links back to default
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.remove("text-accent");
		}
	}
};

filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("projects_item");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
	}
}

function AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-nav");
var btns = btnContainer.getElementsByClassName("filter-selector");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
