import { NextRequest, NextResponse } from 'next/server'
import { fetchUserPullRequests } from '@/lib/github'
import { GITHUB_USERNAME } from '@/data/socialLinks'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username') || GITHUB_USERNAME
    const limit = parseInt(searchParams.get('limit') || '50')
    
    const contributions = await fetchUserPullRequests(username, limit)
    
    return NextResponse.json({ 
      success: true, 
      contributions,
      count: contributions.length 
    })
  } catch {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch contributions',
      contributions: []
    }, { status: 500 })
  }
}
