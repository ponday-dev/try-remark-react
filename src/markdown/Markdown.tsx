import React, { useMemo } from 'react';
import remark from 'remark';
import { Element } from './element';
import { convertElement } from './converter';

type Props = {
    raw: string,
};

export const Markdown: React.FC<Props> = React.memo(({ raw }) => {
    const parse = useMemo(() => remark().parse, []);
    const ast = useMemo(() => parse(raw), [raw, parse]);
    console.log(ast);
    const element = useMemo(() => convertElement(ast), [ast]);
    console.log(element);

    return (
        <ExpandElement element={element} />
    );
})

const ExpandElement: React.FC<{ element: Element }> = ({ element }) => {
    const { Component, children, ...props } = element;

    return (
        <>
        {children
            ? (<Component {...props}>
                {children.map((child, index) => <ExpandElement key={index} element={child} />)}
               </Component>
            ): <Component {...props} />
        }
        </>
    )
}