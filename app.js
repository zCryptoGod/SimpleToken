let web3;
let contract;
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';
const abi = [
    // Add the ABI from the compiled SimpleToken contract
];

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        document.getElementById('walletAddress').innerText = "Wallet Address: " + accounts[0];
        contract = new web3.eth.Contract(abi, contractAddress);
    } else {
        alert('Please install MetaMask!');
    }
}

async function mintTokens() {
    const amount = document.getElementById('mintAmount').value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.mint(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
    alert('Tokens minted!');
}

async function transferTokens() {
    const to = document.getElementById('transferTo').value;
    const amount = document.getElementById('transferAmount').value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.transfer(to, web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
    alert('Tokens transferred!');
}
