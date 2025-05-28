import type { Completion } from '../types/Completion';

export default class Completions {
	private unicoApiKey: string;
	private baseUrl: string;

	constructor(unicoApiKey: string, baseUrl: string) {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;
	}

	async create(agentId: number, query: string): Promise<Completion> {
		const response = await fetch(`${this.baseUrl}/agents/${agentId}/completions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.unicoApiKey}`,
			},
			body: JSON.stringify({
				query: query,
			}),
		});

		if (!response.ok) {
			const data = (await response.json()) as { error: string };

			if (data && data.error) {
				throw new Error(data.error);
			}

			throw new Error(response.statusText);
		}

		return await response.json();
	}
}
