import Paths from "./src/path.js";

async function handleRouteChange(appElement) {
    const routes = Paths();
    const path = window.location.pathname;

    const route = routes.find((r) => r.path === path);
    if (route) {
        try {
            // Uncomment this block if you want to dynamically import components
            // const componentModule = await import(route.elementPath);
            // const component = componentModule.default();
            // appElement.innerHTML = "";
            // appElement.appendChild(component);

            // Example: Create a simple JSX component
            const element = (
                <div>
                    <h1>Hello, JSX!</h1>
                </div>
            );
            appElement.innerHTML = "";
            appElement.appendChild(element);
        } catch (error) {
            console.error("Error rendering component:", error);
        }
    } else {
        appElement.innerHTML = "<h1>404 Not Found</h1>";
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const appElement = document.getElementById("app");
    handleRouteChange(appElement);

    // Add an event listener to handle route changes triggered by the client
    window.addEventListener("popstate", handleRouteChange);

    // Capture all link clicks and handle them via client-side routing
    document.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            window.history.pushState(null, null, href);
            handleRouteChange(appElement);
        }
    });
});
