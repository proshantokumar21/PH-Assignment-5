const numbers = [{
    number: 999,
    service: "National Emergency Number",
    description: "National Emergency",
    category: "All",
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 999,
    service: "Police Helpline Number",
    description: "Police Assistance",
    category: "Police",
    iconPath: "./assets/police.png",
    iconBackground: "[#DFEFFF]"
}, {
    number: 999,
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
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 16445,
    service: "Brac Helpline",
    description: "Brac Assistance",
    category: "NGO",
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}, {
    number: 163,
    service: "Bangladesh Railway Helpline",
    description: "Bangladesh Railway Assistance",
    category: "Travel",
    iconPath: "./assets/emergency.png",
    iconBackground: "[#FFE3E2]"
}
];

function createEmergencyCard(emergency) {
    return `
        <div class="shadow-md min-w-[350px] min-h-[350px] w-3/10 border-2 bg-white p-4 rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between">
                <div class="rounded-2xl bg-${emergency.iconBackground} w-[60px] h-[60px] flex items-center justify-center">
                    <img src="${emergency.iconPath}" class="w-[50px] h-[50px]">
                </div>
                <div>
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
            <div>
                <button class="btn rounded-4xl bg-white text-gray-800 w-10/21" onclick="navigator.clipboard.writeText('${emergency.number}')">
                    <i class="fa-regular fa-copy"></i> Copy
                </button>
                <a href="tel:${emergency.number}">
                    <button class="btn rounded-4xl bg-[#00A63E] text-white w-10/21">
                        <i class="fa-solid fa-phone"></i> Call
                    </button>
                </a>
            </div>
        </div>
    `;
    
}

const numbersList = document.getElementById("num-list");

numbers.forEach(emergency => {
    numbersList.innerHTML += createEmergencyCard(emergency);
});