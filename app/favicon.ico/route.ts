import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

// Route handler to serve favicon.ico requests
// Browsers automatically request /favicon.ico, so this prevents 404 errors
export async function GET() {
  try {
    // Read the icon.svg file and serve it
    const iconPath = join(process.cwd(), 'app', 'icon.svg')
    const iconSvg = readFileSync(iconPath, 'utf-8')
    
    return new NextResponse(iconSvg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    // Return 204 No Content if file doesn't exist
    return new NextResponse(null, { status: 204 })
  }
}

