export default class Completions {
	private unicoApiKey: string;
	private baseUrl: string;

	constructor(unicoApiKey: string, baseUrl: string) {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;
	}

	async create(body: { agent: string; query: string }): Promise<any> {
		const response = await fetch(`${this.baseUrl}/completions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.unicoApiKey}`,
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			const data = (await response.json()) as { error: string };

			if (data && data.error) {
				throw new Error(data.error);
			}

			throw new Error(response.statusText);
		}

		const data = await response.json();
		return data;
	}
}
