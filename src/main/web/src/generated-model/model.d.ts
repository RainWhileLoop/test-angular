/* tslint:disable */
// Generated using typescript-generator version 2.7.447 on 2018-11-04 17:16:56.

export interface Page<T> extends Slice<T> {
    totalPages?: number;
    totalElements?: number;
}

export interface Slice<T> extends Streamable<T> {
    size?: number;
    content?: T[];
    number?: number;
    sort?: any;
    numberOfElements?: number;
    last?: boolean;
    first?: boolean;
    pageable?: Pageable;
}

export interface Product {
    id?: number;
    name?: string;
    code?: string;
    description?: string;
}

export interface Pageable {
    offset?: number;
    sort?: any;
    paged?: boolean;
    pageNumber?: number;
    pageSize?: number;
    unpaged?: boolean;
}

export interface Streamable<T> extends Supplier<Stream<T>> {
    empty?: boolean;
}

export interface Supplier<T> {
}

export interface Stream<T> extends BaseStream<T, Stream<T>> {
}

export interface BaseStream<T, S> extends AutoCloseable {
    parallel?: boolean;
}

export interface AutoCloseable {
}
