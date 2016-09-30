/**
 * Created by Administrator on 2016/9/22.
 */
function show(event, showNodesId, eventNodeId) {
    var eventNode = document.getElementById(eventNodeId);
    var len = showNodesId.length;
    var showNodes = [];
    var disp = 0;
    for (var i = 0; i < len; i++) {
        showNodes[i] = document.getElementById(showNodesId[i]);
    }
    eventNode[event] = function () {
        for (var i = 0; i < len; i++) {
            disp = showNodes[i].style.display;
            if (disp == 'block') {
                showNodes[i].style.display = 'none';
            } else {
                showNodes[i].style.display = 'block';
            }
        }
    }
}
window.onload = function () {
    var showNodesId = ['header-nav', 'footer-nav'];
    show('onclick', showNodesId, 'content');
};
