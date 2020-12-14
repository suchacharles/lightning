// Close Notifications
function closeNotification() {
    document.getElementById('notification').style.display = "none";
};

// Notification Function
function notify(notifyContent) {
    document.getElementById('notification-title').innerHTML = notifyContent;

    document.getElementById('notification').style.display = "block";
    setTimeout(function () {
        document.getElementById('notification').style.display = "none";
    }, 10000);
}