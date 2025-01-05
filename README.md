# Copy Token Chrome Extension

This Chrome extension searches the current tab's local and session storage for a JWT token and copies it to the clipboard.

## Installation

1. Download the `Copy Token` folder.
2. Open Chrome and navigate to `chrome://extensions/`. (or any other chromium browser)
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the `Copy Token` folder.

## Usage

1. Right-click on any page.
2. Select "Copy JWT Token" from the context menu.
3. If a JWT token is found, it will be copied to your clipboard.

---

## Folder Structure
- `manifest.json`: Defines the extension metadata and permissions.
- `background.js`: Handles context menu creation and script injection.
- `content.js`: Searches storage and copies the JWT token to the clipboard.
- `README.md`: Provides setup instructions.