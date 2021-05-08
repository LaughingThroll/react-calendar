import { shallow } from 'enzyme'
import Member, { MemberProps } from './'
import vacations from './../../__STUBS__/vacations'

const setUp = (props: MemberProps) => shallow(<Member {...props} />)

describe('Member render', () => {
  it('default', () => {
    const props = { date: new Date('2021-08-05'), name: 'Member', vacations, id: 'sdaadasdsa' }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
