import { atom } from "recoil"


const showTextAtom = atom({
    key: 'showTextKey',
    default: true
})
export {showTextAtom}