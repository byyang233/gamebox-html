window.GameBoxSearch = {
    bind() {
        const input = document.getElementById('gameSearch');
        if (!input) return;

        input.addEventListener('input', (event) => {
            const keyword = event.target.value.toLowerCase();
            const result = GameBoxGames.data.filter(game =>
                game.name.toLowerCase().includes(keyword)
            );
            GameBoxGames.render(result);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    GameBoxSearch.bind();
});
