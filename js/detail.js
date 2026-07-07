window.GameBoxDetail = {
    open(id) {
        const game = window.GameBoxLibrary?.find(id);
        if (!game) return;

        const container = document.getElementById('libraryDetail');
        if (!container) return;

        container.innerHTML = this.render(game);
    },

    render(game) {
        const tags = (game.tags || []).map(tag =>
            `<span class="detail-tag">${tag}</span>`
        ).join('');

        const screenshots = (game.screenshots || []).map(image =>
            `<div class="screenshot-item" style="background-image:url('${image}')"></div>`
        ).join('');

        return `
            <div class="detail-panel">
                <div class="detail-banner" style="background-image:url('${game.background || ''}')"></div>
                <div class="detail-content">
                    <div class="detail-cover" style="background-image:url('${game.cover || ''}')"></div>
                    <div class="detail-info">
                        <h1>${game.name}</h1>
                        <p>${game.description || '暂无游戏介绍'}</p>
                        <p>开发商：${game.developer || '未知'}</p>
                        <p>发行商：${game.publisher || '未知'}</p>
                        <p>平台：${(game.platform || []).join(', ') || '未知'}</p>
                        <p>发售日期：${game.releaseDate || '未知'}</p>
                        <div class="detail-tags">${tags}</div>
                        <div class="detail-actions">
                            <button>开始游戏</button>
                        </div>
                    </div>
                </div>
                <div class="screenshot-gallery">${screenshots}</div>
            </div>
        `;
    }
};
