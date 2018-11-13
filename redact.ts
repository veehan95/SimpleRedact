import {IC} from './entity/ic'

export class redact {
  ic:IC

  constructor() {
    this.ic = new IC()
  }

  public redact(input:string) {
    console.log(this.ic.redact(input))
    return this.ic.redact(input)
  }
}
