function showAside() {
    const cart1 = document.getElementById('cart1');
    const cart2 = document.getElementById('cart2');
    const heroMain = document.getElementById('heroMain');
    const Footer = document.getElementById('MainContLeftFooter');

    // LOGIC ON heroCont 

    if (heroMain.classList.contains('heroMainH')) {
        heroMain.classList.remove('heroMainH')
        heroMain.classList.add('heroMainS')
    }
    else {
        heroMain.classList.add('heroMainH')
        heroMain.classList.remove('heroMainS')
    }

    // LOGIC ON CART 1

    if (cart1.classList.contains('cart1H')) {
        cart1.classList.remove('cart1H')
        cart1.classList.add('cart1S')
    }
    else {
        cart1.classList.add('cart1H')
        cart1.classList.remove('cart1S')
    }

    // LOGIC ON CART 2

    if (cart2.classList.contains('cart2H')) {
        cart2.classList.remove('cart2H')
        cart2.classList.add('cart2S')
    }
    else {
        cart2.classList.add('cart2H')
        cart2.classList.remove('cart2S')
    }
  
    // LOGIC ON FOOTER 1

    if (Footer.classList.contains('FooterH')) {
        Footer.classList.remove('FooterH')
        Footer.classList.add('FooterS')
    }
    else {
        Footer.classList.add('FooterH')
        Footer.classList.remove('FooterS')
    }

}


