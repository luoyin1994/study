/**
 * Created by Administrator on 2016/9/20.
 */
function showPic(whichPic) {
    var source = whichPic.getAttribute('href');
    var text = whichPic.getAttribute('title');
    var placeholder = document.getElementById('placeholder');
    var description = document.getElementById('description');
    placeholder.setAttribute('src', source);
    // description.firstChild.nodeValue = text;
    description.innerHTML = text;

}

function skin(css_name) {
    var stylecss = document.getElementById('css');
    stylecss.setAttribute('href',css_name);
}

// function countBodyChildren() {
//     var body_element=document.getElementsByTagName('body')[0];
//     alert(body_element.nodeType);
// }

window.onload= countBodyChildren;
// var text = whichPic.getAttribute('title');

// function carousel() {
//     function changeImg_auto() {
//         var timer = null;
//         var index = 0;
//         if (timer) {
//             clearInterval(timer);
//         }
//
//
//         // if (index != sources.length) {
//         timer = setInterval(function () {
//             // clearInterval(timer);
//             if (index >= sources.length) {
//                 index = 0;
//
//             } else {
//
//                 placeholder.setAttribute('src', sources[index]);
//
//
//                 index++;
//                 timer = null;
//             }
//         }, 1000);
//         clearInterval(timer);
//
//         // } else {
//         //     index = 0;
//         // }
//     }
//
//     var lis = document.getElementById('ul1').getElementsByTagName('li');
//     // console.log(lis);
//     var sources = [];
//     for (var i = 0; i < lis.length; i++) {
//         sources[i] = lis[i].getElementsByTagName('a')[0].getAttribute('href');
//
//     }
//     // var timer = null;
//     // if (timer) {
//     //     clearInterval(timer);
//     //     timer = timerInterval();
//     //     timer = null;
//     // }
//     var placeholder = document.getElementById('placeholder');
//     changeImg_auto();
// }
