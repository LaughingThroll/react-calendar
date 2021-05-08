import { shallow } from 'enzyme'
import SummaryComponent, { Summary } from './'

const setUp = (props: Summary) => shallow(<SummaryComponent {...props} />)

describe('Summary render', () => {
  it('default render', () => {
    const date = new Date('2021-04-21')
    const props = { countUsers: 10, percent: 5, date }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('April')).toBe(true)
  })

  it('render with other props', () => {
    const date = new Date('2021-03-21')
    const props = { countUsers: -10, percent: -5, date }
    const tree = setUp(props)

    expect(tree.text().includes('March')).toBe(true)
  })
})
