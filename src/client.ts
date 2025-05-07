import Agents from './modules/agents';

export class UnicoClient {
	private unicoApiKey: string;
	private baseUrl: string;

	public agents: Agents;

	constructor(unicoApiKey: string, baseUrl = 'https://theunico.it/api') {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;

		this.agents = new Agents(this.unicoApiKey, this.baseUrl);
	}

	agent(agentId: number): Agents {
		return new Agents(this.unicoApiKey, this.baseUrl, agentId);
	}

	getUnicoApiKey(): string {
		return this.unicoApiKey;
	}

	getBaseUrl(): string {
		return this.baseUrl;
	}
}
