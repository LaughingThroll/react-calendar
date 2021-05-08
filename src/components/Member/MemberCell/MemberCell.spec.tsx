import { shallow } from 'enzyme'
import MemberCell, { MemberCellProps } from './'
import vacations from '../../../__STUBS__/vacations'

const setUp = (props: MemberCellProps) => shallow(<MemberCell {...props} />)

describe('MemberCell render', () => {
  it('default', () => {
    const props = { date: new Date('2021-08-05'), vacations }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })

  it('with vacation type Paid', () => {
    const props = { date: new Date('2021-01-15'), vacations }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })

  it('with vacation type UnPaid', () => {
    const props = { date: new Date('2021-03-20'), vacations }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
