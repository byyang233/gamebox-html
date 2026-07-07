// GameBox application entry

window.GameBox = {
    games: [],
    init() {
        console.log('GameBox initialized');
        if (window.GameBoxGames) {
            window.GameBoxGames.init();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    GameBox.init();
});
