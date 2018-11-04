/* tslint:disable */
// Generated using typescript-generator version 2.7.447 on 2018-11-04 14:28:24.

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
    pageable?: Pageable;
    first?: boolean;
    last?: boolean;
}

export interface Pageable {
    offset?: number;
    sort?: any;
    unpaged?: boolean;
    pageSize?: number;
    paged?: boolean;
    pageNumber?: number;
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
