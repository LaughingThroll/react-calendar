import { VacationTypes } from '../types/model/vacation'
const vacations = [
  {
    startDate: '2021-01-15',
    endDate: '2021-01-18',
    type: VacationTypes.PAID,
  },
  {
    startDate: '2021-01-28',
    endDate: '2021-02-01',
    type: VacationTypes.PAID,
  },
  {
    startDate: '2021-02-12',
    endDate: '2021-02-15',
    type: VacationTypes.PAID,
  },
  {
    startDate: '2021-02-22',
    endDate: '2021-03-22',
    type: VacationTypes.UN_PAID,
  },
  {
    startDate: '2021-03-25',
    endDate: '2021-03-28',
    type: VacationTypes.PAID,
  },
]

export default vacations
