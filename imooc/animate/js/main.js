/**
 * Created by Administrator on 2016/9/12.
 */
var btMove = document.querySelector('.bt-move');
var items = document.querySelectorAll('.grid-a .grid-item');

btMove.onclick = function () {
    var len = items.length;
    for (var i = 0; i < len; i++) {
        items[i].classList.toggle('is-moved');
    }
};