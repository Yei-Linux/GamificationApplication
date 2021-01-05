import React from 'react';

import { TitleContainer } from "./title.styled";

interface ITitleProps {
    children : React.ReactNode
}

const Title = ({children} : ITitleProps) => {
    return (
        <TitleContainer>
            {children}
        </TitleContainer>
    );
}

export default Title;