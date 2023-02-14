import { checkEnvInit } from '@/lib/init'
import { jsonResponse } from '@/lib/utils'
import { NextRequest } from 'next/server'

export default async function handler (req: NextRequest){
    if (!checkEnvInit()) return jsonResponse(500, { code: "500", message: 'Internal Server Error' })

    const { searchParams } = new URL(req.url??'')
    const slug = searchParams.get('slug') as string

    const metadata = {
        title: 'Hello World',
        user: 'John Doe',
        github: 'https://github.com',
        date: '2021-01-01',
    }
    const link = 'https://github.com'
    const content = 'This is the content of the comment'
    const DataArray = [{ link: link, metadata: metadata, content: content }, { link: link, metadata: metadata, content: content }]
    const data = {
        code: 200,
        data: DataArray
    }

    return jsonResponse(200, data)
}