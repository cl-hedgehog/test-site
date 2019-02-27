const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for (let i = 1; i <= 6; i++) {
	const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/bili0'+i+'.jpeg');
    thumbBar.appendChild(newImage);
    newImage.onclick = e => {
    	const imgSrc = e.target.getAttribute('src');
    	displayedImg.setAttribute('src', imgSrc);
    }
}


var changeDark = function(){
	var btnAttr = btn.getAttribute('class');
	if('dark' === btnAttr){
		btn.setAttribute('class','light');
		btn.textContent = '变亮';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}else if('light' === btnAttr){
        btn.setAttribute('class','dark');
        btn.textContent='变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}

}
btn.onclick=changeDark