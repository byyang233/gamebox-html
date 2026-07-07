window.GameBoxDetail = {
    open(id) {
        const game = window.GameBoxLibrary?.find(id);
        if (!game) return;

        console.log('detail:', game);
    },

    render(game) {
        return `
            <div class="game-detail">
                <div class="detail-title">${game.name}</div>
                <p>${game.description || ''}</p>
            </div>
        `;
    }
};
