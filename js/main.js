var menuItem = document.getElementById('menuItem');
var menuItemOther = document.getElementById('menuItemOther');
var menuClickCheck = false;

function MenuClick(){
	if (menuClickCheck == false) {
		menuItemOther.style.display = "block";
		menuClickCheck = true;
	}
	else{
		menuItemOther.style.display = "none";
		menuClickCheck = false;
	}
}

menuItem.onclick = function(){
	MenuClick();
}