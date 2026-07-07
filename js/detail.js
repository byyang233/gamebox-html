window.GameBoxDetail = {
    open(id) {
        const game = window.GameBoxLibrary?.find(id);
        if (!game) return;

        const container = document.getElementById('libraryDetail');
        if (!container) return;

        container.innerHTML = this.render(game);
    },

    render(game) {
        return `
            <div class="detail-panel">
                <div class="detail-banner" style="background-image:url('${game.background || ''}')"></div>
                <div class="detail-content">
                    <div class="detail-cover" style="background-image:url('${game.cover || ''}')"></div>
                    <div class="detail-info">
                        <h1>${game.name}</h1>
                        <p>${game.description || '暂无游戏介绍'}</p>
                        <p>类型：${game.type || '未知'}</p>
                        <div class="detail-actions">
                            <button>开始游戏</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
