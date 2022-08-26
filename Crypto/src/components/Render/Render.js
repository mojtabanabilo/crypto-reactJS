import React, { useState } from 'react';

// components
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Donut from '../chartJS/Chart';
import Coins from '../coins/Coins';
import Footer from '../footer/Footer';

const Render = () => {

    const [search, setSearch] = useState("");

    return (
        <>
            <Header userData={search} userDataSet={setSearch}/>
            <Banner />
            <Donut />
            <Coins filterData={search}/>
            <Footer />
        </>
    );
};

export default Render;