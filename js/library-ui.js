window.GameBoxLibraryUI = {
    renderList() {
        const el = document.getElementById('libraryList');
        if (!el || !window.GameBoxLibrary) return;

        el.innerHTML = GameBoxLibrary.games.map(game => `
            <div class="library-item" data-id="${game.id}">
                ${game.name}
            </div>
        `).join('');
    },

    open(id) {
        const game = GameBoxLibrary.find(id);
        if (window.GameBoxDetail && game) {
            GameBoxDetail.open(id);
        }
    }
};
