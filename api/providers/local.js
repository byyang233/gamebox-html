window.GameBoxLocal = {
    data: [],

    async search(name) {
        return this.data.filter(game =>
            game.name && game.name.includes(name)
        );
    }
};
