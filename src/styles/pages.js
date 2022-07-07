import { container, contColumnCenter } from "./utils";
export const card = `
    ${contColumnCenter};
    width: 156px;
    height: 250px;
    left: 41px;
    top: 2px;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
`
export const cardFood = `
    ${card};
    background: white;
`;
export const cardFoodDetail = `
    ${card};
    background: #F6F6F9;
`
export const imageFood = `
    width: 130px;
    height: 130px;
    border-radius: 75px;
`;
export const imageFoodDetail = `
    width: 240px;
    height: 240px;
    border-radius: 155px;
`
export const containerFood = `
    ${container};
    gap: 20px;
    padding: 15px 0;
    height: 480px;
    overflow-y: auto;
`
export const list = `
list-style: none;
display: flex;
width: 100%;
    overflow-x: auto;
`
export const listMenu = `
    ${list};
    justify-content: space-around;
    align-items: center;
`
export const listInline = `
    ${list};
    gap: 4rem;
`
export const listInlineEl = `
    display: inline;
    cursor: pointer;
    
`