//Funkcija koja kad god se pomjeri cart, postavlja X poziciju miša za poziciju eventa "e"
$(document).on('mousemove', function (e) {
    cart.css('left', e.pageX);
});


//Funkcija koja spušta prvu ikonu do kraja containera
function js_icons_down(js_icons) {
    js_icons_current_position = parseInt(js_icons.css('top'));
    js_icons.css('top', js_icons_current_position + speed);
}

//Funkcija koja putem collision_detection funkcije provjerava da li ikona udara u pod
function check_js_icons_hits_floor(js_icons) {
    if (collision(js_icons, floor)) {
        show_fail_icon(js_icons);
        decrement_life();
        return true;
    }
    return false;
}

//Funkcija koja postavlja ikonu na njenu inicijalnu poziciju
function set_js_icons_to_initial_position(js_icons) {
    js_icons.css('top', js_icons_initial_position);
}

//Funkcija koja prikazuje fail ikonu
function show_fail_icon(js_icons) {
    fail_num = js_icons.attr('data-fail');
    $('#fail' + fail_num).show();
    hide_fail_icon(fail_num);
}

//Funkcija koja skriva fail ikonu
function hide_fail_icon(fail_num) {
    setTimeout(function () {
        $('#fail' + fail_num).hide();
    }, 400)

}

//Funkcija koja smanjuje broj života
function decrement_life() {
    life--;
    life_span.text(life);
    fail.play();
}

//Funkcija koja provjerava da li js ikona pogađa cart, ako pogađa, pokreće funkciju update_score
function check_js_icons_hits_cart(js_icons) {
    if (collision(js_icons, cart)) {


        update_score();
        return true;

    }
    return false;
}

//Funkcija koja povećeva ukupan score na vrhu screena i u cartu
function update_score() {
    score++;
    if (score % 10 == 0 && speed < max_speed) {
        speed += 1;
        levelup.play();
    }
    collect.play();
    score_span.text(score);
    score_1.text(score);
    speed_span.text(speed);

}
//Funkcija koja prekida igru
function stop_the_game() {
    gameover.play();
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}
//Funkcija koja ponovo pokreće igru kada se pritisne na restart
restart.click(function () {
    location.reload();
});

//Funkcija za audio pri pokretanju igre
function enterTheGame() {
    enter.play();
}




