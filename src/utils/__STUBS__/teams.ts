import { VacationType } from '../../types/model/vacation'
import { ITeam } from '../../types/model/team'

const teams: ITeam[] = [
  {
    name: 'Frontend Team',
    percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
    id: 'asdksadowkd',
    members: [
      {
        name: 'Jack London',
        id: 'sdaasdwdd',
        vacations: [
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
        ],
      },
      {
        name: 'Eric Meyer',
        id: 'asdffegegege',
        vacations: [
          {
            startDate: '12.02.2021',
            endDate: '15.02.2021',
            type: VacationType.PAID,
          },
        ],
      },
      {
        name: 'Paul Irish',
        id: 'wdwrtettete',
        vacations: [
          {
            startDate: '20.02.2021',
            endDate: '22.02.2021',
            type: VacationType.PAID,
          },
          {
            startDate: '25.02.2021',
            endDate: '25.03.2021',
            type: VacationType.PAID,
          },
        ],
      },
      {
        name: 'Chris Coyier',
        id: 'fllfhllkjj',
        vacations: [
          {
            startDate: '19.01.2021',
            endDate: '19.02.2021',
            type: VacationType.PAID,
          },
          {
            startDate: '20.02.2021',
            endDate: '22.02.2021',
            type: VacationType.UN_PAID,
          },
        ],
      },
    ],
  },
  {
    name: 'Backend Team',
    percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
    id: 'owkdowr',
    members: [
      {
        name: 'Albert Einstein',
        id: 'rrytyotyoti',
        vacations: [
          {
            startDate: '15.02.2021',
            endDate: '22.03.2021',
            type: VacationType.UN_PAID,
          },
        ],
      },
      {
        name: 'Friedrich Nietzsche',
        id: 'qqrtruu',
        vacations: [
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
        ],
      },
      {
        name: 'Isaac Newton',
        id: 'pppioiopoiiu',
        vacations: [
          {
            startDate: '20.02.2020',
            endDate: '22.02.2020',
            type: VacationType.UN_PAID,
          },
          {
            startDate: '20.03.2020',
            endDate: '22.03.2020',
            type: VacationType.UN_PAID,
          },
        ],
      },
    ],
  },
]

export default teams
