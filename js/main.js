//j'en ai marre de cette ****** de parrallax de ***** qui fait que bugeeeeerrrr tous le site 3jours que je suis deçu ****** de *****

window.onload = function () {
    console.log(navigator.appName)
    curent_page_dom = document.getElementsByTagName("body")[0];
    curent_page = curent_page_dom.getAttribute('data-curentPage');
    var scroll_y = window.scrollY;
    var body_height = document.querySelector("body").getBoundingClientRect().height;
    document.querySelector("body").style.height = body_height - scroll_y * 4 + "px";
    console.log(body_height);
    document.querySelector("html").style.height = body_height + "px !important";


    if (curent_page == "index") {
        window.addEventListener('scroll', () => {
            let section_competences = document.querySelector('#section_competences');
            var scroll_y = window.scrollY;
            section_competences.style.bottom = scroll_y * 0.4 + "px";
            let section_project_cards = document.querySelector('#projects-cards');
            section_project_cards.style.bottom = scroll_y * 0.9 + "px";
            let footer = document.querySelector('#footer');
            footer.style.bottom = scroll_y * 0.9 + "px";
            var body_height = document.querySelector("body").getBoundingClientRect().height;
            document.querySelector("body").style.height = body_height - scroll_y * 4 + "px";
            console.log(body_height);
            document.querySelector("html").style.height = body_height + "px";
        })

    }
}