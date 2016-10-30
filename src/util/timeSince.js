export function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + "г";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + "м";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + "дн";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + "ч";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + "м";
    }
    return Math.floor(seconds) + "с";
}
