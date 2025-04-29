declare module 'unico-js' {
    export class UnicoClient {
      private unicoApiKey: string;
      private baseUrl: string;
  
      public agents: Agents;
      public completions: Completions;
      public contexts: Contexts;
  
      constructor(unicoApiKey: string, baseUrl?: string);
      getUnicoApiKey(): string;
      getBaseUrl(): string;
    }
  
    export class Agents {
      private unicoApiKey: string;
      private baseUrl: string;
  
      constructor(unicoApiKey: string, baseUrl: string);
      retrieve(): Promise<any>;
    }
  
    export class Completions {
      private unicoApiKey: string;
      private baseUrl: string;
  
      constructor(unicoApiKey: string, baseUrl: string);
      create(body: { agent: string; query: string }): Promise<any>;
    }
  
    export class Contexts {
      private unicoApiKey: string;
      private baseUrl: string;
  
      constructor(unicoApiKey: string, baseUrl: string);
      create(body: { agent: string; contexts: string[] }): Promise<any>;
    }
  }
  