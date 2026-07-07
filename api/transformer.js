window.GameBoxTransformer = {
    merge(source) {
        return {
            id: source.id || '',
            name: source.name || '',
            cover: source.cover || '',
            background: source.background || '',
            screenshots: source.screenshots || [],
            developer: source.developer || '',
            publisher: source.publisher || '',
            releaseDate: source.releaseDate || '',
            platform: source.platform || [],
            tags: source.tags || [],
            description: source.description || ''
        };
    }
};
