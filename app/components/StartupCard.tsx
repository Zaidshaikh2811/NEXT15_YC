import { Button } from '@/components/ui/button'
import { FormatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




const StartupCard = ({ post }: { post: startUpCardType }) => {
    const {
        _createdAt,
        Views,
        author: { _id: authorId, name },
        id,
        title,
        description,
        image,
        category
    } = post
    return (
        <li className='startup-card group'>
            <div className="flex-between">
                <p className='startup_card_date'>
                    {FormatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className='size-6 text-primary'></EyeIcon>
                    <span className='text-16-medium'>{Views}</span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className='text-16-medium line-clamp-1'>{name}</p></Link>

                    <Link href={`/startup/${id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3></Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="/"
                        width={48}
                        height={48}
                        alt="PlaceHolder"
                        className="rounded-full"

                    />
                </Link>
            </div>
            <li>
                <Link href={`/startup/${id}`}>

                    <p className='startup_card_desc '>
                        {description}
                    </p>
                    <img
                        src={"" || ""}
                        alt="startup"
                        className="startup-card_img"
                    />
                    <div className='flex-between gap-3 mt-5'>
                        <Link href={`/?query=${category.toLowerCase()}`} >
                            <p className='text-16-medium'>{category}</p>
                        </Link>
                        <Button className='startup-card_btn' asChild>
                            <Link href={`/startup/${id}`}>
                                <span>Read More</span>
                            </Link>
                        </Button>
                    </div>
                </Link>

            </li>

        </li>
    )
}

export default StartupCard
