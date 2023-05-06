import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.deprecated"
import { $ as glossary } from "./glossary.deprecated"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "model": external("lib-proto-typesystem/dist/submodules/resolved"),
                "fp": external("lib-fountain-pen"),
            }),

        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
                "typescript": external("res-typescript"),
                "foreach": external("res-pareto-foreach")
            }),
        },
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}