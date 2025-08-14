declare module 'unico-js' {
	export class UnicoClient {
		private unicoApiKey: string;
		private baseUrl: string;

		public agents: Agents;

		constructor(unicoApiKey: string, baseUrl?: string);
		getUnicoApiKey(): string;
		getBaseUrl(): string;
	}

	export class Agents {
		private unicoApiKey: string;
		private baseUrl: string;

		public contexts: Contexts;
		public completions: Completions;

		constructor(unicoApiKey: string, baseUrl: string);
		retrieve(): Promise<Agent[]>;
	}

	export class Completions {
		private unicoApiKey: string;
		private baseUrl: string;

		constructor(unicoApiKey: string, baseUrl: string);
		create(agentId: string, query: string): Promise<Completion>;
	}

	export class Contexts {
		private unicoApiKey: string;
		private baseUrl: string;

		constructor(unicoApiKey: string, baseUrl: string);
		create(agentId: string, contexts: string[]): Promise<any>;
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
