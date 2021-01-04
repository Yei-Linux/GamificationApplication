import tw from "twin.macro"
import styled from "@emotion/styled";

export const HeaderContainer  = tw.div`
    fixed
    flex
    justify-end
    bg-gray-200
    w-full
    p-5
    z-50
    bg-transparentvariant
    justify-between
    flex-row-reverse
`

export const LogoContainer = tw.div`
    w-auto
    inline-block
`

export const ImageContainer = styled.img`
    width: 60px;
    border-radius: 2em;
`

export const HeaderItems = tw.ul`
    flex
    justify-end
`

export const HeaderItem = tw.li`
    mr-3
    list-none
    flex
    items-center
`

export const HeaderItemText = tw.a`
    inline-block
    py-1
    px-3
    border-b-4
    text-mainvariant
    font-semibold
    hover:cursor-pointer
`

export const BreakPoint = styled.span`
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
        display: none;
    }
`