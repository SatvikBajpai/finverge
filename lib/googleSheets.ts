/**
 * Google Sheets Integration for Content Management
 * Fetches resources from a public Google Sheet
 */

export interface SheetResource {
  title: string
  description: string
  link: string
  category: 'Handbook' | 'Finance Hack' | 'Commentary'
  image?: string
}

interface SheetRow {
  Title?: string
  Description?: string
  Link?: string
  Category?: string
  Image?: string
}

/**
 * Fetch resources from Google Sheets
 * Sheet must be publicly readable
 */
export async function fetchSheetResources(): Promise<SheetResource[]> {
  const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID

  if (!sheetId) {
    console.warn('NEXT_PUBLIC_GOOGLE_SHEET_ID not set, using fallback data')
    return []
  }

  try {
    // Google Sheets API v4 endpoint for public sheets
    // Range A:E means columns A through E (Title, Description, Link, Category, Image)
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Sheet1`

    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.status}`)
    }

    const text = await response.text()
    // Google Sheets returns JSONP, need to extract JSON
    const json = JSON.parse(text.substring(47).slice(0, -2))

    const rows = json.table.rows

    // Skip header row (index 0) and map data
    const resources: SheetResource[] = rows
      .slice(1) // Skip header
      .map((row: any) => {
        const cells = row.c || []
        return {
          title: cells[0]?.v || '',
          description: cells[1]?.v || '',
          link: cells[2]?.v || '',
          category: cells[3]?.v || 'Handbook',
          image: cells[4]?.v || '',
        }
      })
      .filter((resource: SheetResource) => {
        // Filter out empty rows
        return resource.title && resource.link
      })

    return resources
  } catch (error) {
    console.error('Error fetching Google Sheet:', error)
    return []
  }
}

/**
 * Group resources by category
 */
export function groupResourcesByCategory(resources: SheetResource[]) {
  return {
    handbooks: resources.filter(r => r.category === 'Handbook'),
    financeHacks: resources.filter(r => r.category === 'Finance Hack'),
    commentaries: resources.filter(r => r.category === 'Commentary'),
  }
}

/**
 * Fallback data when Google Sheets is not configured
 */
export const fallbackResources: SheetResource[] = [
  {
    title: "FinVerge Advisors Handbook",
    description: "Comprehensive guide to our services and financial advisory approach.",
    link: "https://drive.google.com/file/d/19AXz62NlOOJaBunStWuDXYQoS_KX7sWB/view?usp=sharing",
    category: "Handbook",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "ESOP Handbook",
    description: "Complete guide to Employee Stock Ownership Plans for startups and growing businesses.",
    link: "https://drive.google.com/file/d/1JP9poDURv4H9GhpmeLa_t0jwKwBER4mP/view?usp=sharing",
    category: "Handbook",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60",
  },
]
