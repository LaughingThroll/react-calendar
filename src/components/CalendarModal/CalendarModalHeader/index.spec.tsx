import { shallow } from 'enzyme'
import { CalendarModalHeader, CalendarModalHeaderProps, ErrorsText } from '.'

const setUp = (props: CalendarModalHeaderProps) => shallow(<CalendarModalHeader {...props} />)

describe('CalendarModalHeader render', () => {
  it('default render', () => {
    const props = { isValidDays: true, countDays: 7 }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('7')).toBe(true)
  })

  it('invalid render', () => {
    const props = { isValidDays: false, countDays: 7 }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes(ErrorsText.IS_NOT_VALID_DAYS)).toBe(true)
  })
})
