import { breaks } from "../variables"

export function breakpoints(content: (index: number) => string): string {
    let str: string = ""
    for (let i: number = 1; i < breaks.length; i++) {
        str += `
			@media screen and (min-width: ${breaks[i] / 16}em) {
				${content(i)}
			}
		`
    }
    return str
}
