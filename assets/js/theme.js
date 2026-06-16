/**
 * NeuroFlow AI Pro - Master Core Architecture Client Script
 * Handles Global Dark/Light Switching Framework, Dynamic Accordion Components, and Toast Infrastructure
 */

document.addEventListener("DOMContentLoaded", () => {
    initThemeFallbackStorageEngine();
    initGlobalAccordions();
});

/**
 * 1. Theme Configuration Storage Controller Interface
 */
function initThemeFallbackStorageEngine() {
    const themeToggleButton = document.getElementById("globalThemeToggle");
    if (!themeToggleButton) return;

    // Local Storage Database Verification Checks
    const activeCachedThemePreference = localStorage.getItem("neuroflow_theme_token");
    const documentBodyElement = document.body;

    if (activeCachedThemePreference === "light") {
        documentBodyElement.classList.remove("dark-theme");
        documentBodyElement.classList.add("light-theme");
        themeToggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        documentBodyElement.classList.add("dark-theme");
    }

    themeToggleButton.addEventListener("click", () => {
        if (documentBodyElement.classList.contains("dark-theme")) {
            documentBodyElement.classList.remove("dark-theme");
            documentBodyElement.classList.add("light-theme");
            themeToggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            localStorage.setItem("neuroflow_theme_token", "light");
            showSystemToastNotification("System Matrix updated to Light Interface mode.", "info");
        } else {
            documentBodyElement.classList.remove("light-theme");
            documentBodyElement.classList.add("dark-theme");
            themeToggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            localStorage.setItem("neuroflow_theme_token", "dark");
            showSystemToastNotification("System Matrix updated to Dark Interface mode.", "info");
        }
    });
}

/**
 * 2. Enterprise Component Engine: Accordion Factory
 */
function initGlobalAccordions() {
    const triggerNodesCollection = document.querySelectorAll(".accordion-trigger");
    triggerNodesCollection.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const currentAccordionNode = trigger.closest(".accordion-node");
            const isCurrentlyExpanded = currentAccordionNode.classList.contains("is-expanded");
            
            // Close all open sibling components inside the active parent container block
            const macroGroup = currentAccordionNode.closest(".accordion-wrapper");
            if (macroGroup) {
                macroGroup.querySelectorAll(".accordion-node").forEach(node => node.classList.remove("is-expanded"));
            }

            if (!isCurrentlyExpanded) {
                currentAccordionNode.classList.add("is-expanded");
            }
        });
    });
}

/**
 * 3. Dynamic Telemetry Status Dispatcher Injection Interface (Toast Trigger)
 */
window.showSystemToastNotification = function(toastTextContent, alertSeverityProfile = "info") {
    let targetToastContainerStack = document.getElementById("toast-container");
    
    // Fallback Factory Setup
    if (!targetToastContainerStack) {
        targetToastContainerStack = document.createElement("div");
        targetToastContainerStack.id = "toast-container";
        document.body.appendChild(targetToastContainerStack);
    }

    const toastMessageInstanceElement = document.createElement("div");
    toastMessageInstanceElement.className = `toast-msg ${alertSeverityProfile}`;
    toastMessageInstanceElement.innerHTML = `
        <i class="fa-solid ${alertSeverityProfile === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
        <span>${toastTextContent}</span>
    `;

    targetToastContainerStack.appendChild(toastMessageInstanceElement);

    // Automate destructive extraction sweep cycle sequence
    setTimeout(() => {
        toastMessageInstanceElement.style.opacity = "0";
        toastMessageInstanceElement.style.transform = "translateX(100%)";
        setTimeout(() => {
            toastMessageInstanceElement.remove();
        }, 300);
    }, 4000);
};
