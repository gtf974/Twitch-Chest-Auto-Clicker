(function autoClick(){
    let array = Array.from(document.querySelectorAll('button')).filter(element => element.className.match(/\bScCoreButtonSuccess/));
    if(array.length != 0){
        array.forEach(element => element.click());
        console.log("[Twitch Chest Auto Clicker] Loot collected!");
    }
    setTimeout(()=>{requestAnimationFrame( autoClick )}, 1000);
})()
