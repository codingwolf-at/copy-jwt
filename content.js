(() => {
    const tokenKey = "token";
    let token = null;

    // Check localStorage for the token
    if (localStorage.getItem(tokenKey)) {
        token = localStorage.getItem(tokenKey);
        console.log("JWT Token found in localStorage:", token);
    }

    // If not found, check sessionStorage
    if (!token && sessionStorage.getItem(tokenKey)) {
        token = sessionStorage.getItem(tokenKey);
        console.log("JWT Token found in sessionStorage:", token);
    }

    const copyToClipboard = (text) => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    };

    if (token) {
        alert(`JWT Token copied to clipboard: ${token}`);
        copyToClipboard(token);
        console.log("JWT Token copied to clipboard.");
    } else {
        alert("No JWT token found in local or session storage.");
    }
})();
