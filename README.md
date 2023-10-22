# Chainlink CCIP Demo Repository


This repository is for storing code that demonstrates how Chainlinks CCIP 
works and how you can use it to transfer messages across blockchains.

I have written a blog post that explains the entire project in detail 
[here](https://gat786.hashnode.dev/introduction-to-chainlink-ccip-and-a-quick-demo)

And I have created a video that will demonstrate how it works [here]()


## Supported Networks by CCIP

https://docs.chain.link/ccip/supported-networks


## How to run the demo

### Prerequisites

1. Create the .env file with approriate values. You can use the .env_example file as a template.
    ```
    # SENDER AND RECEIVER URLS are RPC Endpoints for 
    # sender and receiver chains
    SENDER_URL=
    RECEIVER_URL=
    # Private key is the private key of account which you own
    # and you wish to use to deploy the contracts and interact with them
    # you need to have native tokens and LINK tokens on both chains 
    # at this address
    PRIVATE_KEY=

    # Sender Router Contract is Chainlinks Router Contract Address on 
    # Sender chain
    SENDER_ROUTER_CONTRACT=
    # Sender Link Contract is LINK Contract Address on 
    # Sender chain
    SENDER_LINK_CONTRACT=
    # Receiver Router Contract is Chainlinks Router Contract Address on 
    # Receiver chain
    RECEIVER_ROUTER_CONTRACT=
    # Each chain that is supported by Chainlinks CCIP has its own selector
    # you need your destination chain address here
    DESTINATION_CHAIN_SELECTOR=

    # You can set these after deployment of Actual contracts
    # you dont need to worry about it in beginning.
    # Address of Sender contract you just deployed
    SENDER_CONTRACT_ADDRESS=
    # Address of Receiver contract you just deployed.
    RECEIVER_CONTRACT_ADDRESS=
    ```

2. Install the dependencies

    ```bash
    npm install
    ```

3. Deploy the sender smart contracts

    ```bash
    npx hardhat run scripts/deploy-sender.ts --network sender
    ```

4. Deploy the receiver smart contracts    
    ```bash
    npx hardhat run scripts/deploy-receiver.ts --network receiver
    ```

5. Send a message from sender to receiver
    ```bash
    npx hardhat run scripts/send-message.ts --network sender
    ```

6. Read the message sent from sender to receiver
    ```bash
    npx hardhat run scripts/receive-message.ts --network receiver
    ```
