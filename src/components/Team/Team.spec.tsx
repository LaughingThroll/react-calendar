import { shallow } from 'enzyme'
import Team, { TeamProps } from './'
import { normalTeams } from './../../__STUBS__/normalTeams'

const setUp = (props: TeamProps) => shallow(<Team {...props} />)

describe('Team render', () => {
  it('default', () => {
    const props = { date: new Date('2021-08-05'), team: normalTeams[0] }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
