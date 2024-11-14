$(function () {


    const tl = gsap.timeline();

    tl
        .from('.intro .piano', { y: -1000, opacity: 0, delay: 0 })
        .from('.intro h2', { x: -1000, opacity: 0, delay: 1 })
        .from('.intro p', { x: 1000, opacity: 0 })
        .from('.intro .star', { y: 200, opacity: 0, rotate: 720 })


    $('#portfolio').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'pf05', 'profile'],
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (nidx == 1) {
                tl.restart();
            }
        }
    });

    // $('#header .gnb li a').on('click', function () {
    //     $(this).parent().addClass('on').siblings().removeClass('on')
    // });


    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });

    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');

        $('.hamburger').removeClass('is-active')
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });



    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
    })

});


$(function () {
    AOS.init(({
        delay: 200,
    }));
});