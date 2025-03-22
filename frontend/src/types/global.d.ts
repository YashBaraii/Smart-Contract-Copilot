interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
      on: (event: string, callback: (params: any) => void) => void;
    };
    petra?: {
      isConnected: () => Promise<boolean>;
      request: (args: { method: string }) => Promise<string[]>;
      on: (event: string, callback: (params: any) => void) => void;
      removeListener: (event: string, callback: (params: any) => void) => void;
    };
  }