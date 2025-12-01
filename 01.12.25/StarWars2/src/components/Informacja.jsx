import React, { useContext } from 'react';
import { NazwaMotywu } from '../App';

function Informacja() {
    const { stronamocy } = useContext(NazwaMotywu);

    return (
        <div>
            <p>
                Aktualny motyw to: {stronamocy}
                <br />
                {stronamocy === 'ciemna' ? 'Przemyśl swoje życie' : 'Jesteś na dobrej ścieżce'}
            </p>
        </div>
    );
}

export default Informacja;
