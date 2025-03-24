// Select the target element
const target = document.querySelector("#target");

// Function to create a paragraph element and append it to the target
function addInfo(text) {
    const p = document.createElement("p"); // Create a new paragraph element
    p.textContent = text; // Set the text content of the paragraph
    target.append(p); // Append the paragraph to the target element
}

// Get browser name and version
const browserInfo = navigator.userAgent.match(/(firefox|msie|chrome|safari|trident|edge|opera|opr|edg)\/?\s*(\d+)/i) || [];
const browserName = browserInfo[1] ? browserInfo[1] : "Unknown Browser";
const browserVersion = browserInfo[2] ? browserInfo[2] : "Unknown Version";

// Array to hold the information strings
const info = [
    `Browser: ${browserName} ${browserVersion}`, // Browser name and version
    `Operating System: ${navigator.userAgent}`, // Operating system information
    `Screen Size: ${screen.width} × ${screen.height}`, // Screen size
    `Available Screen Space: ${screen.availWidth} × ${screen.availHeight}`, // Available screen space
];

// Get the current date and time using BOM
const now = new Date();
info.push(
    `Current Date: ${now.toLocaleDateString("fi-FI", { day: "numeric", month: "long", year: "numeric" })}`, // Current date
    `Current Time: ${now.toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" })}` // Current time
);

// Loop through the info array and add each piece of information to the target element
for (let i = 0; i < info.length; i++) {
    addInfo(info[i]);
}