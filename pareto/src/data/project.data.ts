import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as api } from "./main/api.data"
import { $ as glossary } from "./main/glossary.data"
import { $ as d_bindings } from "./bindings/moduledefintion.data"
import { $ as d_typesystem } from "./submodules/typesystem/module.data"

import { external, submodule, tempSubmodule, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "the typesystem for the imperative Pareto language",
    'license': "TBD",

    'dependencies': d({
        "res-pareto-resolve": null,
        "res-pareto-foreach": null,
        "res-pareto-collation": null,
        "res-typescript": null,
        "lib-fountain-pen": null,
        "lib-proto-typesystem": null,
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'root': glossary,
                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "protots": external("lib-proto-typesystem/dist/submodules/resolved"),
                        "fp": external("lib-fountain-pen"),
                    }),
                },
                'api': {
                    'root': api,
                    'imports': d({
                        "this": this_(),
                        "typesystem": submodule("typesystem"),
                        "fp": external("lib-fountain-pen"),
                    }),
                },
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({
            "typesystem": d_typesystem,
        }),
        'bindings': [true, {
            'definition': d_bindings,
            'implementation': ['typescript', null],
        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-proto-typesystem": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },

                    },
                    'imports': d({}),
                },
                'api': {
                    'imports': d({}),
                    'root': {
                        'algorithms': d({}),
                    },
                }

            },
            'imports': d({}),
        }
    }],
}