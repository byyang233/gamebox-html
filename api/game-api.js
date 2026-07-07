window.GameBoxAPI = {
    async getGameDetail(id) {
        // Reserved for VNDB / IGDB / Steam adapters
        return null;
    },

    normalize(data) {
        return {
            id: data.id || '',
            name: data.name || '',
            cover: data.cover || '',
            background: data.background || '',
            screenshots: data.screenshots || [],
            developer: data.developer || '',
            publisher: data.publisher || '',
            releaseDate: data.releaseDate || '',
            platform: data.platform || [],
            tags: data.tags || [],
            description: data.description || ''
        };
    }
};
