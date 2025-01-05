// Handle context menu creation
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "copy-jwt-token",
        title: "Copy JWT Token",
        contexts: ["all"]
    }, () => {
        if (chrome.runtime.lastError) {
            console.error("Error creating context menu:", chrome.runtime.lastError);
        } else {
            console.log("Context menu created successfully.");
        }
    });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "copy-jwt-token") {
        injectContentScript(tab.id);
    }
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    if (tab.id) {
        injectContentScript(tab.id);
    }
});

// Function to inject content script
function injectContentScript(tabId) {
    chrome.scripting.executeScript(
        {
            target: { tabId },
            files: ["content.js"]
        },
        () => {
            if (chrome.runtime.lastError) {
                console.error("Error injecting script:", chrome.runtime.lastError);
            } else {
                console.log("Script injected successfully.");
            }
        }
    );
}
