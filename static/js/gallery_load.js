console.log("gallery_load.js loading...");
document.addEventListener('DOMContentLoaded', function() {
    var galleryHTML = `
        
        <a href="/photos/chestofdrawers.jpg" target="_blank"><img src="/photos/chestofdrawers.jpg"></a>
        <a href="/photos/chestofdrawers0.jpg" target="_blank"><img src="/photos/chestofdrawers0.jpg"></a>
        <a href="/photos/chestofdrawers3.jpg" target="_blank"><img src="/photos/chestofdrawers3.jpg"></a>
        <a href="/photos/chestofdrawers2.jpg" target="_blank"><img src="/photos/chestofdrawers2.jpg"></a>
        <a href="/photos/chestofdrawers1.jpg" target="_blank"><img src="/photos/chestofdrawers1.jpg"></a>

        <a href="/photos/barstools0.jpg" target="_blank"><img src="/photos/barstools0.jpg"></a>
        <a href="/photos/barstools1.jpg" target="_blank"><img src="/photos/barstools1.jpg"></a>
        <a href="/photos/barstools2.jpg" target="_blank"><img src="/photos/barstools2.jpg"></a>

        <a href="/photos/drink_cabinet0.jpg" target="_blank"><img src="/photos/drink_cabinet0.jpg"></a>
        <a href="/photos/drink_cabinet4.jpg" target="_blank"><img src="/photos/drink_cabinet4.jpg"></a>
        <a href="/photos/drink_cabinet2.jpg" target="_blank"><img src="/photos/drink_cabinet2.jpg"></a>
        <a href="/photos/drink_cabinet3.jpg" target="_blank"><img src="/photos/drink_cabinet3.jpg"></a>
        <a href="/photos/drink_cabinet1.jpg" target="_blank"><img src="/photos/drink_cabinet1.jpg"></a>
        <a href="/photos/drink_cabinet_corner.jpg" target="_blank"><img src="/photos/drink_cabinet_corner.jpg"></a>

        <a href="/photos/desk2.jpg" target="_blank"><img src="/photos/desk2.jpg"></a>
        <a href="/photos/desk.jpg" target="_blank"><img src="/photos/desk.jpg"></a>
        <a href="/photos/desk1.jpg" target="_blank"><img src="/photos/desk1.jpg"></a>

        <a href="/photos/windsor0.jpg" target="_blank"><img src="/photos/windsor0.jpg"></a>
        <a href="/photos/windsor1.jpg" target="_blank"><img src="/photos/windsor1.jpg"></a>
        <a href="/photos/windsor2.jpg" target="_blank"><img src="/photos/windsor2.jpg"></a>
        <a href="/photos/windsor3.jpg" target="_blank"><img src="/photos/windsor3.jpg"></a>
        <a href="/photos/windsor4.jpg" target="_blank"><img src="/photos/windsor4.jpg"></a>

        <a href="/photos/bookcases0.jpg" target="_blank"><img src="/photos/bookcases0.jpg"></a>
        <a href="/photos/bookcases1.jpg" target="_blank"><img src="/photos/bookcases1.jpg"></a>

        <a href="/photos/curly_maple_wall_cabinet.jpg" target="_blank"><img src="/photos/curly_maple_wall_cabinet.jpg"></a>

        <a href="/photos/drawer_jewelry_box.jpg" target="_blank"><img src="/photos/drawer_jewelry_box.jpg"></a>
        <a href="/photos/drawer_jewelry_box1.jpg" target="_blank"><img src="/photos/drawer_jewelry_box1.jpg"></a>

        <a href="/photos/ent_center.jpg" target="_blank"><img src="/photos/ent_center.jpg"></a>
        <a href="/photos/ent_center_front_shot_door_openxcf.png" target="_blank"><img src="/photos/ent_center_front_shot_door_openxcf.png"></a>
        <a href="/photos/ent_center_side_shot_drawers.png" target="_blank"><img src="/photos/ent_center_side_shot_drawers.png"></a>
        <a href="/photos/ent_center_left_angle_shot.png" target="_blank"><img src="/photos/ent_center_left_angle_shot.png"></a>
        <a href="/photos/ent_center_corner_dovetails.png" target="_blank"><img src="/photos/ent_center_corner_dovetails.png"></a>
        <a href="/photos/ent_center_top_shot.png" target="_blank"><img src="/photos/ent_center_top_shot.png"></a>

        <a href="/photos/nightstand.jpg" target="_blank"><img src="/photos/nightstand.jpg"></a>
        <a href="/photos/big_dresser.jpg" target="_blank"><img src="/photos/big_dresser.jpg"></a>

        <a href="/photos/fun_side_table1.jpg" target="_blank"><img src="/photos/fun_side_table1.jpg"></a>
        <a href="/photos/fun_side_table.jpg" target="_blank"><img src="/photos/fun_side_table.jpg"></a>

        <a href="/photos/inlaid_2_drawer0.jpg" target="_blank"><img src="/photos/inlaid_2_drawer0.jpg"></a>
        <a href="/photos/inlaid_2_drawer.jpg" target="_blank"><img src="/photos/inlaid_2_drawer.jpg"></a>

        <a href="/photos/jewelry_box0.jpg" target="_blank"><img src="/photos/jewelry_box0.jpg"></a>
        <a href="/photos/jewelry_box1.jpg" target="_blank"><img src="/photos/jewelry_box1.jpg"></a>
        <a href="/photos/jewelry_box2.jpg" target="_blank"><img src="/photos/jewelry_box2.jpg"></a>
        <a href="/photos/jewelry_box3.jpg" target="_blank"><img src="/photos/jewelry_box3.jpg"></a>
        <a href="/photos/jewelry_box.jpg" target="_blank"><img src="/photos/jewelry_box.jpg"></a>

        <a href="/photos/linen_cabinet.jpg" target="_blank"><img src="/photos/linen_cabinet.jpg"></a>
        <a href="/photos/market_booth.jpg" target="_blank"><img src="/photos/market_booth.jpg"></a>
        <a href="/photos/toy_box.jpg" target="_blank"><img src="/photos/toy_box.JPG"></a>
    `;

    var galleries = document.querySelectorAll('.gallery-grid');
    galleries.forEach(function(gallery) {
        gallery.innerHTML = galleryHTML;
    });
});
console.log("gallery_load.js loaded");
