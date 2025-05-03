export default class Contexts {
	private unicoApiKey: string;
	private baseUrl: string;

	constructor(unicoApiKey: string, baseUrl: string) {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;
	}

	async create(body: { agent: string; contexts: string[] }): Promise<any> {
		const response = await fetch(`${this.baseUrl}/contexts/create`, {
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
