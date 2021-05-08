import { VacationTypes } from '../types/model/vacation'

const members = [
  {
    id: 'asdffegegege',
    name: 'Eric Meyer',
    vacations: [
      {
        startDate: '2021-02-12',
        endDate: '2021-02-15',
        type: VacationTypes.PAID,
      },
      {
        startDate: '2021-04-23',
        endDate: '2021-04-29',
        type: VacationTypes.UN_PAID,
      },
      {
        startDate: '2021-04-14',
        endDate: '2021-04-21',
        type: VacationTypes.UN_PAID,
      },
      {
        startDate: '2021-04-01',
        endDate: '2021-04-08',
        type: VacationTypes.PAID,
      },
    ],
  },
  {
    id: 'fllfhllkjj',
    name: 'Chris Coyier',
    vacations: [
      {
        startDate: '2021-01-19',
        endDate: '2021-02-19',
        type: VacationTypes.PAID,
      },
      {
        startDate: '2021-02-20',
        endDate: '2021-02-22',
        type: VacationTypes.UN_PAID,
      },
      {
        startDate: '2021-04-18',
        endDate: '2021-04-28',
        type: VacationTypes.UN_PAID,
      },
      {
        startDate: '2021-03-29',
        endDate: '2021-04-01',
        type: VacationTypes.PAID,
      },
    ],
  },
  {
    id: 'sdaasdwdd',
    name: 'Jack London',
    vacations: [
      {
        startDate: '2021-01-28',
        endDate: '2021-02-01',
        type: VacationTypes.PAID,
      },
      {
        startDate: '2021-01-15',
        endDate: '2021-01-18',
        type: VacationTypes.PAID,
      },
    ],
  },
  {
    id: 'wdwrtettete',
    name: 'Paul Irish',
    vacations: [
      {
        startDate: '2021-02-20',
        endDate: '2021-02-22',
        type: VacationTypes.PAID,
      },
      {
        startDate: '2021-02-25',
        endDate: '2021-03-25',
        type: VacationTypes.PAID,
      },
      {
        startDate: '2021-04-18',
        endDate: '2021-04-28',
        type: VacationTypes.PAID,
      },
    ],
  },
]

export default members
