import { modularScale } from "./modularScale"
import { BaselineSettings, FontDeclaration } from "./interface"

export function baseline(
    n: number = 0,
    { capHeight, fontFamily }: FontDeclaration,
    { lineHeight = 2, below = 2, rootSize, scales }: BaselineSettings
): [number, number] {
    let getSize = modularScale(n, scales)
    let shift =
        ((getSize / 2) * ((lineHeight * rootSize) / getSize - capHeight)) /
            rootSize +
        0.00001
    let push = below - shift

    return [shift, push]
}
