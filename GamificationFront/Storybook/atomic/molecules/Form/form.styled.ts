import styled from '@emotion/styled';

export const FormWrapper = styled.div<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: "white";
    width: 450px;
    padding: 25px;
    border-radius: 25px;
`
export const FormBody = styled.div<{}>`
    width:100%;
    padding:0px 12px;
`
export const BoxField = styled.div<{}>`
    margin-bottom:8px;
`
export const BoxLabel = styled.div<{}>`
    padding: 0.75rem 0.75rem 0.75rem 0;
`
export const BoxInput = styled.div<{}>`
    input {
        width: -webkit-fill-available;
    }
`

export const FormFooter = styled.div<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
`