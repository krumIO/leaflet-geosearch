import AbstractProvider, { LatLng, ParseArgument, SearchResult } from './provider';
export interface RequestResult {
    results: RawResult[];
    status: string;
}
export interface RawResult {
    address_components: {
        long_name: string;
        short_name: string;
        types: string[];
    }[];
    formatted_address: string;
    geometry: {
        location: LatLng;
        location_type: string;
        viewport: {
            northeast: LatLng;
            southwest: LatLng;
        };
    };
    place_id: string;
    plus_code: {
        compound_code: string;
        global_code: string;
    };
    types: string[];
}
export default class GoogleProvider extends AbstractProvider<RequestResult, RawResult> {
    searchUrl: string;
    endpoint({ query }: any): string;
    parse(result: ParseArgument<RequestResult>): SearchResult<RawResult>[];
}
