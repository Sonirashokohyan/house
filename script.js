

let clickCount = 2;

function handleClick() {
    clickCount++;
    if (clickCount % 2 === 0) {
        let door = clickCount / 2; // declare door variable
        let elm = document.getElementById("left-door");
        let elm2 = document.getElementById("right-door");
        if (door % 2 === 0) {
            elm.classList.add("left-click");
            elm2.classList.add("right-click");
        } else {
            elm.classList.remove("left-click");
            elm2.classList.remove("right-click");
        }
    }
    // let topContainer = document.getElementById('topContainer');
    let mainn = document.getElementById('main'); 
    setTimeout(() => {
        document.body.classList.add('zoomIn');
        // topContainer.classList.add('wrapper-zoom');
        mainn.classList.add('zoomIn');
        setTimeout(() => {
            window.location.href = 'secondPage.html';
        }, 2000)
        document.body.style.cssText='filter:blur(20px);overflow:hidden;';
    }, 500)
}


function changeBackground() {
    let src = document.getElementById('main');
    let btn = document.getElementById('btn');
    if (src) {
        src.classList.toggle('main');
    } 
    if (btn) {
        btn.classList.toggle('btn');
    } 
}