class HttpClient {
    private baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl= baseUrl.slice(1) === '/' ? baseUrl.slice(0, -1): baseUrl;
    }

    async fetch(route: string, options: any) {
        return await fetch(`${this.baseUrl}${route}`, options);
    }

    async fetchWithAUthHeader(route: string, options: any) {
        const ut = localStorage.getItem('ut');
        options['headers'] = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ut}`
        })
        return await fetch(route, options);
    }
}

export const SMATClient = new HttpClient('http://localhost:8080');