import {redact} from './redact'

const r = new redact()

var vals = ['971212115001','971212-11-5001','971212 11 5001']
console.log(">> Valid ic >>")
for (var val in vals)
  console.log(`${vals[val]} >> ${r.redact(vals[val])}`)

console.log('')

var vals2 = ['971212 00 5001','971312 06 5001','qwertyuiopqw','971212 115001']

console.log(">> Invalid ic >>")
for (var val in vals2)
  console.log(`${vals2[val]} >> ${r.redact(vals2[val])}`)
