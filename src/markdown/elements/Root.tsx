import React, { FunctionComponent, ComponentProps } from 'react';

export const Root: FunctionComponent<ComponentProps<'div'>> = ({ children, ...props }) => {
    return (
        <div className="md-root" {...props}>
            {children}
        </div>
    );
}