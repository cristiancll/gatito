import React from 'react';
import Services from "./src/screens/Services";
import ShoppingCart from "./src/screens/ShoppingCart";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR.js'
import Routes from "./src/Routes";
import DefaultScreen from "./src/components/DefaultScreen";

export default function App() {
    return (
        <DefaultScreen>
            <Routes/>
        </DefaultScreen>
    );
}

