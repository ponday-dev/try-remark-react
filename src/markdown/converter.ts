import { Node } from 'unist';

import { Element } from './element';
import { Root, convertHeading, HeadingNode } from './elements';

export function convertElement(node: Node): Element {
    switch(node.type) {
        case 'root':
            return {
                Component: Root,
                children: (node as any).children.map((child: any) => convertElement(child))
            }
        case 'heading':
            return convertHeading(node as HeadingNode);
        default:
            throw new Error('unsupported type');
    }
}
