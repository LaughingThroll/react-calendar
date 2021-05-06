import { shallow } from 'enzyme'
import CountUsers, { CountUsersProps } from '.'

const setUp = (props: CountUsersProps) => shallow(<CountUsers {...props} />)

describe('Users render', () => {
  it('default render', () => {
    const props = { countUsers: 10 }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('10')).toBe(true)
  })

  it('render with countUsers < 0', () => {
    const props = { countUsers: -10 }
    const tree = setUp(props)

    expect(tree.text().includes('-10')).toBe(true)
  })
})
