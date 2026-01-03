export interface IEvent {
  id: string
  date: string
  time: string
  title: string
  type: string
  location: string
  description?: string
  image?: string
}

export const MOCK_EVENTS: IEvent[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `${i + 1}`,
  date: `${20 + i}.09.2026`,
  time: '11:00 - 14:00',
  title: [
    'Formation of the organizational structure of the company in the face of uncertainty.',
    'Building a customer service department. Best Practices.',
    'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    'Digital Transformation in Modern Education Systems.',
    'Advanced Leadership and Management Strategies.',
  ][i % 5],
  type: ['Online master-class', 'Online lecture', 'Online workshop'][i % 3],
  location: i % 2 === 0 ? 'Online' : 'Tashkent, Uzbekistan',
  image: `https://picsum.photos/seed/${i + 100}/1200/600`,
  description: `
    <p>This event will cover the latest trends and strategies in its field. Attendees will gain valuable insights from industry experts and have the opportunity to network with peers.</p>
    <p>The session is designed for professionals who want to stay ahead of the curve and implement effective solutions in their organizations.</p>
    <ul>
      <li>In-depth analysis of current challenges</li>
      <li>Practical workshops and case studies</li>
      <li>Networking opportunities with experts</li>
      <li>Q&A session with keynote speakers</li>
    </ul>
    <blockquote>"The best way to predict the future is to create it." - Peter Drucker</blockquote>
    <p>Join us for an informative and engaging session that will empower you with the tools and knowledge you need to succeed.</p>
  `,
}))
