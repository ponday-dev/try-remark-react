import { Node, Parent, Literal } from 'unist';

export function isParent(node: Node): node is Parent {
    return 'children' in node;
}

export function isLiteral(node: Node): node is Literal {
    return 'value' in node;
}
