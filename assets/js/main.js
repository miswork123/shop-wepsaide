
let menuItem = document.querySelector(".busgues");
let MenuMobile = document.querySelector(".gop-lai");

menuItem.addEventListener('click', function(){
    this.classList.toggle("active");
    MenuMobile.classList.toggle("show");
});




const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const makeUp = $$('.item-new')
const bests = $$('.new-slider')

makeUp.forEach((tab, index) => {
	const best = bests[index]

	tab.onclick = function (e) {
        e.preventDefault();

		$('.item-new.active').classList.remove('active')
		$('.new-slider.show').classList.remove('show')

		this.classList.add('active')
		best.classList.add('show')
	}
});