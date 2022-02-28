let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'



let icon = document.querySelector('img');
icon.onclick = function(){
    let src = icon.getAttribute('src');
    if(src === 'images/firefox-1.png') {
        icon.setAttribute('src', 'images/firefox-2.png');
    } else {
        icon.setAttribute('src', 'images/firefox-1.png');
    }
}


function setUsername() {
    let username = prompt('请输入用户名');
    localStorage.setItem('username', username);
    document.querySelector('h1').textContent = 'welcome ' + username;
}


if(!localStorage.getItem('username')) {
    setUsername();
} else {
    let username = localStorage.getItem('username');
    document.querySelector('h1').textContent = 'welcome ' + username;
}