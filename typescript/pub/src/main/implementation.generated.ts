import { API } from "./api.generated"
import { $$ as igenerateTypesystem } from "./implementations/generateTypesystem.s.p"

export const $api: API = {
    'generateTypesystem': igenerateTypesystem,
}