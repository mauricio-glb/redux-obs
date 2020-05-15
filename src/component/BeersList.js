import React from 'react';

import './beer-list.scss';

export function BeerList(props) {
    return (
        <ul className="beer-list">
            { props.beers.map(beer => {
                return (
                    <li key={beer.id} className="beer-item">
                        <figure>
                            <img alt={beer.name} src={beer.image_url} />
                        </figure>
                        <div>
                            <h3>{beer.name}</h3>
                        </div>
                    </li>
                )
            }
            )}
        </ul>
    );
}
