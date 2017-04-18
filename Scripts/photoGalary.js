'use strict';

$(document).ready(function () {
    $("#my_nanogallery2").nanogallery2({
        colorScheme: 'light',
        thumbnailWidth: '300 XS250 SM300 LA350 XL400',
        thumbnailHeight: '300 XS250 SM300 LA350 XL400',
        thumbnailStacksRotateZ: 0.4,
        thumbnailDisplayInterval: 30,
        thumbnailHoverEffect2: 'imageScaleIn80|image_brightness_1_.5|labelAppear75',

        thumbnailLabel: { position: 'overImageOnBottom', hideIcons: true, titleMultiLine: true }
    });


    //navigation collapse after clicked
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
});