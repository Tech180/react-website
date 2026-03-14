import { interceptor } from "../interceptors/http.interceptor";

export async function fetchAffirmation(): Promise<string> {
  try {
    const data = await interceptor<{ affirmation: string }>('https://www.affirmations.dev', { 
      cache: 'no-store' 
    });
    return data.affirmation;
  } catch (error) {
    console.error("Error fetching affirmation:", error);
    return "You are doing great!"; // Default fallback
  }
}
