import * as pd from 'pareto-core-data'

import * as g_llts from "lib-proto-typesystem/dist/submodules/unresolved"

import {
    array,
    ns,
    optional,
    string

} from "lib-proto-typesystem/dist/submodules/unresolved/shorthands"

export const $: g_llts.T.Local__Namespace<pd.SourceLocation> = ns(
    {}, {}, {
        "Foo": array(optional(string()))
    }
)