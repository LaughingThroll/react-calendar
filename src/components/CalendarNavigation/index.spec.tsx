import { mount, ReactWrapper } from 'enzyme'

import CalendarNavigation, { Navigation } from './'

const setUp = (props: Navigation) => mount(<CalendarNavigation {...props} />)

describe('CalendarNavigation render', () => {
  it('default render', () => {
    const date = new Date('2021-04-21')
    const props = { date, onChangeMonth: () => {} }
    const tree = setUp(props)

    const keyMap: { [key: string]: any } = {}
    window.addEventListener = jest.fn((e, key) => (keyMap[e] = key))
    window.removeEventListener = jest.fn((e, key) => (keyMap[e] = undefined))

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('April 2021')).toBe(true)

    tree.unmount()
    expect(window.removeEventListener).toHaveBeenCalled()
  })

  it('other date render', () => {
    const date = new Date('2021-06-21')
    const props = { date, onChangeMonth: jest.fn() }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('June 2021')).toBe(true)
  })
})

describe('CalendarNavigation click changeMonth', () => {
  let date: Date
  let props: Navigation
  let tree: ReactWrapper

  beforeEach(() => {
    date = new Date('2021-04-21')
    props = { date, onChangeMonth: jest.fn() }
    tree = setUp(props)
  })

  it('first button must trigger onChangeMonth', () => {
    const $btn = tree.find('button').first()

    $btn.simulate('click')

    expect(props.onChangeMonth).toHaveBeenCalled()
  })

  it('second button must trigger onChangeMonth', () => {
    const $btn = tree.find('button').last()

    $btn.simulate('click')

    expect(props.onChangeMonth).toHaveBeenCalled()
  })
})

describe('CalendarNavigation keyboard event', () => {
  let date: Date
  let props: Navigation
  let keyMap: { [key: string]: any }

  beforeEach(() => {
    date = new Date('2021-04-21')
    props = { date, onChangeMonth: jest.fn() }
    keyMap = {}

    window.addEventListener = jest.fn((e, key) => {
      keyMap[e] = key
    })

    setUp(props)
  })

  it('ArrowLeft must trigger onChangeMonth', () => {
    keyMap.keyup({ key: 'ArrowLeft' })

    expect(props.onChangeMonth).toHaveBeenCalled()
  })

  it('ArrowRight must trigger onChangeMonth', () => {
    keyMap.keyup({ key: 'ArrowRight' })

    expect(props.onChangeMonth).toHaveBeenCalled()
  })
})
