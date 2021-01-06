import React from "react";
import { useHistory } from "react-router-dom";

import {
  HeaderContainer,
  LogoContainer,
  HeaderItems,
  HeaderItem,
  HeaderItemText,
  BreakPoint,
  ImageContainer,
} from "./header.styled";

interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
  let history = useHistory();

  const handleScrollPageByMenuItem = (e: any) => {
    let target: string = e.target.classList[0]
    let element = document.getElementById(target)
    if (element) {
      let targetOffset = element?.offsetTop
      window.scroll({
        top: targetOffset,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  const redirectPage = (link : string) => {
    history.push(link);
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <ImageContainer src={"https://res.cloudinary.com/teepublic/image/private/s--Y5DOrT6I--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1540143169/production/designs/3360948_0.jpg"}>
        </ImageContainer>
      </LogoContainer>

      <HeaderItems>
        <HeaderItem>
          <HeaderItemText
            className="courses"
            onClick={(e: any) => redirectPage("/courses")}
          >
            Courses
          </HeaderItemText>
        </HeaderItem>
        <BreakPoint>
          <HeaderItem>
            <HeaderItemText
              className="dailytask"
              onClick={(e: any) => redirectPage("/courses")}
            >
              Tareas
            </HeaderItemText>
          </HeaderItem>
        </BreakPoint>
        <HeaderItem>
          <HeaderItemText
            className="profile"
            onClick={(e: any) => redirectPage("/courses")}
          >
              Perfil
          </HeaderItemText>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header