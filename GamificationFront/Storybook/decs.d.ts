declare module 'twin.macro'
declare module "*.svg" {
    const content: any;
    export default content;
}
declare module "module" {
    export = NodeJS.Module;
}