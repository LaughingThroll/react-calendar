import React from 'react'
import { shallow } from 'enzyme'
import ModalFooter from './'

describe('ModalFooter render', () => {
  it('render default', () => {
    const tree = shallow(<ModalFooter />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(1)
  })

  it('render with children', () => {
    const tree = shallow(<ModalFooter children={<span>Test</span>} />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('span')).toHaveLength(1)
  })
})

describe('ModalFooter props', () => {
  it('component wiht className', () => {
    const tree = shallow(<ModalFooter className={['hello']} />)

    expect(tree.find('div').hasClass('hello')).toBe(true)
  })
})
