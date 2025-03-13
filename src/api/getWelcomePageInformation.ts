import { WelcomePageInformation } from "../types/welcomePageInformation"

export async function getWelcomePageInformation() {
    const data = 
    await fetch("http://localhost:3005/WelcomePage")
    .then((response) => response.json());
    
    return data as WelcomePageInformation[];
}