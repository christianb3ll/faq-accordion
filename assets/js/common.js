const accordionButtons = document.querySelectorAll('.accordion-button');

const HandleClick = function(event){
    let expanded = event.target.getAttribute('aria-expanded');

    let panel = event.target.getAttribute('aria-controls');
    document.getElementById(panel).classList.toggle('hidden');
    
    if(expanded == 'false'){
        event.target.ariaExpanded = 'true';
    } else {
        event.target.ariaExpanded = 'false';
    }
    
    event.target.classList.toggle('open');
}

accordionButtons.forEach(button => {
    button.addEventListener('click', HandleClick);
});

