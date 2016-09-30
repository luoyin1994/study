/**
 * Created by Administrator on 2016/9/6.
 */
$(document).ready(function () {
    //滚动条发生滚动时
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var menu = $('#menu');
        var items = $('#content').find('.item');
        // var items = $('#contetn .item');
        // var items = $('.item');
        // jQuery通过id筛选永远比class筛选来的高
        // 所以用第一种
        var currentId = '';//当前所在的楼层（item）#id
        items.each(function () {
            var m = $(this);
            var itemTop = m.offset().top;
            if (top > itemTop - 200) {//注意top > itemTop - 200,会提前让导航自动.current
                                      // 200的值设置的太小会导致向上滚动时感觉页面还在当前层而导航已近变成了上一层
                                      // 比如页面在5层时导航变为4层
                currentId = '#' + m.attr('id');
                // console.log(currentId)
            } else {
                return false;
            }
        });
        //给相应楼层的a 设置 current, 取消其他链接的current
        var currentLink = menu.find('.current');
        if (currentId && currentLink.attr('href') != currentId) {
            currentLink.removeClass('current');
            // console.log(menu.find('[href="#item1"]'))
            menu.find("[href='" + currentId + "']").addClass('current');
        //    注意"[href='#']"的书写
        }
    });
});
