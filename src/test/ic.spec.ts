import {expect} from 'chai'
import 'mocha'
import {redact} from '../../redact'
import {values} from './ic.values'

const r = new redact()

describe("ic", () => {
	for (var value of values) {
		it(value.input, () => {
			expect(r.redact(value.input)).to.equal(value.output)
		})
	}
})
