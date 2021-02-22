const departmentTeams = {
  teams: [
    {
      name: "Frontend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      teamId: 0,
      members: [
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
            { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
            { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
            { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Backend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      teamId: 1,
      members: [
        {
          name: "BE_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "BE_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "BE_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Frontend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      teamId: 2,
      members: [
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
            { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Backend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      teamId: 3,
      members: [
        {
          name: "BE_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "BE_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Design Team",
      percentageOfAbsent: [11, 4, 0, 0, 1, 2, 0, 2, 12, 2, 0, 1],
      teamId: 4,
      members: [
        {
          name: "DE_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "DE_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "QA Team",
      percentageOfAbsent: [16, 14, 0, 0, 1, 2, 0, 2, 2, 0, 0, 28],
      teamId: 5,
      members: [
        {
          name: "QA_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "QA_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Manager Team",
      percentageOfAbsent: [16, 14, 0, 0, 1, 2, 0, 2, 2, 0, 0, 28],
      teamId: 6,
      members: [
        {
          name: "Manager_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "Manager_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Hello Team",
      percentageOfAbsent: [16, 14, 0, 0, 1, 2, 0, 2, 2, 0, 0, 28],
      teamId: 10,
      members: [
        {
          name: "Manager_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "Manager_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Hello Team",
      percentageOfAbsent: [16, 14, 0, 0, 1, 2, 0, 2, 2, 0, 0, 28],
      teamId: 7,
      members: [
        {
          name: "Manager_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "Manager_Team_User2",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
  ],
}

export default departmentTeams
