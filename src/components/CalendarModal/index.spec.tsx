import { mount } from 'enzyme'
import CalendarModal, { CalendarModalProps } from './'
// import { normalTeams } from '../../__STUBS__/normalTeams'
// import { act } from 'react-dom/test-utils'

const setUp = (props: CalendarModalProps) => mount(<CalendarModal {...props} />)

describe('CalendarModal render', () => {
  it('default render', () => {})
})

// describe('CalendarModal render', () => {
//   it('default render modal close', () => {
//     const props: CalendarModalProps = { teams: normalTeams, onClose: jest.fn(), onSubmit: jest.fn(), isOpen: false }

//     const tree = setUp(props)

//     expect(tree).toMatchSnapshot()
//   })

//   it('render modal open', () => {
//     const props: CalendarModalProps = { teams: normalTeams, onClose: jest.fn(), onSubmit: jest.fn(), isOpen: true }

//     const tree = setUp(props)

//     expect(tree).toMatchSnapshot()
//   })

//   // it('render modal open with alert', () => {
//   //   const props: CalendarModalProps = { teams: normalTeams, onClose: jest.fn(), onSubmit: jest.fn(), isOpen: true }

//   //   // const tree = setUp(props).setState()

//   //   expect(tree).toMatchSnapshot()
//   // })
// })

// describe('CalendarModal props', () => {
//   it('modal open, onClose must be call', () => {
//     const props: CalendarModalProps = {
//       teams: normalTeams,
//       onClose: jest.fn(),
//       onSubmit: jest.fn(() => Promise.resolve()),
//       isOpen: true,
//     }

//     const tree = setUp(props)
//     const $buttonCancel = tree.find('button').first()

//     act(() => {
//       $buttonCancel.simulate('click')
//     })

//     expect(props.onClose).toHaveBeenCalled()
//     expect(props.onSubmit).toHaveBeenCalledTimes(0)
//   })

//   // it('modal open, handleSubmit must be call', () => {
//   //   const props: CalendarModalProps = {
//   //     teams: normalTeams,
//   //     onClose: jest.fn(),
//   //     onSubmit: jest.fn(() => Promise.resolve()),
//   //     isOpen: true,
//   //   }
//   //   const tree = setUp(props)
//   //   const $buttonSubmit = tree.find('.button').last()

//   //   act(() => {
//   //     $buttonSubmit.simulate('click')
//   //   })

//   //   expect(props.onSubmit).toHaveBeenCalledTimes(1)
//   //   expect(props.onClose).toHaveBeenCalledTimes(0)
//   // })

//   it('modal close, click errors', () => {
//     const props: CalendarModalProps = { teams: normalTeams, onClose: jest.fn(), onSubmit: jest.fn(), isOpen: false }

//     const tree = setUp(props)
//     const $buttonCancel = tree.find('button').first()
//     const $buttonSubmit = tree.find('button').last()

//     expect($buttonCancel).toHaveLength(0)
//     expect($buttonSubmit).toHaveLength(0)
//   })
// })
