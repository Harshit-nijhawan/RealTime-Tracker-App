const socket = io();

// Get user location
if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('sendLocation', { latitude, longitude });
    }, (error) => {
        console.error('Error getting location:', error);
    }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    });
}

// Initialize map
const map = L.map("map").setView([0, 0], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "harshit"
}).addTo(map);

const markers = {};

// Update markers when server sends location
socket.on('locationUpdate', (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude]); // Center map on latest location

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Remove marker when a user disconnects
socket.on('userDisconnected', (data) => {
    if (markers[data.id]) {
        map.removeLayer(markers[data.id]);
        delete markers[data.id];
    }
});
