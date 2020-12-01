import tw from "twin.macro";

export const generateShadowProps = (twinProp : any) => {
    switch (twinProp) {
        case 'MEDIUM':
            return tw`shadow-md`;
        case 'LARGE':
            return tw`shadow-lg`;
        case 'XLARGE':
            return tw`shadow-xl`;
        default:
            return '';
    }
}

export const generateBorderTypeProps = (twinProp : any) => {
    switch (twinProp) {
        case 'CIRCLE':
            return tw`rounded-circle h-normal w-normal flex items-center justify-center`;
        case 'PILLSHAPE':
            return tw`rounded-full`;
        case 'ROUNDED':
            return tw`rounded-md`;
        case 'NORMAL':
            return tw`rounded-none`;
        default:
            return '';
    }
}

export const generateWidthTypeProps = (twinProp : any) => {
    switch (twinProp) {
        case 'SMALL':
            return tw`w-small`;
        case 'NORMAL':
            return tw`w-normal`;
        case 'MEDIUM':
            return tw`w-48`;
        case 'LARGE':
            return tw`w-64`;
        default:
            return '';
    }
}

export const generateHeightTypeProps = (twinProp : any) => {
    switch (twinProp) {
        case 'SMALL':
            return tw`h-small`;
        case 'NORMAL':
            return tw`h-normal`;
        case 'MEDIUM':
            return tw`h-48`;
        case 'LARGE':
            return tw`h-64`;
        default:
            return '';
    }
}