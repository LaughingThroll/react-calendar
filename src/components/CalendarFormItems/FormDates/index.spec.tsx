import { shallow } from 'enzyme'
import FormDates, { FormDatesProps } from './'

const setUp = (props: FormDatesProps) => shallow(<FormDates {...props} />)

describe('FormDates render', () => {
  it('default render', () => {
    const props: FormDatesProps = {
      startDate: { changeValue: jest.fn(), value: '' },
      endDate: { changeValue: jest.fn(), value: '' },
    }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})
