import type { Agent } from '../types/Agent';
import Completions from './completions';
import Contexts from './contexts';

export default class Agents {
	private unicoApiKey: string;
	private baseUrl: string;
	private agentId?: number;

	public contexts: Contexts;
	public completions: Completions;

	constructor(unicoApiKey: string, baseUrl: string, agentId?: number) {
		this.unicoApiKey = unicoApiKey;
		this.baseUrl = baseUrl;
		this.agentId = agentId;

		this.contexts = new Contexts(this.unicoApiKey, this.baseUrl, this.agentId);
		this.completions = new Completions(this.unicoApiKey, this.baseUrl, this.agentId);
	}

	async retrieve(): Promise<Agent[]> {
		const response = await fetch(`${this.baseUrl}/agents`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.unicoApiKey}`,
			},
		});

		if (!response.ok) {
			const data = (await response.json()) as { error: string };

			if (data && data.error) {
				throw new Error(data.error);
			}

			throw new Error(response.statusText);
		}

		return (await response.json()).agents;
	}
}
