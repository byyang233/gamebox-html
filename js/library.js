window.GameBoxLibrary = {
    games: [],

    add(game) {
        this.games.push(game);
    },

    find(id) {
        return this.games.find(game => String(game.id) === String(id));
    },

    load() {
        return this.games;
    }
};
