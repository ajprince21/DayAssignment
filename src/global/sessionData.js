const today = new Date();
const twoDaysAgo = new Date();
twoDaysAgo.setDate(today.getDate() - 2);

const sessionData = [
    {
        date: today,
        title: 'Mary Simpson',
        subTitle: 'New session',
        timing: '10:00 - 11:30',
        isToday:true
    },
    {
        date: twoDaysAgo,
        title: 'John Doe',
        subTitle: 'Already had 2 sessions',
        timing: '14:00 - 15:30',
        isToday:false
    },
];

export default sessionData;
