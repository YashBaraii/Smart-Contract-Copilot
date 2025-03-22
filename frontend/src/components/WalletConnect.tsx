import React, { useEffect, useState, useCallback } from "react";
import Web3 from "web3";

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
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const checkWalletConnection = useCallback(async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          onWalletConnect?.(accounts[0]);
        }
        setWeb3(web3Instance);
      } catch (error) {
        console.error("Failed to check wallet connection:", error);
      }
    }
  }, [onWalletConnect]);

  useEffect(() => {
    checkWalletConnection();
  }, [checkWalletConnection]);

  useEffect(() => {
    if (window.ethereum) {
      // Handle account changes
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          onWalletConnect?.(accounts[0]);
        } else {
          setAccount(null);
          onWalletDisconnect?.();
        }
      });

      // Handle chain changes
      window.ethereum.on("chainChanged", (_chainId: string) => {
        window.location.reload();
      });

      // Handle disconnect
      window.ethereum.on("disconnect", () => {
        setAccount(null);
        onWalletDisconnect?.();
      });
    }

    return () => {
        if (window.ethereum) {
          (window.ethereum as any).removeListener("accountsChanged", () => {});
          (window.ethereum as any).removeListener("chainChanged", () => {});
          (window.ethereum as any).removeListener("disconnect", () => {});
        }
      };
  }, [onWalletConnect, onWalletDisconnect]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      const errorMsg = "Please install MetaMask!";
      onError?.(errorMsg);
      alert(errorMsg);
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        onWalletConnect?.(accounts[0]);
        
        // Initialize Web3 after successful connection
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      onError?.(error instanceof Error ? error.message : "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    onWalletDisconnect?.();
  };

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
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default WalletConnect;