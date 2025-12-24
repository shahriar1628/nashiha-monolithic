const { createApp } = Vue;

createApp({
    data() {
        return {
            heroTitle: "Muslim Nasiha",
            heroSubtitle: "Your trusted Islamic guidance platform for authentic resources and spiritual growth",
            prayerTimes: [
                { name: "Fajr", time: "5:30 AM" },
                { name: "Sunrise", time: "6:45 AM" },
                { name: "Dhuhr", time: "12:30 PM" },
                { name: "Asr", time: "3:45 PM" },
                { name: "Maghrib", time: "6:15 PM" },
                { name: "Isha", time: "7:30 PM" }
            ]
        };
    }
}).mount('#app');