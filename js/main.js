/*  Show/Hidden menu mobile */
function show_menu_mobile(){
	let header_navbar = document.querySelector(".header-navbar");
	let body = document.getElementById('main-body');
	if(header_navbar.classList.contains('active')){
		header_navbar.classList.remove('active');
		body.classList.remove('blocked');
	}else{
		header_navbar.classList.add('active');
		body.classList.add('blocked');
	}
}