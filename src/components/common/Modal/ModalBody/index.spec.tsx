import { shallow, render } from 'enzyme'
import ModalBody from './'

describe('ModalBody render', () => {
  it('default render', () => {
    const tree = shallow(<ModalBody />)

    expect(tree).toMatchSnapshot()
  })

  it('render with children', () => {
    const tree = render(
      <ModalBody>
        {' '}
        <span></span> <span></span>{' '}
      </ModalBody>
    )

    expect(tree).toMatchSnapshot()
    expect(tree.find('span')).toHaveLength(2)
  })
})
