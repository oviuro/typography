import { ModularScaleSettings } from "./ModularScaleSettings"

export interface BaselineSettings {
    lineHeight?: number
    below?: number
    rootSize: number
    scales: ModularScaleSettings
}
