import React, { Fragment } from 'react';
import RoadMap from '../../components/RoadMap';
import { useHistory } from "react-router-dom";
import { ClassResponse } from '../../models/roadmap';
export interface IRoadMapPage {
}

const RoadMapPage = ({} : IRoadMapPage) => {
    let history = useHistory();

    const handleCourseSelect = ( classContent : ClassResponse ) : void => {
        history.push({
            pathname: '/class',
            state: { classContent }
        });
    }

    return (
        <Fragment>
            <RoadMap courseId={"511a2cf7-c4df-4d02-bc80-8a5a38a1970b"} handleCourseSelect={handleCourseSelect}/>
        </Fragment>
    );
}

export default RoadMapPage;