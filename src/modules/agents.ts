export default class Agents {
	private unicoApiKey: string;
	private baseUrl: string;

	constructor(unicoApiKey: string, baseUrl: string) {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;
	}

	async retrieve(): Promise<any> {
		const response = await fetch(`${this.baseUrl}/agents`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${this.unicoApiKey}`,
			},
		});

		if (!response.ok) {
			const data = (await response.json()) as { error: string };

			if (data && data.error) {
				throw new Error(`Error: ${data.error}`);
			}

			throw new Error(`${response.statusText}`);
		}

		const data = await response.json();
		return data;
	}
}
