window.GameBoxSteamMedia = {
    enhance(game) {
        return {
            ...game,
            media: {
                cover: game.cover || '',
                background: game.background || '',
                screenshots: game.screenshots || []
            }
        };
    }
};
