import { shallow } from 'enzyme'
import WeekendPercents, { WeekendPercentsProps } from './'

const setUp = (props: WeekendPercentsProps) => shallow(<WeekendPercents {...props} />)

describe('WeekendPercents render', () => {
  it('default render', () => {
    const props = { percent: 15 }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('15')).toBe(true)
  })

  it('render with percent < 0', () => {
    const props = { percent: -10 }
    const tree = setUp(props)

    expect(tree.text().includes('-10')).toBe(true)
  })
})
