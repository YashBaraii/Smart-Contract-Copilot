import React, { useEffect, useState } from "react";

interface WalletConnectProps {
  onWalletConnect?: (address: string) => void;
  onWalletDisconnect?: () => void;
  onError?: (error: string) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  onWalletConnect,
  onWalletDisconnect,
  onError
}) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isPetraAvailable, setIsPetraAvailable] = useState(false);

  // Check if Petra wallet is available
  useEffect(() => {
    const checkPetraAvailability = () => {
      const petra = (window as any).petra;
      if (petra) {
        console.log("Petra wallet detected");
        setIsPetraAvailable(true);
      } else {
        console.log("Petra wallet not detected");
        setIsPetraAvailable(false);
      }
    };

    checkPetraAvailability();
    window.addEventListener('load', checkPetraAvailability);
    return () => window.removeEventListener('load', checkPetraAvailability);
  }, []);

  const connectWallet = async () => {
    if (!isPetraAvailable) {
      const errorMsg = "Please install Petra wallet!";
      onError?.(errorMsg);
      alert(errorMsg);
      return;
    }

    setIsConnecting(true);
    try {
      const petra = (window as any).petra;
      console.log("Attempting to connect to Petra wallet...");

      // Request connection using Petra's specific method
      const response = await petra.connect();
      console.log("Connection response:", response);

      if (response && response.address) {
        const address = response.address;
        console.log("Successfully connected to:", address);
        setAccount(address);
        onWalletConnect?.(address);
      } else {
        throw new Error("No address returned from wallet");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      onError?.(error instanceof Error ? error.message : "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    if (!isPetraAvailable) return;

    try {
      const petra = (window as any).petra;
      console.log("Attempting to disconnect...");
      await petra.disconnect();
      console.log("Successfully disconnected");
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    } finally {
      setAccount(null);
      onWalletDisconnect?.();
    }
  };

  // Set up event listeners
  useEffect(() => {
    if (!isPetraAvailable) return;

    const petra = (window as any).petra;
    
    const handleAccountsChanged = (accounts: string[]) => {
      console.log("Accounts changed event:", accounts);
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
        onWalletConnect?.(accounts[0]);
      } else {
        setAccount(null);
        onWalletDisconnect?.();
      }
    };

    const handleChainChanged = () => {
      console.log("Chain changed event");
      window.location.reload();
    };

    const handleDisconnect = () => {
      console.log("Disconnect event");
      setAccount(null);
      onWalletDisconnect?.();
    };

    // Add event listeners
    petra.on("accountsChanged", handleAccountsChanged);
    petra.on("chainChanged", handleChainChanged);
    petra.on("disconnect", handleDisconnect);

    // Cleanup
    return () => {
      if (petra.removeListener) {
        petra.removeListener("accountsChanged", handleAccountsChanged);
        petra.removeListener("chainChanged", handleChainChanged);
        petra.removeListener("disconnect", handleDisconnect);
      }
    };
  }, [onWalletConnect, onWalletDisconnect, isPetraAvailable]);

  return (
    <div className="flex items-center gap-2">
      {account ? (
        <>
          <span className="text-sm text-gray-600">
            {`${account.slice(0, 6)}...${account.slice(-4)}`}
          </span>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            disabled={isConnecting}
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          disabled={isConnecting}
        >
          {isConnecting ? "Connecting..." : "Connect Petra Wallet"}
        </button>
      )}
    </div>
  );
};

export default WalletConnect;