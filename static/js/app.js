const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',()=>
    {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

// (function($) {
//     $(function() {
//       $('.toggle-overlay').click(function() {
//         $('aside').toggleClass('open');
//       });
//     });
//   })(jQuery);