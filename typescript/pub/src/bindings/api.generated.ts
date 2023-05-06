import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace D {
    
}

export namespace A {
    
    export type generateTypesystem = () => g_main.SYNC.A.P.GenerateTypesystem
}

export type API = {
    readonly 'generateTypesystem': A.generateTypesystem
}