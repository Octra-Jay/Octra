document.addEventListener('DOMContentLoaded', () => {
      // Cookie-Banner anzeigen
        const banner = document.getElementById('cookie-banner');
          banner.classList.remove('hidden');

            // Mobile-Menü schließen, wenn ein Link geklickt wird
              const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                          mobileMenu.classList.add('hidden');
                              });
                                });
                                });
