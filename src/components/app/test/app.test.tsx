import { shallow } from 'enzyme'
import * as React from 'react'
import { App } from '../app'

it('should be true', () => {
	const app = shallow(<App />).contains('hello world!')
	expect(app).toBeTruthy()
})