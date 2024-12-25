function updateClock() {
    const now = new Date();

    // Get current hours, minutes, and day
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set to 12

    // Update time display
    document.getElementById("hour").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minute").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;

    // Highlight current day
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    days.forEach((id, index) => {
        const dayElement = document.getElementById(id);
        if (index === day) {
            dayElement.classList.add("active");
        } else {
            dayElement.classList.remove("active");
        }
    });
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately to set the initial state