import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_protots from "lib-proto-typesystem/dist/submodules/resolved"

export namespace N {}

export namespace T {
    
    export namespace GenerateTypesystemParameters {
        
        export type data = g_protots.T.Root
        
        export type path = g_common.T.Path
    }
    
    export type GenerateTypesystemParameters = {
        readonly 'data': g_protots.T.Root
        readonly 'path': g_common.T.Path
    }
}