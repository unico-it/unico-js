declare module 'unico-js' {
	export class UnicoClient {
		private unicoApiKey: string;
		private baseUrl: string;

		public agents: Agents;

		constructor(unicoApiKey: string, baseUrl?: string);
		agent(agentId: number): Agents;
		getUnicoApiKey(): string;
		getBaseUrl(): string;
	}

	export class Agents {
		private unicoApiKey: string;
		private baseUrl: string;
		private agentId?: number;

		public contexts: Contexts;
		public completions: Completions;

		constructor(unicoApiKey: string, baseUrl: string, agentId?: number);
		retrieve(): Promise<Agent[]>;
	}

	export class Completions {
		private unicoApiKey: string;
		private baseUrl: string;
		private agentId?: number;

		constructor(unicoApiKey: string, baseUrl: string, agentId?: number);
		create(query: string): Promise<Completion>;
	}

	export class Contexts {
		private unicoApiKey: string;
		private baseUrl: string;
		private agentId?: number;

		constructor(unicoApiKey: string, baseUrl: string, agentId?: number);
		create(contexts: string[]): Promise<void>;
	}

	export interface Agent {
		id: string;
		name: string;
		description: string;
		is_shared: boolean;
		is_owner: boolean;
		creation_date: Date;
		update_date: Date;
	}

	export interface Completion {
		text: string;
		engine: string;
		model: string;
	}
}
