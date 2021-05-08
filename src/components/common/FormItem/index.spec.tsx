import React from 'react'
import { shallow } from 'enzyme'
import FormItem, { FormItemProps } from '.'

const setUp = (props: FormItemProps) => shallow(<FormItem {...props} />)

describe('FormItem render', () => {
  it('default render', () => {
    const tree = setUp({})

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('Title')).toBe(true)
    expect(tree.find('.formItem__inner')).toHaveLength(0)
  })
})

describe('FormItem props', () => {
  it('props "title"', () => {
    const tree = setUp({ title: 'String' })

    expect(tree.text().includes('String')).toBe(true)
  })

  it('props "inner"', () => {
    const tree = setUp({ inner: true })

    expect(tree).toMatchSnapshot()
    expect(tree.find('.formItem__inner')).toHaveLength(1)
  })
})
