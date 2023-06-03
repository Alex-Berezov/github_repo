import { formatUpdatedAt } from './formatUpdatedAt.tsx'

jest.mock('date-fns', () => ({
  formatDistanceToNow: () => '18 hours',
  format: () => 'Oct 15, 2022',
}))

describe('formatUpdatedAt', () => {
  it('should format current day timestamp as "Updated X hours ago"', () => {
    const formatted = formatUpdatedAt(new Date().toISOString())
    const expected = 'Updated 18 hours ago'
    expect(formatted).toBe(expected)
  })

  it('should format yesterday timestamp as "yesterday"', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const formatted = formatUpdatedAt(yesterday.toISOString())
    const expected = 'yesterday'
    expect(formatted).toBe(expected)
  })

  it('should format within 7 days timestamp as "Updated X days ago"', () => {
    const within7Days = new Date()
    within7Days.setDate(within7Days.getDate() - 5)
    const formatted = formatUpdatedAt(within7Days.toISOString())
    const expected = 'Updated 5 days ago'
    expect(formatted).toBe(expected)
  })

  it('should format older than 7 days timestamp as "Updated on MMM DD, YYYY"', () => {
    const olderThan7Days = new Date('2022-10-15T12:34:56Z')
    const formatted = formatUpdatedAt(olderThan7Days.toISOString())
    const expected = 'Updated on Oct 15, 2022'
    expect(formatted).toBe(expected)
  })
})
