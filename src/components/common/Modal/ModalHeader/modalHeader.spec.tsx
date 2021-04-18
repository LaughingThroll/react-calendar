import React from 'react'
import { shallow } from 'enzyme'
import ModalHeader from './'

describe('ModalHeader render', () => {
  it('render default', () => {
    const tree = shallow(<ModalHeader />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(1)
  })

  it('render with children', () => {
    const tree = shallow(<ModalHeader children={<span>Test</span>} />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('span')).toHaveLength(1)
  })
})

describe('ModalHeader props', () => {
  it('component wiht className', () => {
    const tree = shallow(<ModalHeader className={['hello']} />)

    expect(tree.find('div').hasClass('hello')).toBe(true)
  })
})
