/* Author: Jonas Giske, NTNUI Dykkergruppa */
/* Inputs: display settings for #menuBtn and .dropdown classes. Applies changes */
function showOrHideMenu(menuDisplay, ddDisplay) {
	"use strict";
	$(".dropdownContainer").css("display", ddDisplay);
	$("#menuBtn").css("display", menuDisplay);
}
/* Called by #menuBtn. Toggles .dropdowns visibility */
function showHide() {
	"use strict";
	var dropdownDisplayAttr = $("#omDG").css("display");
	if (dropdownDisplayAttr === "none") {
		showOrHideMenu("block", "block");
	} else if (dropdownDisplayAttr === "block") {
		showOrHideMenu("block", "none");
	}
}

/* Hides or shows #menuBtn and .dropdown based on windowsize */
function changedWindowSize() {
	"use strict";
	if ($(window).width() > 700) {
		showOrHideMenu("none", "inline-block");
	} else if ($(window).width() <= 800) {
		showOrHideMenu("block", "none");
	}
}

/*Attaches event-listener to menu-button. Must wait until docuemt is loaded or may not find menuBtn*/
$(document).ready(function () {
	"use strict";
	$(document).on("click", "#menuBtn", function () {showHide(); });
	changedWindowSize();
});
/*Re-displays menu-bar if screen size increases*/
$(window).resize(function () { changedWindowSize(); });