

const run = async () => {
    const [owner, randos] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await contractFactory.deploy();
    waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract Owner:", owner.address);
    console.log("Contract Random:", randos.address);
    let waveCount;
    waveCount = await waveContract.getTotal();

    let waivrxn = await waveContract.connect(randos).wave();
    await waivrxn.wait();
    waveCount = await waveContract.getTotal();
}


const runMain = async ()=> {
    try {
        await run();
        process.exit(0);

    } catch (err){
        console.log('runMain Failed' + err);
        process.exit(1);
    }
}

runMain();