import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"
import * as g_this from "./glossary"
import * as g_typesystem from "../submodules/typesystem"

export namespace D {
    
    export type generateTypesystem = {
        readonly 'createFile': g_fp.SYNC.A.P.CreateFile
        readonly 'generateTypesystem': g_typesystem.SYNC.A.P.Generate
    }
}

export namespace A {
    
    export type generateTypesystem = ($d: D.generateTypesystem, ) => g_this.SYNC.A.P.GenerateTypesystem
}

export type API = {
    readonly 'generateTypesystem': A.generateTypesystem
}