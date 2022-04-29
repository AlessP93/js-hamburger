// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS


// crea un evento che fa apparire .hamburger-menu quando viene cliccato l'id #open-menu

const openMenu = document.getElementById("open-menu");
const hamburgerMenu = document.getElementById("h-menu");
openMenu.addEventListener("click",
    function(){
       hamburgerMenu.style.display = "block"
    }
);

// e poi un altro evento che fa scomparire .hamburger-menu quando viente cliccato l'id #close-menu

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click",
    function(){
      
       hamburgerMenu.style.display = "none"
    }
);