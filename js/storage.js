window.GameBoxStorage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get(key, fallback = null) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    },

    remove(key) {
        localStorage.removeItem(key);
    }
};
