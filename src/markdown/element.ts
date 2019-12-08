import { FunctionComponent } from 'react';

export type Element = {
    Component: FunctionComponent<any>,
    children?: Element[],
}
