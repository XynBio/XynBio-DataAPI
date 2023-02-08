import type { NextApiRequest, NextApiResponse } from 'next'
import { ContentData } from '@/core/modules/BlogData'

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<ContentData>
){
    const slug = req.query.slug as string

    const metadata = {
        title: 'Hello World',
        subtitle: 'This is a subtitle',
        date: '2021-01-01',
        author: 'John Doe',
        keyword: 'hello world',
        slug: slug,
    }
    const link = 'https://github.com'
    const content = 'This is the content of the post'
    const activity = {
        comments: 0,
        likes: 0,
        shares: 0
    }
    const comments = [
        {
            name: 'John Doe',
            github: 'https://github.com',
            comment: 'This is a comment',
            date: '2021-01-01'
        },
        {
            name: 'Caffee Dog',
            github: 'https://github.com',
            comment: 'This is a comment',
            date: '2021-01-02'
        }
    ]

    res.status(200).json({ code: 200, data: { link: link, metadata: metadata, content: content, activity: activity, comments: comments } })
}