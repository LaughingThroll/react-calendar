import { shallow } from 'enzyme'
import TeamInfo, { TeamInfoProps } from './'
import members from '../../../__STUBS__/members'
import { normalTeams } from './../../../__STUBS__/normalTeams'

const setUp = (props: TeamInfoProps) => shallow(<TeamInfo {...props} />)

describe('TeamInfo render', () => {
  it('default', () => {
    const props = {
      date: new Date('2021-08-05'),
      name: 'Team',
      members,
      percentageOfAbsent: normalTeams[0].percentageOfAbsent,
      id: normalTeams[0].id,
    }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
