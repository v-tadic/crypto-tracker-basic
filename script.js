async function getData() {
    try{
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,tether,ripple&vs_currencies=usd&include_market_cap=true&include_24hr_change=true');
        const data = await response.json();
        if(response.ok){
            console.log(data);
            //bitcoin
            document.getElementById('BTCprice').innerHTML = (data.bitcoin.usd + ' $');
            document.getElementById('BTCchange').innerHTML = (Math.round(data.bitcoin.usd_24h_change * 100) / 100 + ' $')
            document.getElementById('BTCmarket').innerHTML =  (Math.round(data.bitcoin.usd_market_cap * 100) / 100 + ' $')

            //Etherium
            document.getElementById('ETHprice').innerHTML = (data.ethereum.usd + ' $');
            document.getElementById('ETHchange').innerHTML = (Math.round(data.ethereum.usd_24h_change * 100) / 100 + ' $')
            document.getElementById('ETHmarket').innerHTML =  (Math.round(data.ethereum.usd_market_cap * 100) / 100 + ' $')

            //Solana
            document.getElementById('SOLprice').innerHTML = (data.solana.usd + ' $');
            document.getElementById('SOLchange').innerHTML = (Math.round(data.solana.usd_24h_change * 100) / 100 + ' $')
            document.getElementById('SOLmarket').innerHTML =  (Math.round(data.solana.usd_market_cap * 100) / 100 + ' $')

            //XRP
            document.getElementById('XRPprice').innerHTML = (data.ripple.usd + ' $');
            document.getElementById('XRPchange').innerHTML = (Math.round(data.ripple.usd_24h_change * 100) / 100 + ' $')
            document.getElementById('XRPmarket').innerHTML =  (Math.round(data.ripple.usd_market_cap * 100) / 100 + ' $')

            //Tether
            document.getElementById('USDTprice').innerHTML = (data.tether.usd + ' $');
            document.getElementById('USDTchange').innerHTML = (Math.round(data.tether.usd_24h_change * 100) / 100 + ' $')
            document.getElementById('USDTmarket').innerHTML =  (Math.round(data.tether.usd_market_cap * 100) / 100 + ' $')

            //BNB 
            document.getElementById('BNBprice').innerHTML = (data.binancecoin.usd + ' $');
            document.getElementById('BNBchange').innerHTML = (Math.round(data.binancecoin.usd_24h_change * 100) / 100 + ' $')
            document.getElementById('BNBmarket').innerHTML =  (Math.round(data.binancecoin.usd_market_cap * 100) / 100 + ' $')

        } else {
            throw new Error('Error Occured!')
        }
    }catch(error){
        console.log(error)
    }
}
 
getData();

// setInterval(getData, 20000)
