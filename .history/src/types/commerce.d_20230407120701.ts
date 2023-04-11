declare module '@chec/commerce.js' {
    export default class Commerce {
      constructor(apiKey: string, isDevMode?: boolean);
  
      products: {
        list(): Promise<{
          data: any[];
        }>;
      };
  
      // Add other Commerce.js methods and properties as needed
    }
  }
  