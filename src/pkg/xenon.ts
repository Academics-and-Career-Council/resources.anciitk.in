import { Xenon } from "@anciitk/xenon-js"
const xenon = new Xenon(`${process.env.REACT_APP_PUBLIC_XENON_BASE_URL}`)
export { xenon }