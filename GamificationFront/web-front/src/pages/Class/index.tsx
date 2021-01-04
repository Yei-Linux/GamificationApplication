import * as React from 'react';
import { useEffect, useRef } from 'react';
import Video from '../../components/Video';
import { ClassContainer } from './class.styled';
import { useLocation } from "react-router-dom";

export interface IClassPageProps {

}

const ClassPage = () => {
    let location = useLocation();
    const childRef = useRef();

    useEffect(()=>{
        console.log(location);
    });

    return (
        <ClassContainer>
            <Video urlVideo={""} ref={childRef} />

        </ClassContainer>
    );
}

export default ClassPage;