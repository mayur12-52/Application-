// --- Conceptual JavaScript for a Web App ---

// 1. Navigation Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Optional: Add active class to navigation
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// 2. Conceptual Screen Time Tracker (for time spent on this page)
let startTime = Date.now();
let totalTimeOnPage = 0;
let timerInterval;

function updateScreenTime() {
    const currentTime = Date.now();
    totalTimeOnPage = Math.floor((currentTime - startTime) / 1000); // Time in seconds

    const hours = Math.floor(totalTimeOnPage / 3600);
    const minutes = Math.floor((totalTimeOnPage % 3600) / 60);
    const seconds = totalTimeOnPage % 60;

    document.getElementById('total-time').textContent = `${hours}h ${minutes}m ${seconds}s`;
}

// Start tracking when the page loads
window.onload = () => {
    timerInterval = setInterval(updateScreenTime, 1000); // Update every second
    // Set initial active nav link
    document.querySelector('nav ul li a[href="#tracker"]').classList.add('active');
};

// Stop tracking when the user leaves the page (optional, for more accurate session time)
window.onbeforeunload = () => {
    clearInterval(timerInterval);
    // Here you might send the totalTimeOnPage to a backend if you had one
};


// 3. Focus Mode (Conceptual - for a web app, this might block access to other *websites* via a browser extension,
// or simply provide a visual overlay to encourage focus on this page)
document.getElementById('start-focus-mode').addEventListener('click', () => {
    alert('Focus Mode Activated! (Conceptual: In a real web app, this might involve a browser extension to block distracting sites, or a simple overlay on this page.)');
    // For a simple web app, you could dim the screen or show a motivational message.
    // Example:
    // const focusOverlay = document.createElement('div');
    // focusOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); color: white; display: flex; justify-content: center; align-items: center; font-size: 2em; z-index: 9999;';
    // focusOverlay.textContent = 'Focus Time! Stay Productive.';
    // document.body.appendChild(focusOverlay);
    // setTimeout(() => focusOverlay.remove(), 5000); // Remove after 5 seconds
});

// 4. Challenge Join Button (Conceptual)
document.querySelectorAll('.join-challenge').forEach(button => {
    button.addEventListener('click', () => {
        const challengeTitle = button.previousElementSibling.previousElementSibling.textContent;
        alert(`You joined the "${challengeTitle}" challenge! Good luck!`);
        // In a real app, this would update user's challenge status in a database
    });
});

// 5. Read More for Educational Modules (Conceptual)
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const moduleTitle = button.previousElementSibling.previousElementSibling.textContent;
        alert(`Opening details for "${moduleTitle}". (Conceptual: This would navigate to a new page or open a modal with the full educational content.)`);
        // In a real app, you'd load content dynamically or navigate to a specific module page.
    });
});

// 6. Start Quiz (Conceptual)
document.getElementById('start-quiz').addEventListener('click', () => {
    alert('Starting the quiz! (Conceptual: This would load a quiz interface.)');
});

// --- Integration with Firebase (Conceptual for a Web App) ---
// For a web app, you would include the Firebase SDK in your HTML:
// <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-auth-compat.js"></script>

// Then initialize Firebase in your script.js:
/*
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Example: Saving user's challenge progress (conceptual)
function saveChallengeProgress(userId, challengeName, progress) {
    db.collection('users').doc(userId).collection('challenges').doc(challengeName).set({
        progress: progress,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => console.log("Challenge progress saved!"))
    .catch((error) => console.error("Error saving progress: ", error));
}

// Example: Fetching educational content (conceptual)
async function getEducationalModule(moduleId) {
    const doc = await db.collection('educationalModules').doc(moduleId).get();
    if (doc.exists) {
        console.log("Module data:", doc.data());
        return doc.data();
    } else {
        console.log("No such module!");
        return null;
    }
}
*/
