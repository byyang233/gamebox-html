window.GameBoxMedia = {
    providers: [
        window.GameBoxSteamMedia
    ],

    enhance(game) {
        return this.providers.reduce((result, provider) => {
            return provider ? provider.enhance(result) : result;
        }, game);
    }
};
