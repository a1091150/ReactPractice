import { getWelcomePageInformation } from "../../api/getWelcomePageInformation";
import { WelcomePageInformation } from "../../types/welcomePageInformation";

export interface WelcomeLoaderResult {
    information: WelcomePageInformation[]
}

export async function welcomeLoader(): Promise<WelcomeLoaderResult> {
    const information = await getWelcomePageInformation();
    return {
        information,
    };
}