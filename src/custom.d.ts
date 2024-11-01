declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '@utils/*';
declare module '@components/*';

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
