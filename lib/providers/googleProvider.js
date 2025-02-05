import AbstractProvider from './provider';
export default class GoogleProvider extends AbstractProvider {
    constructor() {
        super(...arguments);
        //   searchUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
        this.searchUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    }
    endpoint({ query }) {
        const params = { input: query, components: 'country:us' };
        return this.getUrl(this.searchUrl, params);
    }
    parse(result) {
        return result.data.results.map((r) => ({
            x: r.geometry.location.lng,
            y: r.geometry.location.lat,
            label: r.formatted_address,
            bounds: [
                [r.geometry.viewport.southwest.lat, r.geometry.viewport.southwest.lng],
                [r.geometry.viewport.northeast.lat, r.geometry.viewport.northeast.lng],
            ],
            raw: r,
        }));
    }
}
//# sourceMappingURL=googleProvider.js.map