function animate(){
	requestAnimationFrame( animate );
  let array = Array.from(document.querySelectorAll('button')).filter(element => element.className.match(/\bScCoreButtonSuccess/));
	if(array.length != 0) setTimeout(()=>{array.forEach(element => element.click());}, 1000);
}
animate();
