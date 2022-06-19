import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
    return (
        <div className='mt-2 px-2'>
            {/* Search Box */}
            <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2'>
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input type="text" className='bg-transparent flex-1 outline-none'
                    placeholder='Search twitter ' />
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                options={{ height: 1000 }}
            />

        </div>
    )
}

export default Widgets