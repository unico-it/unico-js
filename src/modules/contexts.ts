export default class Contexts {
	private unicoApiKey: string;
	private baseUrl: string;
	private agentId?: number;

	constructor(unicoApiKey: string, baseUrl: string, agentId?: number) {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;
		this.agentId = agentId;
	}

	async create(contexts: string[]): Promise<any> {
		if (!this.agentId) {
			throw new Error('agentId is not set. Please select an agent.');
		}

		const response = await fetch(`${this.baseUrl}/agents/${this.agentId}/contexts/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.unicoApiKey}`,
			},
			body: JSON.stringify({
				contexts: contexts,
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
