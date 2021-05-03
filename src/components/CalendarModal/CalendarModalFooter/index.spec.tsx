import { shallow } from 'enzyme'
import { CalendarModalFooter, CalendarModalFooterProps } from './'

const setUp = (props: CalendarModalFooterProps) => shallow(<CalendarModalFooter {...props} />)

describe('CalendarModalFooter render', () => {
  it('default render', () => {
    const props = { onClose: jest.fn(), onSubmit: jest.fn(), isDisabled: false }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
  })
})

describe('CalendarModalFooter test props', () => {
  it('must be call fn onClose', () => {
    const props = { onClose: jest.fn(), onSubmit: jest.fn(), isDisabled: false }
    const tree = shallow(<CalendarModalFooter {...props} />)

    tree.children().first().simulate('click')

    expect(props.onClose).toHaveBeenCalled()
    expect(props.onSubmit).toHaveBeenCalledTimes(0)
  })

  it('must be call fn onSubmit', () => {
    const props = { onClose: jest.fn(), onSubmit: jest.fn(), isDisabled: false }
    const tree = shallow(<CalendarModalFooter {...props} />)

    tree.children().last().simulate('click')

    expect(props.onSubmit).toHaveBeenCalled()
    expect(props.onClose).toHaveBeenCalledTimes(0)
  })

  it('must be ignore fn onSubmit', () => {
    const props = { onClose: jest.fn(), onSubmit: jest.fn(), isDisabled: true }
    const tree = shallow(<CalendarModalFooter {...props} />)
    const $submitButton = tree.children().last()

    $submitButton.simulate('click')

    expect(props.onSubmit).toHaveBeenCalledTimes(0)
    expect(props.onClose).toHaveBeenCalledTimes(0)
  })
})
