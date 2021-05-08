import { shallow } from 'enzyme'
import FormVacationTypeSelect, { FormVacationTypeSelectProps } from './'

const setUp = (props: FormVacationTypeSelectProps) => shallow(<FormVacationTypeSelect {...props} />)

describe('FormVacationTypeSelect render', () => {
  it('default render', () => {
    const props: FormVacationTypeSelectProps = { select: { changeValue: jest.fn(), value: '' } }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
