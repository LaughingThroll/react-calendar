import { shallow } from 'enzyme'
import FormTeamsSelect, { FormTeamsSelectProps } from './'
import { normalTeams } from '../../../__STUBS__/normalTeams'

const setUp = (props: FormTeamsSelectProps) => shallow(<FormTeamsSelect {...props} />)

describe('FormTeamsSelect render', () => {
  it('default render', () => {
    const props: FormTeamsSelectProps = { teams: normalTeams, select: { changeValue: jest.fn(), value: '' } }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
