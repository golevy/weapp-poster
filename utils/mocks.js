export const mockTripData = {
  trip: {
    title: '东京赏樱之旅',
    _id: 'trip123',
  },
  displayedCompanions: [
    {
      _id: 'user1',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1',
    },
    {
      _id: 'user2',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user2',
    },
    {
      _id: 'user3',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user3',
    },
  ],
  extraCompanionsCount: 2,
  companions: [
    { _id: 'user1' },
    { _id: 'user2' },
    { _id: 'user3' },
    { _id: 'user4' },
    { _id: 'user5' },
  ],
  formattedTripStartDate: '2024-11-16',
  formattedTripEndDate: '2024-11-18',
  schedules: [
    {
      formattedDate: '11月16日',
      dayOfWeek: '周一',
      content: '抵达东京成田机场，入住酒店\n下午前往浅草寺参观',
      locations: [
        {
          name: '成田机场',
          address: '千叶县成田市古込1-1',
        },
        {
          name: '浅草寺',
          address: '东京都台东区浅草2-3-1',
        },
      ],
    },
    {
      formattedDate: '11月17日',
      dayOfWeek: '周二',
      content: '上午参观上野公园赏樱\n下午逛秋叶原电器街',
      locations: [
        {
          name: '上野公园',
          address: '东京都台东区上野公园',
        },
        {
          name: '秋叶原',
          address: '东京都千代田区外神田',
        },
      ],
    },
    {
      formattedDate: '11月18日',
      dayOfWeek: '周三',
      content: '',
      locations: [],
    },
  ],
};
