import React from 'react';
import {connect} from 'react-redux';
import { BeerList } from './BeersList';
import { search } from '../reducers/beearsActions';

export function Beers(props) {
    const {data, status, search} = props;
    return (
        <>
            <div>
                <input type="text"
                    placeholder="Search beers"
                    onChange={(evt) => search(evt.target.value)}
                />

                {status === 'pending' && (
                    <span> Loading... </span>
                )}
            </div>
            {status === 'success' && (
                <div>
                    <BeerList beers={data} />
                </div>
            )}
        </>
    );
}

export default connect(state => state.beers, {search})(Beers);