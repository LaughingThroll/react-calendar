import { Team } from '../types/model/team'
import { VacationTypes } from '../types/model/vacation'

export const teams: Team[] = [
  {
    id: 'asdksadowkd',
    members: [
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
    ],
    name: 'Frontend Team',
    percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
  },
  {
    id: 'owkdowr',
    members: [
      {
        id: 'pppioiopoiiu',
        name: 'Isaac Newton',
        vacations: [
          {
            startDate: '2020-02-20',
            endDate: '2020-02-22',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2020-03-20',
            endDate: '2020-03-22',
            type: VacationTypes.UN_PAID,
          },
        ],
      },
      {
        id: 'qqrtruu',
        name: 'Friedrich Nietzsche',
        vacations: [
          {
            startDate: '2021-03-25',
            endDate: '2021-03-28',
            type: VacationTypes.PAID,
          },
          {
            startDate: '2021-02-22',
            endDate: '2021-03-22',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-04-20',
            endDate: '2021-06-09',
            type: VacationTypes.UN_PAID,
          },
        ],
      },
      {
        id: 'rrytyotyoti',
        name: 'Albert Einstein',
        vacations: [
          {
            startDate: '2021-02-15',
            endDate: '2021-03-22',
            type: VacationTypes.UN_PAID,
          },
        ],
      },
    ],
    name: 'Backend Team',
    percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
  },
  {
    id: 'skfdgkgjgkdjg',
    members: [
      {
        id: 'ncnxmvn',
        name: 'ROBERT MORRIS',
        vacations: [
          {
            startDate: '2021-03-20',
            endDate: '2021-04-22',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-01-20',
            endDate: '2021-02-22',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-04-23',
            endDate: '2021-04-29',
            type: VacationTypes.UN_PAID,
          },
        ],
      },
      {
        id: 'sdnnbnvnc',
        name: 'KEVIN MITNINK',
        vacations: [
          {
            startDate: '2021-04-20',
            endDate: '2021-05-12',
            type: VacationTypes.PAID,
          },
          {
            startDate: '2021-04-14',
            endDate: '2021-04-19',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-04-01',
            endDate: '2021-04-13',
            type: VacationTypes.PAID,
          },
        ],
      },
    ],
    name: 'QA Team',
    percentageOfAbsent: [16, 14, 0, 0, 1, 2, 0, 2, 2, 0, 0, 28],
  },
  {
    id: 'wdwfetrrrt',
    members: [
      {
        id: 'ncnfjndjgfe',
        name: 'Raymond Kroc',
        vacations: [
          {
            startDate: '2020-03-30',
            endDate: '2020-04-12',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-02-17',
            endDate: '2021-03-20',
            type: VacationTypes.PAID,
          },
          {
            startDate: '2021-04-10',
            endDate: '2021-04-21',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-04-22',
            endDate: '2021-04-25',
            type: VacationTypes.PAID,
          },
        ],
      },
    ],
    name: 'Manager Team',
    percentageOfAbsent: [16, 14, 0, 0, 1, 2, 0, 2, 2, 0, 0, 28],
  },
  {
    id: 'xncmxnmv',
    members: [
      {
        id: 'dsdwdwfgg',
        name: 'Guccio Gucci',
        vacations: [
          {
            startDate: '2021-02-22',
            endDate: '2021-03-15',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-03-30',
            endDate: '2021-04-15',
            type: VacationTypes.PAID,
          },
        ],
      },
      {
        id: 'popoptopp',
        name: 'Gabrielle Bonheur Chanel',
        vacations: [
          {
            startDate: '2021-01-15',
            endDate: '2021-02-28',
            type: VacationTypes.UN_PAID,
          },
          {
            startDate: '2021-03-01',
            endDate: '2021-03-12',
            type: VacationTypes.PAID,
          },
        ],
      },
    ],
    name: 'Design Team',
    percentageOfAbsent: [11, 4, 0, 0, 1, 2, 0, 2, 12, 2, 0, 1],
  },
]
