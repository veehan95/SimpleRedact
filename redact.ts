import {ic} from './src/entity/ic'

export class redact {
  rules:any[]

  constructor() {
    this.rules = [
      new ic(),
			//CreateEntity
    ]
  }

  public redact(input:string) {
    var result = input

    for (var rule of this.rules) {
      result = rule.redact(result)
    }

    return result
  }
}
