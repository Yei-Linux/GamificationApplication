import React, { Fragment, useEffect, useState } from 'react';
import { GetCourseByStudentResponse } from '../../models/courses';
import { getCoursesByStudent } from '../../services/courses.service';
import { CoursesContainer } from './courses.styled';


import ListItem from "storybook-gamification6/molecules/ListItem";
import { useHistory } from 'react-router-dom';

export interface ICourseProps {
}

const CoursePage= ({} : ICourseProps) => {
    const [courses,setCourses] : any = useState([]);
    let history = useHistory();

    useEffect(()=>{
        handleGetCourses();
    },[]);

    const handleGetCourses = async () : Promise<void> => {
        let data : GetCourseByStudentResponse[] = await getCoursesByStudent();
        data && setCourses(data);
    }

    const handleClickArrow = (courseId : string) : void => {
        history.push({
            pathname: '/roadmap',
            state: { courseId: courseId }
        });
    }

    return (
        <Fragment>
            <CoursesContainer>
                {
                    courses.map((course: GetCourseByStudentResponse) =>(
                        <ListItem textItem={course.name} subTextItem={course.tutor.fullName} onClick={()=>handleClickArrow(course.courseId)}>
                            <img
                            style={{ height: "30px", width: "30px" }}
                            src={"https://icons-for-free.com/iconfiles/png/512/learn+pencil+student+study+icon-1320166024086045076.png"}
                            alt="roundLogo"
                            />
                        </ListItem>
                    ))
                }
            </CoursesContainer>
        </Fragment>
    );
}

export default CoursePage;