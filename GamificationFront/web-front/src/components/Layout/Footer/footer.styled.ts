import tw from "twin.macro";

export const FooterContainer = tw.div`
    flex
    flex-col
    flex-grow
    bg-mainvariant
    items-center
`

export const FooterContent = tw.footer`
    flex
    flex-col
    items-center
    justify-center
    p-6
`

export const FooterText = tw.p`
    font-condensed
    font-ptsans
    w-auto
    h-auto
    text-white
    py-2
`

export const FooterSubtext = tw.p`
    font-condensed
    font-ptsans
    text-white
    text-xs
    py-2
`

export const FooterInformation = tw.p`
    text-2xl
    text-center
    font-semibold
    font-condensed
    font-ptsans
    w-auto
    h-auto
    text-white
    py-2
`