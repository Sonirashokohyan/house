
// let clickCount = 2;

// function handleClick_1() {
//     clickCount++;
//     if (clickCount % 2 === 0) {
//         let door = clickCount / 2; // declare door variable
//         let elm = document.getElementById("door_1");
//         if (door % 2 === 0) {
//             elm.classList.add("left-click_1");
//         } else {
//             elm.classList.remove("left-click_1");
//         }
//     }
  
// }

// let clickCount_2 = 2;
// function handleClick_2() {
//     clickCount_2++;
//     if (clickCount_2 % 2 === 0) {
//         let door = clickCount_2 / 2; // declare door variable
//         let elm = document.getElementById("door_3");
//         if (door % 2 === 0) {
//             elm.classList.add("left-click_2");
//         } else {
//             elm.classList.remove("left-click_2");
//         }
//     }
  
// }

// let clickCount_3 = 2;
// function handleClick_3() {
//     clickCount_3++;
//     if (clickCount_3 % 2 === 0) {
//         let door = clickCount_3 / 2; // declare door variable
//         let elm = document.getElementById("door_3");
//         if (door % 2 === 0) {
//             elm.classList.add("left-click_3");
//         } else {
//             elm.classList.remove("left-click_3");
//         }
//     }
  
// }

let doorStates = {
    door_1: { clickCount: 0, className: "left-click_1" },
    door_2: { clickCount: 0, className: "left-click_2" },
    door_3: { clickCount: 0, className: "left-click_3" }
};

function handleClick(doorId) {
    let door = doorStates[doorId];
    door.clickCount++;

    if (door.clickCount % 2 === 0) {
        let elm = document.getElementById(doorId);
        if (door.clickCount / 2 % 2 === 0) {
            elm.classList.add(door.className);
        } else {
            elm.classList.remove(door.className);
        }
    }
}

