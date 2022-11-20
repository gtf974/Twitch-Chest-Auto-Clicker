# Twitch Chest Auto Clicker
## _A simple script to auto click the chest_

This is a simple script to automatically click on the chest when it appears.

## Code

```js
(function autoClick(){
    let array = Array.from(document.querySelectorAll('button')).filter(element => element.className.match(/\bScCoreButtonSuccess/));
    if(array.length != 0){
        array.forEach(element => element.click());
        console.log("[Twitch Chest Auto Clicker] Loot collected!");
    }
    setTimeout(()=>{requestAnimationFrame( autoClick )}, 1000);
})()
```

## How to use it
- **Copy** the content of the _script.js_ file or the code above
- **Go** to your web browser where your Twitch is on
- Hit **F12** or **Ctrl+Shift+I** to open the _web dev tool_
- **Find** the _Console_ tab
- In the _Console_, **paste** the content of the _script.js_ file or the code above
- **Hit** _enter_

*To disable the script, simply **reload** the page*  
