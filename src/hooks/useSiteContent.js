import { siteContent, getFeaturedProjects, getProjectBySlug } from '../content/siteContent'

/** Use this hook in components to read your content (single source of truth). */
export function useSiteContent() {
  return {
    content: siteContent,
    getFeaturedProjects,
    getProjectBySlug,
  }
}
