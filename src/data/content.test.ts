import { describe, it, expect } from 'vitest'
import { experience, skills, projects, links } from './content'

describe('content', () => {
  it('has two experience entries', () => {
    expect(experience).toHaveLength(2)
  })

  it('each experience entry has required fields', () => {
    experience.forEach(e => {
      expect(e).toHaveProperty('title')
      expect(e).toHaveProperty('company')
      expect(e).toHaveProperty('period')
      expect(e).toHaveProperty('bullets')
      expect(e.bullets.length).toBeGreaterThan(0)
    })
  })

  it('has three skill categories', () => {
    expect(skills).toHaveLength(3)
  })

  it('has three projects', () => {
    expect(projects).toHaveLength(3)
  })

  it('links has all four required keys', () => {
    expect(links).toHaveProperty('linkedin')
    expect(links).toHaveProperty('github')
    expect(links).toHaveProperty('medium')
    expect(links).toHaveProperty('email')
  })
})
