window.GameBoxVNDB = {
    token: '',
    baseURL: 'https://api.vndb.org/kana',

    async search(name) {
        // VNDB requires a user API token.
        // Keep token in user configuration, not in public source.
        return [];
    }
};
