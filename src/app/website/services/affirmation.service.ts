import { interceptor } from "../interceptors/http.interceptor";
import { environment } from "../../../environments/environment";

export async function fetchAffirmation(): Promise<string> {
  try {
    const data = await interceptor<{ affirmation: string }>(`${environment.apiUrl}/affirmations`, { 
      next: { revalidate: 3600 } 
    });
    return data.affirmation;
  } catch (error) {
    // Graceful fallback for builds or network outages
    return "You are doing great!";
  }
}
