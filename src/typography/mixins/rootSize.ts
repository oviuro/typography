import { breakpoints } from "./breakpoints"

export function rootSize(n: number[]): string {
    let str: string = `font-size: ${(n[0] / 16) * 100}%;`
    breakpoints(index => {
        return `font-size: ${(n[index] / 16) * 100}%;`
    })
    return str
}
