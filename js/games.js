window.GameBoxGames = {
    data: [
        {
            id: 1,
            name: '示例游戏',
            cover: '',
            background: '',
            screenshots: [],
            developer: '',
            publisher: '',
            releaseDate: '',
            platform: [],
            type: 'Game',
            tags: [],
            description: '',
            playTime: 0,
            lastPlayed: '',
            status: 'ready'
        }
    ],

    init() {
        this.data.forEach(game => {
            if (window.GameBoxLibrary) {
                GameBoxLibrary.add(game);
            }
        });
        this.render(this.data);
    },

    createCard(game) {
        return `
            <article class="game-card" data-id="${game.id}">
                <div class="card-img" style="background-image:url('${game.cover}')"></div>
                <div class="card-body">
                    <div class="card-title">${game.name}</div>
                    <div class="card-meta">${game.type}</div>
                </div>
            </article>`;
    },

    render(list) {
        const grid = document.getElementById('gameGrid');
        if (!grid) return;

        grid.innerHTML = list.map(game => this.createCard(game)).join('');

        grid.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                GameBoxDetail?.open(card.dataset.id);
            });
        });
    }
};
