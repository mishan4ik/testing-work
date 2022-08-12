var btn = document.getElementById('btn').onclick = function() {func()};
var nav = document.getElementById('nav-menu');
var list_menu =document.getElementById('list_menu');

function func(){
		if (nav.style.display == 'block') {

			nav.style.display='none';

		}	
		else{

			nav.style.display='block';
			

		}
		
		//nav.style.display='block';
		//list_menu.style.display="flex";
}
		
