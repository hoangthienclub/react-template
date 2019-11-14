
export function getDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "windows-phone";
    }
    if (/android/i.test(userAgent)) {
        return "android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }
    return "unknown";
}