import { shallow, render } from 'enzyme'
import Alert, { AlertProps } from './'

const setUp = (props: AlertProps) => shallow(<Alert {...props} />)

describe('Alert render', () => {
  it('default render', () => {
    const props: AlertProps = { onAccept: jest.fn(), message: 'alert' }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('alert')).toBe(true)
  })

  it('default render with message compnent', () => {
    const MessageComponent = () => {
      return <div>Some Text</div>
    }

    const props: AlertProps = { onAccept: jest.fn(), message: <MessageComponent /> }
    const tree = render(<Alert {...props} />)

    expect(tree).toMatchSnapshot()
    expect(tree.text().includes('Some Text')).toBe(true)
  })

  it('render with props error', () => {
    const props: AlertProps = { onAccept: jest.fn(), message: 'error', error: true }
    const tree = render(<Alert {...props} />)

    expect(tree.text().includes('error')).toBe(true)
    expect(tree.find('.alert__message').hasClass('alert__message_error')).toBe(true)
    expect(tree.find('button').hasClass('alert__button_error')).toBe(true)
  })

  it('render with props success', () => {
    const props: AlertProps = { onAccept: jest.fn(), message: 'success', success: true }
    const tree = render(<Alert {...props} />)

    expect(tree.text().includes('success')).toBe(true)
    expect(tree.find('.alert__message').hasClass('alert__message_success')).toBe(true)
    expect(tree.find('button').hasClass('alert__button_success')).toBe(true)
  })

  it('render with props warning', () => {
    const props: AlertProps = { onAccept: jest.fn(), message: 'warning', warning: true }
    const tree = render(<Alert {...props} />)

    expect(tree.text().includes('warning')).toBe(true)
    expect(tree.find('.alert__message').hasClass('alert__message_warning')).toBe(true)
    expect(tree.find('button').hasClass('alert__button_warning')).toBe(true)
  })
})

describe('Alert onAccept', () => {
  it('onAccept must be call by click', () => {
    const props: AlertProps = { onAccept: jest.fn(), message: 'warning', warning: true }
    const tree = render(<Alert {...props} />)

    expect(tree.text().includes('warning')).toBe(true)
    expect(tree.find('.alert__message').hasClass('alert__message_warning')).toBe(true)
    expect(tree.find('button').hasClass('alert__button_warning')).toBe(true)
  })
})
