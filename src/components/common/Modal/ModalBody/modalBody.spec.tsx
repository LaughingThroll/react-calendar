import React from 'react'
import { render } from 'enzyme'
import ModalBody from './'

describe('ModalBody render', () => {
  it('render default', () => {
    const tree = render(<ModalBody />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(0)
  })

  it('render with one child', () => {
    const tree = render(<ModalBody children={<span>Test</span>} />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(1)
  })

  it('render with children', () => {
    const tree = render(<ModalBody children={[<span>Test</span>, <span>Test</span>, <span>Test</span>]} />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(3)
  })
})
