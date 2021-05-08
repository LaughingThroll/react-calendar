import { shallow } from 'enzyme'
import { CellVariants } from '../../../../types/cell'
import Cell, { CellProps } from './'

const setUp = (props: CellProps) => shallow(<Cell {...props} />)

describe('Cell render', () => {
  it('default render', () => {
    const props = { cellDate: new Date('2021-05-04') }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.find('td')).toHaveLength(1)
  })

  it('default render with class by default', () => {
    const props = { cellDate: new Date('2021-05-02') }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.find('td')).toHaveLength(1)
    expect(tree.find('.cellGray')).toHaveLength(1)
  })

  it('default render with variant', () => {
    const props = { cellDate: new Date('2021-05-02'), variant: CellVariants.TH }
    const tree = setUp(props)

    expect(tree).toMatchSnapshot()
    expect(tree.find('th')).toHaveLength(1)
  })
})
