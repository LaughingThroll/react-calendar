import React from 'react'
import { shallow } from 'enzyme'
import FormDates, { FormDatesProps } from './'

const setUp = (props: FormDatesProps) => shallow(<FormDates {...props} />)

describe('FormDates render', () => {
  it('default render', () => {
    const tree = setUp({})

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('Title')).toBe(true)
    expect(tree.find('.formDates__inner')).toHaveLength(0)
  })
})

describe('FormDates props', () => {
  it('props "title"', () => {
    const tree = setUp({ title: 'String' })

    expect(tree.text().includes('String')).toBe(true)
  })

  it('props "inner"', () => {
    const tree = setUp({ inner: true })

    expect(tree).toMatchSnapshot()
    expect(tree.find('.formDates__inner')).toHaveLength(1)
  })
})
