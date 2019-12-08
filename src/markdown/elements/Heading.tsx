import React, { FunctionComponent } from 'react';
import { Node } from 'unist';

import { isParent, isLiteral } from '../../util';
import { Element } from '../element';

export type HeadingNode = Node & { depth: number };

type Props = {
    level: number,
    text: string,
}

type HeadingElement = Element & Props;

export function convertHeading(node: HeadingNode): HeadingElement {
    const text = isParent(node) && isLiteral(node.children[0]) ? node.children[0].value as string : '';

    return {
        Component: Heading,
        level: node.depth,
        text,
    }
}

export const Heading: FunctionComponent<Props> = ({ text, level }) => {
    return React.createElement(`h${level}`, {}, [text]);
}
