const target = document.querySelector("#target");

function addInfo(text) {
    const p = document.createElement("p");
    p.textContent = text;
    target.append(p);
}

addInfo(`Browser: ${navigator.userAgent}`);
addInfo(`Operating System: ${navigator.userAgent}`);
addInfo(`Screen Size: ${screen.width} × ${screen.height}`);
addInfo(`Available Screen Space: ${screen.availWidth} × ${screen.availHeight}`);

const now = new Date();
addInfo(`Current Date: ${now.toLocaleDateString("fi-FI", { day: "numeric", month: "long", year: "numeric" })}`);
addInfo(`Current Time: ${now.toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" })}`);
