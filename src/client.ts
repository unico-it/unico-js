import Agents from './modules/agents';
import Completions from './modules/completions';
import Contexts from './modules/contexts';

export class UnicoClient {
  private unicoApiKey: string;
  private baseUrl: string;

  public agents: Agents;
  public completions: Completions;
  public contexts: Contexts;

  constructor(unicoApiKey: string, baseUrl: string = "https://theunico.it/api") {
    this.unicoApiKey = unicoApiKey;
    this.baseUrl = baseUrl;

    this.agents = new Agents(this.unicoApiKey, this.baseUrl);
	this.completions = new Completions(this.unicoApiKey, this.baseUrl);
	this.contexts = new Contexts(this.unicoApiKey, this.baseUrl);
  }

  getUnicoApiKey(): string {
    return this.unicoApiKey;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
