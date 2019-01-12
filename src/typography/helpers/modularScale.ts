import { ModularScaleSettings } from "./interface"

const defaultModularScaleSettings: ModularScaleSettings = {
    base: [16, 28],
    ratio: 1.25
}

export function modularScale(
    n: number,
    settings: ModularScaleSettings = defaultModularScaleSettings
): number {
    let { base, ratio } = settings

    if (!Array.isArray(base)) {
        return Math.pow(ratio, n) * base
    }
    const baseHigh = Math.pow(ratio, 1) * base[0]
    for (let i = 1; i < base.length; i++) {
        while (base[i] / 1 < base[0] / 1) {
            base[i] = Math.pow(ratio, 1) * base[i]
        }

        while (base[i] / 1 >= baseHigh) {
            base[i] = Math.pow(ratio, -1) * base[i]
        }
    }

    let rBase = Math.round(
        (n / base.length - Math.floor(n / base.length)) * base.length
    )

    return Math.pow(ratio, Math.floor(n / base.length)) * base[rBase]
}
