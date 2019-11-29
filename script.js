//Glavna funkcija u igrici, pokreće se klikom na start button

function start_the_game() {
    background.play();
    document.getElementById('start_screen').style.display = "none";
    the_game = function () {
        if (check_js_icons_hits_floor(js_icon1) || check_js_icons_hits_cart(js_icon1)) {
            set_js_icons_to_initial_position(js_icon1);
        } else {
            js_icons_down(js_icon1);
        }

        if (check_js_icons_hits_floor(js_icon2) || check_js_icons_hits_cart(js_icon2)) {
            set_js_icons_to_initial_position(js_icon2);
        } else {
            js_icons_down(js_icon2);
        }

        if (check_js_icons_hits_floor(js_icon3) || check_js_icons_hits_cart(js_icon3)) {
            set_js_icons_to_initial_position(js_icon3);
        } else {
            js_icons_down(js_icon3);
        }
        if (life > 0) {
            anim_id = requestAnimationFrame(the_game); //Funkcija zaduzena za padanje ikona
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);
}
