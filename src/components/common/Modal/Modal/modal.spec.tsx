import React from 'react'
import { shallow } from 'enzyme'
import Modal, { ModalProps } from './'

const setUp = (props: ModalProps) => shallow(<Modal {...props} />)

describe('Modal render', () => {
  it('Modal default init', () => {
    const tree = setUp({ open: false, onClose: jest.fn() })

    expect(tree).toMatchSnapshot()
    expect(tree.find('.overlay')).toHaveLength(0)
    expect(tree.find('.modal')).toHaveLength(0)
  })

  it('Modal opened', () => {
    const tree = setUp({ open: true, onClose: jest.fn() })

    expect(tree).toMatchSnapshot()
    expect(tree.find('.overlay')).toHaveLength(1)
    expect(tree.find('.modal')).toHaveLength(1)
  })
})

describe('Modal prop onClose', () => {
  it('Modal onClose click true', () => {
    const props = { open: true, onClose: jest.fn() }
    const tree = setUp(props)
    const $overlay = tree.find('.overlay')
    const e = new Event('click')
    $overlay.simulate('click', [e])
    props.onClose()
    expect(props.onClose).toHaveBeenCalled()
  })
})
