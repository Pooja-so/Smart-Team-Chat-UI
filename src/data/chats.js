/**
 * Dummy chat dataset used to populate the Chat List and Chat Window.
 * Single responsibility: export static conversations for the prototype.
 */
export const chats = [
  {
    id: 'c1',
    name: 'Design Team',
    lastMessage: 'Let’s finalize the color palette today.',
    time: '09:24',
    messages: [
      { id: 'm1', author: 'Alex', text: 'Morning team! Updates on the palette?', time: '09:01' },
      { id: 'm2', author: 'Priya', text: 'Shared three options in Figma.', time: '09:10' },
      { id: 'm3', author: 'Sam', text: 'Option B feels more accessible.', time: '09:18' },
      { id: 'm4', author: 'Priya', text: 'Agree. Let’s finalize the color palette today.', time: '09:24' },
    ],
  },
  {
    id: 'c2',
    name: 'Frontend Squad',
    lastMessage: 'Pushed the new auth flow behind a flag.',
    time: 'Yesterday',
    messages: [
      { id: 'm1', author: 'Mina', text: 'Login redirect bug is fixed.', time: '15:07' },
      { id: 'm2', author: 'Ishaan', text: 'Pushed the new auth flow behind a flag.', time: '16:12' },
    ],
  },
  {
    id: 'c3',
    name: 'Marketing',
    lastMessage: 'Draft blog post is ready for review.',
    time: 'Mon',
    messages: [
      { id: 'm1', author: 'Rita', text: 'Campaign assets uploaded to Drive.', time: '10:32' },
      { id: 'm2', author: 'Leo', text: 'Draft blog post is ready for review.', time: '11:05' },
    ],
  },
  {
    id: 'c4',
    name: 'Sales Team',
    lastMessage: 'Client agreed to move forward with the pilot.',
    time: 'Tue',
    messages: [
      { id: 'm1', author: 'Dana', text: 'Call with Acme scheduled for 3pm.', time: '09:45' },
      { id: 'm2', author: 'Omar', text: 'They’re interested in quarterly billing.', time: '11:20' },
      { id: 'm3', author: 'Dana', text: 'Client agreed to move forward with the pilot.', time: '14:05' },
    ],
  },
  {
    id: 'c5',
    name: 'Support',
    lastMessage: 'Status page updated; incident resolved.',
    time: 'Today',
    messages: [
      { id: 'm1', author: 'Kai', text: 'Seeing spikes in 500s for EU region.', time: '08:11' },
      { id: 'm2', author: 'Mira', text: 'Rolled back the last deployment.', time: '08:26' },
      { id: 'm3', author: 'Kai', text: 'Status page updated; incident resolved.', time: '08:55' },
    ],
  },
  {
    id: 'c6',
    name: 'Research Guild',
    lastMessage: 'Posted benchmark results for the new model.',
    time: 'Sun',
    messages: [
      { id: 'm1', author: 'Jules', text: 'New dataset cleaned and labeled.', time: '09:14' },
      { id: 'm2', author: 'Tariq', text: 'Posted benchmark results for the new model.', time: '12:37' },
    ],
  },
  {
    id: 'c7',
    name: 'Operations',
    lastMessage: 'SLA dashboard is green across all regions.',
    time: 'Sat',
    messages: [
      { id: 'm1', author: 'Ivy', text: 'Rotating pager schedules next week.', time: '16:08' },
      { id: 'm2', author: 'Rob', text: 'SLA dashboard is green across all regions.', time: '18:22' },
    ],
  },
]


