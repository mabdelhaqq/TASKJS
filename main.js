let leftB = document.querySelector('.left-box');
let rightB = document.querySelector('.right-box');
let leftBtn = document.getElementById('m-to-right');
let rightBtn = document.getElementById('m-to-left');

leftBtn.onclick = function() {
    if(leftB.children.length > 0) {
        let spB = leftB.removeChild(leftB.children[0]);
        rightB.appendChild(spB);
    }
    else {
        alert("There are no more boxes to move!");
    }
};


rightBtn.onclick = function() {
    if(rightB.children.length > 0) {
        let spB = rightB.removeChild(rightB.children[0]);
        leftB.appendChild(spB);
    }
    else {
        alert("There are no more boxes to move!");
    }
};