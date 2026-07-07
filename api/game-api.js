window.GameBoxAPI = {
    config: {
        steamBaseURL: 'https://store.steampowered.com/api'
    },

    async getSteamDetail(appId) {
        const url = `${this.config.steamBaseURL}/appdetails?appids=${appId}&l=schinese`;
        const response = await fetch(url);
        const result = await response.json();

        const data = result[appId]?.data;
        return data ? this.normalizeSteam(data, appId) : null;
    },

    normalizeSteam(data, appId) {
        return {
            id: appId,
            steamId: appId,
            name: data.name || '',
            cover: data.header_image || '',
            background: data.background || '',
            screenshots: (data.screenshots || []).map(item => item.path_full),
            developer: data.developers || [],
            publisher: data.publishers || [],
            releaseDate: data.release_date?.date || '',
            platform: Object.keys(data.platforms || {}).filter(key => data.platforms[key]),
            tags: (data.genres || []).map(item => item.description),
            description: data.short_description || data.about_the_game || ''
        };
    }
};
