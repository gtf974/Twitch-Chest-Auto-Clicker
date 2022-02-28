(function autoClick(){
  let array = Array.from(document.querySelectorAll('button')).filter(element => element.className.match(/\bScCoreButtonSuccess/));
  console.log("lol")
	if(array.length != 0) setTimeout(()=>{array.forEach(element => element.click());}, 1000);
  setTimeout(()=>{requestAnimationFrame( autoClick )}, 1000);
})()
