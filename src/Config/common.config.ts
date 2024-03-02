export const getSessionToken: () => string = () => localStorage.getItem('auth-token') ?? '';
