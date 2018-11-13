import {redact} from './redact'

const r = new redact()

console.log(r.redact('ic = 971212115001'))
console.log(r.redact('ic = 971212-11-5001'))
console.log(r.redact('ic = 971212 11 5001'))
console.log(r.redact('invalid ic = 971212 00 5001'))
console.log(r.redact('invalid ic = 971312 06 5001'))
