export const Networks = {
    Moonbeam : {
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0x504", // Moonbeam's chainId is 1284, which is 0x504 in hex
                chainName: "Moonbeam",
                nativeCurrency: {
                    name: 'Glimmer',
                    symbol: 'GLMR',
                    decimals: 18
                },
            rpcUrls: ["https://rpc.api.moonbeam.network"],
            blockExplorerUrls: ["https://moonbeam.moonscan.io/"]
            },
        ]
    },
    MoonbaseAlpha : {
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0x507", // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
                chainName: "Moonbase Alpha",
                nativeCurrency: {
                    name: 'DEV',
                    symbol: 'DEV',
                    decimals: 18
                },
            rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
            blockExplorerUrls: ["https://moonbase.moonscan.io/"]
            },
        ]
    }
}