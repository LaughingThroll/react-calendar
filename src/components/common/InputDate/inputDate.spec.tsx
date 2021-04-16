import React from 'react'
import { shallow } from 'enzyme'
import InputDate, { InputDateProps } from './'

const setUp = (props: InputDateProps) => shallow(<InputDate {...props} />)

describe('InputDate render', () => {
  it('default render', () => {
    const tree = setUp({ onChange: jest.fn() })

    expect(tree).toMatchSnapshot()
    expect(tree.find('label')).toHaveLength(1)
    expect(tree.find('input')).toHaveLength(1)
    expect(tree.find('input').prop('type')).toEqual('date')
  })
})

describe('InputDate props', () => {
  it('props label', () => {
    const tree = setUp({ label: 'Label', onChange: jest.fn() })

    expect(tree.find('label').text().includes('Label')).toBe(true)
  })

  it('props onChange', () => {
    const props = { onChange: jest.fn() }
    const tree = setUp(props)
    const $input = tree.find('input')

    $input.simulate('change')

    expect(props.onChange).toHaveBeenCalled()
  })
})
