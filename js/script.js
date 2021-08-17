const defaultSelect = () => {
	const element = document.querySelector('.contacts__select');
	const choices = new Choices(element, {
		searchEnabled: false,
	});

};

defaultSelect();


//  Скрываем показываем поле поиска
let searchButton = document.querySelector('.search-form__icon');
searchButton.addEventListener("click", function (e) {
	let searchInput = document.querySelector('.search-form__item');
	searchInput.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest(".search-form")) {
		let searchInput = document.querySelector(".search-form__item");
		searchInput.classList.remove("_active");
	}
});