import { modularScale } from "../helpers"
import { rootFontSizes, scales } from "../variables"
import { breakpoints } from "./breakpoints"

export function modularFontSize(n: number): string {
    let str: string = `font-size: ${modularScale(n, scales[0]) /
        rootFontSizes[0]}rem;`
    breakpoints(index => {
        return `
            font-size: ${modularScale(n, scales[index]) /
                rootFontSizes[index]}rem;
        `
    })
    return str
}
