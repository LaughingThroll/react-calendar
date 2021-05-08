import React from 'react'
import { shallow } from 'enzyme'
import Option, { OptionProps } from './'

const setUp = (props: OptionProps) => shallow(<Option {...props} />)

describe('Option render', () => {
  it('default render', () => {
    const tree = setUp({ title: 'Option' })

    expect(tree).toMatchSnapshot()
    expect(tree.find('option')).toHaveLength(1)
    expect(tree.find('option').text().includes('Option')).toBe(true)
  })
})
