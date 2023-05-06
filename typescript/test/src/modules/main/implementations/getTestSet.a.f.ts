import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'

import * as g_pub from "../../../../../pub"
import * as a_pts from "lib-proto-typesystem"

import { $ as d_data } from "../../../data/simple.data"

import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {

    g_pub.$b.generateTypesystem()(
        {
            'path': pd.a([$.testDirectory, "Foo.ts"]),
            'data': a_pts.$b.resolve()(d_data),
        },
        null,
    )
    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}