"use client";

import { Share2 } from 'lucide-react';

interface Props {
    children: React.ReactNode
}

export default function SetupLayout({ children }: Props) {
    return (
        <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
                <div className="flex items-center justify-center py-2">
                    <div className="flex items-center justify-start gap-2">
                        <Share2 strokeWidth={1.25} size={24}/>
                        <div className="text-lg font-bold text-gray-700">
                            Caddy Control
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}
