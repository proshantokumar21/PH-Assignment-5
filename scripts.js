const numbers = [{
    number: 999,
    service: "National Emergency Number",
    description: "National Emergency",
    category: "All",
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 199,
    service: "Police Helpline Number",
    description: "Police Assistance",
    category: "Police",
    iconPath: "./assets/police.png",
    iconBackground: "[#DFEFFF]"
}, {
    number: 1000,
    service: "Fire Service Number",
    description: "Fire Service",
    category: "All",
    iconPath: "./assets/fire-service.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: "1994-999999",
    service: "Ambulance Service",
    description: "Ambulance Assistance",
    category: "Health",
    iconPath: "./assets/ambulance.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 109,
    service: "Women and Child Helpline",
    description: "Women and Child Assistance",
    category: "Help",
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 106,
    service: "Anti-Corruption Number",
    description: "Anti-Corruption Assistance",
    category: "Govt.",
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 16216,
    service: "Electricity Help",
    description: "Electricity Assistance",
    category: "Electricity",
    iconPath: "./assets/police.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 16445,
    service: "Brac Helpline",
    description: "Brac Assistance",
    category: "NGO",
    iconPath: "./assets/brac.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 163,
    service: "Bangladesh Railway Helpline",
    description: "Bangladesh Railway Assistance",
    category: "Travel",
    iconPath: "./assets/Bangladesh-Railway.png",
    iconBackground: "[#FFE3E2]"
}
];

function createEmergencyCard(emergency, index) {
    return `
        <div class="shadow-md w-[300px] h-[300px] bg-white p-4 rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between">
                <div class="rounded-2xl bg-${emergency.iconBackground} w-[60px] h-[60px] flex items-center justify-center">
                    <img src="${emergency.iconPath}" class="w-[50px] h-[50px]">
                </div>
                <div class="heart-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="black" class="size-[3em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </div>
            </div>
            <div>
                <div class="text-lg font-semibold">
                    ${emergency.service}
                </div>
                <div class="text-sm">
                    ${emergency.description}
                </div>
            </div>
            <div class="text-3xl font-bold">
                ${emergency.number}
            </div>
            <div class="rounded-3xl bg-gray-300 w-fit px-3 text-gray-600">
                ${emergency.category}
            </div>
            <div id="button-${index}">
                <button class="btn rounded-4xl bg-white text-gray-800 w-10/21 copy-button">
                    <i class="fa-regular fa-copy"></i> Copy
                </button>
                <button class="btn rounded-4xl bg-[#00A63E] text-white w-10/21 call-button">
                    <i class="fa-solid fa-phone"></i> Call
                </button>
            </div>
        </div>
    `;
    
}

const historyList = []

const numbersList = document.getElementById("num-list");

for (let i = 0; i < numbers.length; i++) {
    const emergency = numbers[i];
    numbersList.innerHTML += createEmergencyCard(emergency, i);
}

// Select all heart buttons
const heartButtons = document.querySelectorAll(".heart-button");
// console.log(heartButtons);

heartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentCount = parseInt(document.getElementById("heart-count").innerText);
        // console.log(currentCount);
        heartCount = currentCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    });
});

// Select all call buttons
const callButtons = document.querySelectorAll(".call-button");
// console.log(callButtons);

callButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Extract the id of the parent of the clicked button
        const buttonId = e.currentTarget.parentElement.id;
        // console.log(buttonId);
        // Extract the index from the button id
        const index = buttonId.split("-").pop();
        // console.log(index);
        const emergency = numbers[index];
        // Get current coin count
        const currentCoinCount = parseInt(document.getElementById("coin-count").innerText);
        // console.log(currentCoinCount);
        // If current coin count is less than 20, alert the user
        if (currentCoinCount < 20) {
            alert("Not enough coins to make a call.");
            return;
        }

        // Deduct 20 coins
        document.getElementById("coin-count").innerText = currentCoinCount - 20;

        // Alert emergency name and number
        alert(`Calling ${emergency.service} at ${emergency.number}`);

        // Add to call history
        historyList.push(emergency);
        updateHistory();
    });
});

function updateHistory() {
    const historyListContainer = document.querySelector(".history-list");
    historyListContainer.innerHTML = ""; // Clear existing history

    historyList.forEach(emergency => {
        const historyCard = document.createElement("div");
        historyCard.className = "history-card flex justify-between items-center bg-[#FAFAFA] p-2";
        historyCard.innerHTML = `
            <div>
                <div class="font-semibold">${emergency.service}</div>
                <div>${emergency.number}</div>
            </div>
            <div>
                ${new Date().toLocaleTimeString()}
            </div>
        `;
        historyListContainer.appendChild(historyCard);
    });
}

// Clear call history
document.getElementById("clear-history").addEventListener("click", () => {
    historyList.length = 0; // Clear the history array
    updateHistory(); // Update the displayed history
});

let copyCount = 0;
// Update copy count display
function updateCopyCount() {
    document.getElementById("copy-count").innerText = copyCount;
}

// Handle copy button clicks
document.querySelectorAll(".copy-button").forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonId = e.currentTarget.parentElement.id;
        const index = buttonId.split("-").pop();
        const emergency = numbers[index];
        navigator.clipboard.writeText(emergency.number).then(() => {
            copyCount++;
            updateCopyCount();
            alert(`Copied ${emergency.number} to clipboard`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});