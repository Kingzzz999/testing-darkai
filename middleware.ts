// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Cek apakah permintaan mengarah ke file statis yang ingin dilindungi
  if (request.nextUrl.pathname.match(/\.(js|css|html)$/)) {
    // Kembalikan error 403 Forbidden
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  // Lanjutkan ke halaman berikutnya jika aman
  return NextResponse.next()
}

// Konfigurasi untuk menentukan jalur mana saja yang akan diperiksa oleh middleware
export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
    }
