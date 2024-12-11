// // script.js
// let currentIndex = 0;
// const images = document.querySelectorAll('.carousel-images img');
// const span = document.querySelectorAll('.stnlist span');
// const totalImages = images.length;

// function showImage(index) {
//     images.forEach((img, i) => {
//         img.classList.remove('active');
//         if (i === index) {
//             img.classList.add('active');
//         }
//     });
// }

// function nextImage() {
//     currentIndex = (currentIndex + 1) % totalImages;
//     showImage(currentIndex);
// }

// function prevImage() {
//     currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//     showImage(currentIndex);
// }

// // 自动切换
// setInterval(nextImage, 3000); // 每3秒切换一次

// // 手动切换
// document.querySelector('.next').addEventListener('click', nextImage);
// document.querySelector('.prev').addEventListener('click', prevImage);

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var esico = document.getElementById('icolist').getElementsByTagName('li');
var eicolist = document.querySelector('#icolist');
var eimglist = document.querySelector('#imglist');
var left = 0;
var timer;
run();
function run(){
	if (left <= -3000) {
		left = 0;
	}
	var m = Math.floor(-left / 1000);
	imglist.style.marginLeft = left + 'px';
	var n = (left % 1000 == 0) ? n= 1200 : n = 20;
	left = left - 10;
	timer = setTimeout(run,n);
	icochange(m);
}

function imgchange(n){
	let lt = - (n * 1000);
	imglist.style.marginLeft = lt + 'px';
	left = lt;
}

prev.onclick = function(){
	let prevgo = Math.floor(-left / 1000)- 1;
	if (prevgo == -1) {
		prevgo = 2;
	}
	imgchange(prevgo);
}

next.onclick = function(){
	let nextgo = Math.floor(-left / 1000)+ 1;
	if (nextgo == 3) {
		nextgo = 0;
	}
	imgchange(nextgo);
}

function icochange(m){
	for (let index = 0; index < esico.length; index++) {
		esico[index].style.backgroundColor = '';
	}
	if (m < esico.length) {
		esico[m].style.backgroundColor = 'red';
	}
}
eicolist.onclick = function(){
	var tg = event.target;
	let ico = tg.innerHTML - 1;
	imgchange(ico);
	icochange(ico);
}

eimglist.onmouseover = function(){
	clearTimeout(timer);
}
eimglist.onmouseout = function(){
	run();
}