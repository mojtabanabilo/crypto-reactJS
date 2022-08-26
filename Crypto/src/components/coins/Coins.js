import React, { useEffect } from 'react';
import { useSelector , useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchUsers } from '../redux/coins/coinsAction';

// style
import "./Coins.css";
import styles from "./Coins.module.css";

// gif
import load from "../../assets/Spinner.gif"

const Coins = ({filterData}) => {
    const coins = useSelector(state => state.selectItem);
    const dispatch = useDispatch();
    const searchBar = coins.filter(item => item.name.toLowerCase().includes(filterData.toLowerCase()))

    useEffect(() => {
        if(!coins.length) dispatch(fetchUsers())
    }, [])

    return (
        <div className='container'>
            <h1>Coins</h1>
            <article>
                {
                    !coins.length ?
                    <img src={load} alt="loading"/> :
                    searchBar.map(i => <main key={i.id} className="coins">
                        <img src={i.image} alt="symbol"/>
                        <h3>({i.symbol})</h3>
                        <h3>{i.name}</h3>
                        <p><strong>{i.current_price} $</strong></p>
                        <p className={i.price_change_percentage_24h > 0 ? styles.positive : styles.negative}><strong>{i.price_change_percentage_24h}</strong></p>
                        <p><strong>{i.market_cap}</strong></p>
                        <Link to={`/${i.id}`}><strong>Details</strong></Link>
                    </main>)
                }
                {
                    !searchBar.length && <section className='alert'>
                        <h1>Not Found</h1>
                    </section>
                }      
            </article>
        </div>
    );
};

export default Coins;