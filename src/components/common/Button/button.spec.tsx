import React from 'react'
import { shallow } from 'enzyme'
import Button, { ButtonProps } from './'

const setUp = (props: ButtonProps) => shallow(<Button {...props} />)

describe('Button component initial', () => {
  it('render button', () => {
    const tree = setUp({})
    expect(tree.find('button')).toHaveLength(1)
  })
  it('render button without props', () => {
    const tree = setUp({})

    expect(tree).toMatchSnapshot()
  })

  it('button with props default', () => {
    const tree = setUp({})

    expect(tree.find('button').prop('className')).toEqual('button button_primary ')
  })
})

describe('Button component testing props "type"', () => {
  it('default props "type"', () => {
    const tree = setUp({})

    expect(tree.find('button').prop('type')).toEqual('button')
  })

  it('props "type" submit', () => {
    const tree = setUp({ type: 'submit' })

    expect(tree.find('button').prop('type')).toEqual('submit')
  })

  it('props "type" reset', () => {
    const tree = setUp({ type: 'reset' })

    expect(tree.find('button').prop('type')).toEqual('reset')
  })
})

describe('Button component testing with props', () => {
  it('props "classNames"', () => {
    const tree = setUp({ classNames: ['hello', 'world'] })

    expect(tree.find('button').prop('className')).toEqual('button button_primary hello world')
  })

  it('props "secondary"', () => {
    const tree = setUp({ secondary: true })

    expect(tree.find('button').prop('className')).toEqual('button button_secondary ')
  })

  it('props "iconPlus"', () => {
    const tree = setUp({ iconPlus: true })

    expect(tree.find('button').prop('className')).toEqual('button button_icon_plus button_primary ')
  })

  it('props "disabled"', () => {
    const tree = setUp({ disabled: true })

    expect(tree.find('button').prop('className')).toEqual('button button_primary button_disabled ')
  })

  it('props "onClick" without args', () => {
    // Preparing
    const props = { onClick: jest.fn() }
    const tree = setUp(props)
    const $button = tree.find('button')

    // ACT
    $button.simulate('click')

    // Expectation
    expect(props.onClick).toHaveBeenCalled()
  })

  it('props "onClick" with args', () => {
    // Preparing
    const props = { onClick: jest.fn((x) => x + 1) }
    const tree = setUp(props)
    const $button = tree.find('button')

    // ACT
    $button.simulate('click')

    // Expectation
    expect(props.onClick).toHaveBeenCalled()
    expect(props.onClick(1)).toEqual(2)
  })
})
