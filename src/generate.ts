var fs = require('fs');

if (!fs.existsSync(`./src/entity/${process.argv[2]}.ts`)) {
  let content = `import {Entity} from './entity'\n\nexport class ${process.argv[2]} extends Entity {\n\tconstructor() {\n\t\tconst regex = / /\n\t\tconst hide = 0\n\t\tsuper(regex,hide)\n\t}\n\n\tpublic find(input:string):string[] {\n\t\treturn input.match(this.regex)\n\t}\n}`
  fs.appendFile(`./src/entity/${process.argv[2]}.ts`, content, function (err) {
    if (err) throw err;
    console.log(`${process.argv[2]}.ts created in ./src/entity/`);
  });

  let update_main = `import {${process.argv[2]}} from './src/entity/${process.argv[2]}'`
  update_main += `\n`
  const script = fs.readFileSync('redact.ts').toString()
  const cut = script.indexOf('//')
  update_main += script.substring(0,cut)
  update_main += `new ${process.argv[2]}(),\n\t\t\t`
  update_main += script.substring(cut,script.length)
  fs.writeFile(`./redact.ts`, update_main, function (err) {
    if (err) throw err;
    console.log(`Updated in redact.ts`);
  });


  const testScript = `import {expect} from 'chai'\nimport 'mocha'\nimport {redact} from '../../redact'\nimport {values} from './${process.argv[2]}.values'\n\nconst r = new redact()\n\ndescribe(${process.argv[2]}, () => {\n\tfor (var value of values) {\n\t\tit(value.input, () => {\n\t\t\texpect(r.redact(value.input)).to.equal(value.output)\n\t\t})\n\t}\n})`
  fs.writeFile(`./src/test/${process.argv[2]}.spec.ts`, testScript, function (err) {
    if (err) throw err;
    console.log(`Test file created`);
  });

  fs.writeFile(`./src/test/${process.argv[2]}.values.ts`, `const values = [\n\n]\nexport {values}`, function (err) {
    if (err) throw err;
    console.log(`Test values file created`);
  });
} else {
  console.log(`Entity ${process.argv[2]} existed in entity.`)
}
