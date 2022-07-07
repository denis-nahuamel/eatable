export const background = `
    background: #BCBABA;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0
`

export const container = `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`
export const containerColumn = `
    display: flex;
    flex-direction: column;
`
export const contColumnCenter = `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const containerCard = `
    ${containerColumn};
    background-color: #FFFFFF;
    margin: 50px;
    gap: 5px;
    padding: 15px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
`
export const labelInput = `
    ${containerColumn};
    gap: 5px;
`
export const buttonLogin = `
    ${container};
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 10px;
`