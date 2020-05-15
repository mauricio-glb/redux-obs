import {ajax} from 'rxjs/ajax';
import { tap, ignoreElements, map, switchMap, debounceTime, filter } from 'rxjs/operators';
import { fetchFullfilled, SEARCH, setStatus } from '../reducers/beearsActions';
import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';

const API = 'https://api.punkapi.com/v2/beers';
const search = (term) => `${API}?beer_name=${encodeURIComponent(term)}`;

export function fetchBeersEpic(action$) {

    return action$.pipe(
        ofType(SEARCH),
        debounceTime(750),
        filter(({payload}) => payload.trim() !== ''),
        switchMap(({payload})=> {
            return concat(
                of(setStatus('pending')),
                ajax.getJSON(search(payload)).pipe(
                    map(resp => fetchFullfilled(resp))
                )
            )
        })
    );
}