import { VacationType } from '../../types/model/vacation'
const vacations = [
  {
    startDate: '15.01.2021',
    endDate: '18.01.2021',
    type: VacationType.PAID,
  },
  {
    startDate: '28.01.2021',
    endDate: '01.02.2021',
    type: VacationType.PAID,
  },
  {
    startDate: '12.02.2021',
    endDate: '15.02.2021',
    type: VacationType.PAID,
  },
  {
    startDate: '22.02.2021',
    endDate: '22.03.2021',
    type: VacationType.UN_PAID,
  },
  {
    startDate: '25.03.2021',
    endDate: '28.03.2021',
    type: VacationType.PAID,
  },
]

export default vacations
