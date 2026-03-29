import { describe, it, expect } from 'vitest'
import { experience, skills, projects, links, bio } from './content'

describe('content', () => {
  it('has experience entries', () => {
    expect(experience.length).toBeGreaterThan(0)
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

  it('has projects', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('links has all four required keys', () => {
    expect(links).toHaveProperty('linkedin')
    expect(links).toHaveProperty('github')
    expect(links).toHaveProperty('medium')
    expect(links).toHaveProperty('email')
  })

  it('bio has name and tagline', () => {
    expect(bio.name).toBeTruthy()
    expect(bio.tagline).toBeTruthy()
  })
})
