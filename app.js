let list, txt;

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
    list = document.getElementById('glume');
    txt = document.getElementById('txtNumar');
    document.getElementById('btnGetList').addEventListener('click', onGetList);
    document.getElementById('btnGetRandom').addEventListener('click', onGetRandom);
}

async function onGetRandom(e) {
    let res = await fetch('https://api.chucknorris.io/jokes/random');
    let json = await res.json();
    let li = creeazaGluma(json);
    list.innerHTML = '';
    list.appendChild(li);
}

async function onGetList(e) {
    let cnt = parseInt(txt.value);
    let arr = [];

    if (cnt > 10)
        cnt = 10;
    if (cnt < 1)
        cnt = 1;

    for (let i = 0; i < cnt; i++) {
        let p = fetch('https://api.chucknorris.io/jokes/random');
        arr.push(p);
    }

    let res = await Promise.all(arr);
    list.innerHTML = '';

    for (let i = 0; i < cnt; i++) {
        let data = await res[i].json();
        list.appendChild(creeazaGluma(data));
    }
}

function creeazaGluma(data) {
    let res = document.createElement('li');
    res.innerHTML = data.value;
    return res;
}