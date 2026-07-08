const API_URL = import.meta.env.VITE_API_URL

export interface AuthResponse {
    message: string;
    token?: string;
    user?: {
        id: number;
        email: string;
    };
    error?: string;
}

export const authservice = {
    register: async (email: string, password: string): Promise<AuthResponse> => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            return await response.json();
        } catch (error) {
            return { message: 'Network error', error: 'Could not connect to server' };
        }
    },

    login: async (email: string, password: string): Promise<AuthResponse> => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data: AuthResponse = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem('user_token', data.token);
            }

            return data;
        } catch (error) {
            return { message: 'Network error', error: 'Could not connect to server' };
        }
    },

    logout: () => {
        localStorage.removeItem('user_token');
    },

    isLoggedIn: (): boolean => {
        return localStorage.getItem('user_token') !== null;
    }
};
