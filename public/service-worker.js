self.addEventListener('push', function (event) {
    console.log('📬 Push event received:', event);

    const data = event.data?.json() || {};
    const title = data.title || 'New Alert';
    const options = {
        body: data.body || 'Something happened!',
        icon: '/icons/icon-192x192.png',
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});