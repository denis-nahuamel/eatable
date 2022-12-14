export const background = `
    background: #F6F6F9;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0
`
export const contStart = `
    display: flex;
    justify-content: flex-start;
`

export const contStartW100 = `
    ${contStart};
    width: 100%;
`
export const basicContainer = `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
export const container = `
    ${basicContainer};
    justify-content: center;
`
export const contCenterCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const containerColumn = `
    display: flex;
    flex-direction: column;
`
export const contColumnAlign = `
    ${containerColumn};
    align-items:center;

`
export const containerRow = `
    display: flex;
    flex-direction: row;
`
export const contRowBetween = `
    ${containerRow};
    justify-content: space-between;
`
export const contRowBetweenW100 = `
    ${contRowBetween};
    width: 100%;
`
export const contRowAround = `
    ${containerRow};
    background: #F6F6F9;
    justify-content: space-around;
`
export const contRowAroundFullWidth = `
    ${contRowAround};
    width: 100%
`
export const contColumGap = `
    ${containerColumn};
    gap: 20px;
`
export const contColumnCenter = `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const contRowCenter = `
    ${containerRow}
    align-items: center;
`
export const contRowCenterGap = `
    ${contRowCenter};
    gap:20px;
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

export const inputSearch =`
    background-color: #F6F6F9;
    height: 23px;
`
export const containerGap = `
    ${basicContainer};
    gap:8px;
    justify-content: space-around;
`
export const inputBar = `
    ${containerGap};
    margin: 15px 0;
`
export const line = `
    width: 100%;
    border-bottom: 1px solid black;
    opacity: 0.5;
`
export const footer = `
    position: fixed;
    bottom: 0px;
    width: 100%;
`