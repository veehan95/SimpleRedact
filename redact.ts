import {IC} from './entity/ic'

export class redact {
  ic:IC

  constructor() {
    this.ic = new IC()
  }

  public redact(input:string) {
    return this.ic.redact(input)
  }
}
