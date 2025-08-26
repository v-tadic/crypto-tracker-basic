async function getData() {
    try{
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,tether,ripple&vs_currencies=usd&include_market_cap=true&include_24hr_change=true');
        const data = await response.json();
        if(response.ok){

            function priceChangeColor(elementId, value){
                let roundValue = (Math.round(value * 100) / 100)
                let displayValue = roundValue + '%';

                document.getElementById(elementId).innerHTML = displayValue;

                if(roundValue < 0){
                    document.getElementById(elementId).style.color = 'red';
                } else {
                    document.getElementById(elementId).style.color = 'green';
                }
            }

            console.log(data);
            //bitcoin
            document.getElementById('BTCprice').innerHTML = (data.bitcoin.usd + ' $');
            priceChangeColor('BTCchange', data.bitcoin.usd_24h_change);
            document.getElementById('BTCmarket').innerHTML =  (Math.round(data.bitcoin.usd_market_cap * 100) / 100 + ' $')

            //Etherium
            document.getElementById('ETHprice').innerHTML = (data.ethereum.usd + ' $');
            priceChangeColor('ETHchange', data.ethereum.usd_24h_change);
            document.getElementById('ETHmarket').innerHTML =  (Math.round(data.ethereum.usd_market_cap * 100) / 100 + ' $')

            //Solana
            document.getElementById('SOLprice').innerHTML = (data.solana.usd + ' $');
            priceChangeColor('SOLchange', data.solana.usd_24h_change);
            document.getElementById('SOLmarket').innerHTML =  (Math.round(data.solana.usd_market_cap * 100) / 100 + ' $')

            //XRP
            document.getElementById('XRPprice').innerHTML = (data.ripple.usd + ' $');
            priceChangeColor('XRPchange', data.ripple.usd_24h_change);
            document.getElementById('XRPmarket').innerHTML =  (Math.round(data.ripple.usd_market_cap * 100) / 100 + ' $')

            //Tether
            document.getElementById('USDTprice').innerHTML = (data.tether.usd + ' $');
            priceChangeColor('USDTchange', data.tether.usd_24h_change);
            document.getElementById('USDTmarket').innerHTML =  (Math.round(data.tether.usd_market_cap * 100) / 100 + ' $')

            //BNB 
            document.getElementById('BNBprice').innerHTML = (data.binancecoin.usd + ' $');
            priceChangeColor('BNBchange', data.binancecoin.usd_24h_change);
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

