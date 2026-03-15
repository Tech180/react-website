import { interceptor } from "../interceptors/http.interceptor";

export async function fetchAffirmation(): Promise<string> {
  try {
    const data = await interceptor<{ affirmation: string }>('https://www.affirmations.dev', { 
      next: { revalidate: 3600 } 
    });
    return data.affirmation;
  } catch (error) {
    // Graceful fallback for builds or network outages
    return "You are doing great!";
  }
}
