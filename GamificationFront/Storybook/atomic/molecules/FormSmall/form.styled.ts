import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
export const CustomBox = styled.form<{}>`
display:flex;
justify-content:center;
align-items:center;
// height:100vh;
`

export const CustomForm = styled.div<{}>`
display: flex;
justify-content: center;
align-items: center;
background:${theme.palette.secondary};
max-height: 100%;
padding: 25px 40px;
width: 500px;
border-radius: 25px;
box-sizing:border-box;

`

export const FormWrapper = styled.div<{}>`
display: flex;
justify-content: center;
align-items: center;
background: ${theme.palette.white};
width: 450px;
padding: 25px;
border-radius: 25px;
`
export const FormBody = styled.div<{}>`
width:100%;
padding:0px 12px;
// display:flex;
// flex-direction:column;
// align-items:center;

`
export const BoxField = styled.div<{}>`
margin-bottom:8px;

`
export const BoxLabel = styled.div<{}>`
padding: 0.75rem 0.75rem 0.75rem 0;

`
export const BoxInput = styled.div<{}>`
div {
    margin-bottom:0;
};
input {
    width:20rem;
}

`
export const BoxButton = styled.div<{}>`
margin-top:14px;
display:flex;
align-items:center;
justify-content:space-between;
`