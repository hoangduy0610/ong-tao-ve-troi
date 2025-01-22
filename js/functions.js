const selectColor = (type) => {
    switch (type) {
        case 'success':
            return '#28a745';
        case 'info':
            return '#007bff';
        case 'warning':
            return '#ffc107';
        case 'danger':
            return '#dc3545';
        default:
            return '#007bff';
    }
}

const hideToast = (selector) => {
    selector.fadeOut();
}

const showToast = (selector, message, type, autoHideInterval = 0) => {
    hideToast(selector);
    const color = selectColor(type);
    selector.css('border-left', `${color} 5px solid`);
    selector.text(message);
    selector.fadeIn();

    if (autoHideInterval > 0) {
        setTimeout(() => {
            hideToast(selector);
        }, autoHideInterval);
    }
}