import React from "react";
import Card from "storybook-gamification9/molecules/CardMain";
import Label from "storybook-gamification9/atomic/atoms/Label";
import {
  EShadowType,
  EWithType,
  EBorderType,
  EFontWeight,
} from "storybook-gamification9/core/domain/enums";
import { ProfileContainer } from "./profile.styled";

export interface IProfileProps {}

const Profile = ({}: IProfileProps) => {
  return (
    <ProfileContainer>
      <Card
        isCustom={true}
        backgroundColor={"#adeecf"}
        shadowType={EShadowType.MEDIUM}
        borderType={EBorderType.ROUNDED}
        widthType={EWithType.LARGE}
      >
        <Label
          fontWeight={EFontWeight.BOLD}
          textColor={"white"}
          children={`MI PERFIL`}
          borderColor={"transparent"}
          backgroundColor={"transparent"}
          hasPadding={true}
          isLink={false}
        />
      </Card>

      <Card
        cover={
            <img
            style={{width: '100px', borderRadius: '2em'}}
            src={
                "https://res.cloudinary.com/teepublic/image/private/s--Y5DOrT6I--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1540143169/production/designs/3360948_0.jpg"
            }
            ></img>
        }
        isCustom={false}
        title={"Jesus Alvan"}
        description={"Estudiante de 10cimo ciclo"}
        backgroundColor={"white"}
        shadowType={EShadowType.MEDIUM}
        borderType={EBorderType.ROUNDED}
        widthType={EWithType.LARGE}
      >

      </Card>
    </ProfileContainer>
  );
};

export default Profile;
