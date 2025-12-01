import React, { useContext } from 'react';
import { NazwaMotywu } from '../App';

function Informacja() {
    const motyw = useContext(NazwaMotywu);

    return (
        <div>
            <p>Aktualny motyw: {motyw}</p>
        </div>
    );
}

export default Informacja;
