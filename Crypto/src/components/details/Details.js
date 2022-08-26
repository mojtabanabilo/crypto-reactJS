import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import "./Details.css";

window.stop();

const Details = () => {
    
    const state = useSelector(state => state.selectItem);
    const id = useParams();
    const newData = state.find(i => i.id === id.id);
    const navigator = useNavigate();

    return (
        <section>
            <main>
                <div className='header'>
                    <img src={newData.image} alt='logo'/>
                    <h1>{id.id} ({`${newData.symbol}`})</h1>
                </div>
                <div className='info'>
                    <div className='info-1'>
                        <p>ath(all-time high): {newData.ath}</p>
                        <p>ath change percentage: {newData.ath_change_percentage}</p>
                        <p>ath date: {newData.ath_date}</p>
                        <p>atl(all time low): {newData.atl}</p>
                        <p>atl change percentage: {newData.atl_change_percentage}</p>
                        <p>atl date: {newData.atl_date}</p>          
                        <p>circulating supply: {newData.circulating_supply}</p>
                        <p>current price: {newData.current_price}</p>
                        <p>high 24h: {newData.high_24h}</p>
                    </div>
                    <div className='info-2'>            
                        <p>last updated: {newData.last_updated}</p>
                        <p>low 24h: {newData.low_24h}</p>
                        <p>market cap: {newData.market_cap}</p>            
                        <p>market cap change 24h: {newData.market_cap_change_24h}</p>
                        <p>market cap change percentage 24h: {newData.market_cap_change_percentage_24h}</p>
                        <p>market cap rank: {newData.market_cap_rank}</p>        
                        <p>price change 24h: {newData.price_change_24h}</p>
                        <p>price change percentage 24h: {newData.price_change_percentage_24h}</p>
                        <p>total supply: {newData.total_supply}</p>          
                        <p>total volume: {newData.total_volume}</p>
                    </div>
                </div>
            </main>
            <button onClick={() => navigator("/")}>Back</button>
        </section>
    );
};

export default Details;