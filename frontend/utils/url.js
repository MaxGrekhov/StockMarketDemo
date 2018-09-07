import { parse, stringify } from 'query-string';

export default class Url {
    constructor(location) {
        this.pathname = location.pathname;
        this.query = parse(location.search, { arrayFormat: 'bracket' });
    }

    toLocation() {
        const location = new Location();
        location.pathname = this.pathname;
        location.search = '?' + stringify(this.query, { arrayFormat: 'bracket' })
    }
}