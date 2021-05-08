import { shallow } from 'enzyme'
import FormMembersSelect, { FormMembersSelectProps } from './'
import { normalTeams } from '../../../__STUBS__/normalTeams'

const setUp = (props: FormMembersSelectProps) => shallow(<FormMembersSelect {...props} />)

describe('FormMembersSelect render', () => {
  it('correct id default render', () => {
    const props: FormMembersSelectProps = {
      teams: normalTeams,
      teamId: 'asdksadowkd',
      select: { changeValue: jest.fn(), value: '' },
    }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.children().children()).toHaveLength(4)
  })

  it('incorrect id default render', () => {
    const props: FormMembersSelectProps = {
      teams: normalTeams,
      teamId: 'asdkadowkd',
      select: { changeValue: jest.fn(), value: '' },
    }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.children().children()).toHaveLength(0)
  })
})
