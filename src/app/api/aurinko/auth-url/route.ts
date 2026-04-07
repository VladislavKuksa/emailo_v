import { getAurinkoAuthUrl } from "@/lib/aurinko"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const serviceType = req.nextUrl.searchParams.get('serviceType') as 'Google' | 'Office365'

    try {
        const authUrl = await getAurinkoAuthUrl(serviceType || 'Google')
        return NextResponse.json({ url: authUrl })
    } catch (error) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
}
