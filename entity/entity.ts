export abstract class Entity {
  regex:any
  keep:(number[]|number)

  constructor(regex:any,keep:(number[]|number)) {
    this.regex = regex
    this.keep = keep
  }

  public abstract find(input:string):string[]

  public redact(input:string) {
    var values = this.find(input) || []
    for (var i = 0; i < values.length; i++) {
      var temp:string = ''
      var temp_keep:number[]
      if (typeof this.keep == 'number') {
        if (this.keep < 0) {
          temp_keep = [values[i].length + this.keep - 1, -this.keep]
        } else {
          temp_keep = [0, this.keep]
        }
      } else {
        temp_keep = this.keep
      }
      for (var j = 0; j < values[i].length; j++)
        if (j > temp_keep[0] && j <= temp_keep[0] + temp_keep[1]) {
          temp += values[i][j]
        } else {
          temp += '*'
        }
      input = input.replace(values[i],temp)
    }
    return input
  }
}
