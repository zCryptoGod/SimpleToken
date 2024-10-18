# SimpleToken DApp
A basic decentralized application that allows users to mint and transfer tokens using a simple Ethereum smart contract. This project is built for the Base project hackathon and showcases the fundamental interactions between a user and a smart contract using Web3.

Project Overview
SimpleToken is a minimal ERC-20-like token that lets users mint tokens and transfer them to other Ethereum addresses. The goal of this project is to demonstrate a simple smart contract and DApp interaction, allowing participants to explore decentralized token transactions on the blockchain.

Features
Mint Tokens: Users can mint their own tokens.
Transfer Tokens: Users can transfer tokens to other addresses on the network.
Web3 Integration: Frontend interacts with the smart contract using Web3.js and MetaMask.
Smart Contract
The smart contract, SimpleToken.sol, is written in Solidity and allows users to:

Mint Tokens: Increase the total supply of tokens and assign them to the user's address.
Transfer Tokens: Transfer a specified amount of tokens to another address.
Smart Contract Functions:
mint(uint256 _amount): Mints the specified amount of tokens.
transfer(address _to, uint256 _amount): Transfers tokens to another address.
Installation & Setup
Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MetaMask browser extension (or any other Web3 provider)
Ganache or any other local Ethereum blockchain (optional for testing)
Steps to Run Locally
Clone the Repository:

bash
Copy code
git clone https://github.com/YOUR_USERNAME/SimpleToken-DApp.git
cd SimpleToken-DApp
Install Dependencies:

If you're using a framework like Truffle (for deploying smart contracts) or a local Web3 environment, ensure you have the required dependencies installed. For frontend, Web3.js is already included via CDN.

Deploy Smart Contract:

Use Remix or a tool like Truffle to deploy the SimpleToken.sol contract on a test network (e.g., Ropsten or Rinkeby) or a local Ethereum environment (e.g., Ganache).

Update Smart Contract Address:

Once the contract is deployed, update the contract address in app.js:

javascript
Copy code
const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
Open index.html:

Open the index.html file in your browser and connect your MetaMask wallet.

Interact with the DApp:

Mint Tokens: Enter the amount of tokens to mint and click "Mint Tokens."
Transfer Tokens: Enter the recipient's address and the amount to transfer, then click "Transfer Tokens."
Technologies Used
Solidity: For writing the smart contract.
Web3.js: For interacting with the Ethereum blockchain from the frontend.
MetaMask: For handling Ethereum transactions on the frontend.
JavaScript, HTML: For the user interface.
Future Enhancements
Token Balance Display: Add a feature to display the user's token balance on the frontend.
Transaction History: Show a history of token transfers made by the user.
Network Compatibility: Extend compatibility with multiple Ethereum networks like Base, Ropsten, etc.
License
This project is licensed under the MIT License.

Contributing
Feel free to open issues or pull requests to improve this project.
