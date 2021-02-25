window.addEventListener('DOMContentLoaded', function() {
	// added favorites product
	let product_list = document.querySelector('.product_list'),
		addFavoriteBtn = document.querySelectorAll('.add-favorites-btn');
		console.log(addFavoriteBtn);
		for (let i = 0; i < addFavoriteBtn.length; i++) {
 
	    addFavoriteBtn[i].addEventListener('click', () => {
	       addFavoriteBtn[i].classList.toggle('active') 
	    });
	} 
})
