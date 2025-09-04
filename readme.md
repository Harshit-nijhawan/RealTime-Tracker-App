# 🌍 Real-Time Location Tracking App

A real-time location tracking web application built with **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**.  
This project allows multiple users to share their live location and see others' locations on an interactive map — all updated in **real time** without refreshing the page.  

---

## 🚀 Features

✅ **Live Location Tracking** – Tracks and updates user location continuously  
✅ **Real-Time Communication** – Uses WebSockets for instant data sharing  
✅ **Multi-User Support** – Displays markers for all connected users  
✅ **Auto Remove Markers** – Removes markers when a user disconnects  
✅ **Map Integration** – Interactive map using Leaflet + OpenStreetMap  

---

## 🛠️ Tech Stack

| Layer       | Technology Used |
|------------|----------------|
| **Frontend** | HTML, CSS, JavaScript, Leaflet.js |
| **Backend**  | Node.js, Express |
| **Real-Time** | Socket.IO (WebSockets) |
| **View Engine** | EJS |
| **Map Tiles** | OpenStreetMap |

---

## 📸 Screenshots / Demo

| Multiple Users Tracking | Real-Time Updates |
|------------------------|------------------|
| ![Screenshot 1](screnshots\map1.png) | ![Screenshot 2](screnshots\map2.png) | ![Screenshot 2](screnshots\terminal.png) |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1️⃣ **Clone the repository**
```bash
git clone https://github.com/Harshit-nijhawan/RealTime-Tracker-App.git
cd realtime-location-tracker

npm install
npx nodemon app.js
or 
npm start
http://localhost:3000
