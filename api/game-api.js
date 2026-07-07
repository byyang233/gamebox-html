window.GameBoxAPI = {
    config: {
        // Replace this with the actual Vnite-compatible endpoint
        baseURL: ''
    },

    async request(path) {
        if (!this.config.baseURL) {
            return null;
        }

        const response = await fetch(this.config.baseURL + path);
        return await response.json();
    },

    async getGameDetail(id) {
        const data = await this.request(`/games/${id}`);
        return data ? this.normalize(data) : null;
    },

    normalize(data = {}) {
        return {
            id: data.id || data.uuid || '',
            name: data.name || data.title || '',
            cover: data.cover || data.image || '',
            background: data.background || data.banner || '',
            screenshots: data.screenshots || [],
            developer: data.developer || data.developers || '',
            publisher: data.publisher || data.publishers || '',
            releaseDate: data.releaseDate || data.release_date || '',
            platform: data.platform || data.platforms || [],
            tags: data.tags || data.genres || [],
            description: data.description || data.intro || ''
        };
    }
};
