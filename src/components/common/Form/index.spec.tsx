import { render } from 'enzyme'
import Form from '.'

describe('Form render', () => {
  it('render default', () => {
    const tree = render(<Form />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(0)
  })

  it('render with one child', () => {
    const tree = render(<Form children={<span>Test</span>} />)

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(1)
  })

  it('render with children', () => {
    const tree = render(
      <Form children={[<span key="1">Test</span>, <span key="2">Test</span>, <span key="3">Test</span>]} />
    )

    expect(tree).toMatchSnapshot()
    expect(tree.find('div')).toHaveLength(3)
  })
})
