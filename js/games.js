window.GameBoxGames = {
    data: [
        {
            name: '示例游戏',
            cover: '',
            type: 'Game'
        }
    ],

    init() {
        this.render(this.data);
    },

    render(list) {
        const grid = document.getElementById('gameGrid');
        if (!grid) return;

        grid.innerHTML = list.map(game => `
            <div class="game-card">
                <div class="card-img"></div>
                <div class="card-body">
                    <div class="card-title">${game.name}</div>
                </div>
            </div>
        `).join('');
    }
};
