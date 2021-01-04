import React, { Fragment, useEffect } from 'react';
import RoadMap from '../../components/RoadMap';
import { useHistory, useLocation } from "react-router-dom";
import { ClassResponse } from '../../models/roadmap';
export interface IRoadMapPage {
}

const RoadMapPage = ({} : IRoadMapPage) => {
    let history = useHistory();
    let location: any = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);

    const handleCourseSelect = ( classContent : ClassResponse ) : void => {
        history.push({
            pathname: '/class',
            state: { classContent }
        });
    }

    return (
        <Fragment>
            <RoadMap courseId={location.state.courseId} handleCourseSelect={handleCourseSelect}/>
        </Fragment>
    );
}

export default RoadMapPage;