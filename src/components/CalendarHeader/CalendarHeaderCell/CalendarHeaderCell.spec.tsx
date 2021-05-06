import { mount } from 'enzyme'
import CalendarHeaderCell, { CalendarHeaderCellProps } from './'

const setUp = (props: CalendarHeaderCellProps) => mount(<CalendarHeaderCell {...props} />)

describe('CalendarHeaderCell render', () => {
  it('default render', () => {
    const props = { cellDate: new Date('2021-05-04') }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()

    expect(tree.text().includes('Tu')).toBe(true)
    expect(tree.text().includes('4')).toBe(true)
  })
})
