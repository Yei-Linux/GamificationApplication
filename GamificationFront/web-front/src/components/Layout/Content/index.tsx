import React from 'react';

import { ContentContainer } from "./maincontet.styled";

interface IContentProps {
    children : React.ReactNode
}

const Content = ({children} : IContentProps) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    );
}

export default Content;