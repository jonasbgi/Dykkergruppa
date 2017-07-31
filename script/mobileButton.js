function showHide(){
	dropdownDisplayAttr = $("#omDG").css("display");
	console.log(dropdownDisplayAttr);
	if(dropdownDisplayAttr === "block"){
		showOrHideMenu("none");
	}
	else if(dropdownDisplayAttr == "none"){
		showOrHideMenu("block");
	}
}
function showOrHideMenu(display){
	menuItems = document.getElementsByClassName("dropdown");
	for(i = 1; i < menuItems.length; i++){ //i = 1: skip first element
		menuItems[i].style.display = display;
	}
}

function changedWindowSize(){
	console.log("Window changed");
	if($(window).width() > 1200){
		showOrHideMenu("inline-block");
	}
	else if($(window).width() <= 1200){
		showOrHideMenu("none");
	}
}
$( document ).ready(function(){
					$(document).on("click", "#mobileBtn", function(){showHide()});
});

$( window ).resize(function(){ changedWindowSize()});