window.GameBoxNavigation = {
    show(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        const target = document.getElementById(pageId);
        if (target) target.classList.add('active');
    }
};
