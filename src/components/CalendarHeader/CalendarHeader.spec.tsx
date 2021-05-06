import { shallow } from 'enzyme'
import CalendarHeader, { CalendarHeaderProps } from './'

const setUp = (props: CalendarHeaderProps) => shallow(<CalendarHeader {...props} />)

describe('CalendarHeader render', () => {
  it('default render', () => {
    const props = { date: new Date('2021-05-05') }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
