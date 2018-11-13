import {Entity} from './entity'

export class IC extends Entity {
  constructor() {
    super(
      /\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])((-|\s)?)((0[1-9]|1[0-6]|2[1-9]|[3-5]\d|6[0-8]|7([1-2]|[4-9])|8[2-9]|9([0-3]|[8-9])))\3(\d{4})/g,
      -4
    )
  }

  public find(input:string):string[] {
    return input.match(this.regex)
  }
}
