import React from 'react'
import { shallow, render } from 'enzyme'
import Select, { SelectProps } from './'

const setUp = (props: SelectProps) => shallow(<Select {...props} />)

describe('Select render', () => {
  it('default render', () => {
    const tree = setUp({ onChange: jest.fn(), value: 1 })

    expect(tree).toMatchSnapshot()
    expect(tree.find('.select')).toHaveLength(1)
    expect(tree.find('select')).toHaveLength(1)
    expect(tree.find('select').prop('value')).toEqual(1)
  })
})

describe('Select props', () => {
  it('props onChange', () => {
    const props = { onChange: jest.fn(), value: 1 }
    const tree = setUp(props)
    const $input = tree.find('select')

    $input.simulate('change')

    expect(props.onChange).toHaveBeenCalled()
  })

  it('props value number', () => {
    const props = { onChange: jest.fn(), value: 1 }
    const tree = setUp(props)
    expect(tree.find('select').prop('value')).toEqual(1)
  })

  it('props value string', () => {
    const props = { onChange: jest.fn(), value: 'string' }
    const tree = setUp(props)
    expect(tree.find('select').prop('value')).toEqual('string')
  })

  it('props children should be exception', () => {
    const props = { onChange: jest.fn(), value: 1 }

    const tree = shallow(
      <Select {...props}>
        <div>ds</div>
      </Select>
    )
    expect(() => tree.simulateError(Error)).toThrow()
  })

  it('props children with options', () => {
    const props = { onChange: jest.fn(), value: 1 }
    const tree = render(
      <Select {...props}>
        <option>ds</option>
      </Select>
    )

    expect(tree.find('option')).toHaveLength(1)
  })
})
