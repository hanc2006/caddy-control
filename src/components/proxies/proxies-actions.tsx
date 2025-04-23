import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Plus, RefreshCw, Eye } from 'lucide-react'
import { useQueryClient, useIsFetching } from '@tanstack/react-query'
import { AddProxyDialog } from './add-proxy-dialog'
import { ViewRawDialog } from './view-raw-dialog'

const ProxiesActions = () => {
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [rawDialogOpen, setRawDialogOpen] = useState(false);
    const queryClient = useQueryClient();
    const isFetchingDomains = useIsFetching({ queryKey: ["registered-domains"] });

    const refreshProxies = async () => {
        queryClient.invalidateQueries({
            queryKey: ["registered-domains"]
        })
    }

    const handleAddProxy = () => {
        setAddDialogOpen(true)
    }

    const handlViewRaw = () => {
        setRawDialogOpen(true)
    }

    return (
        <>
            <div className='flex items-center justify-end gap-4'>
                <Button onClick={refreshProxies} className='cursor-pointer' variant={'outline'}>
                    <span>
                        <RefreshCw className={isFetchingDomains ? 'animate-spin' : ''} size={16} />
                    </span>
                    Refresh
                </Button>
                <Button onClick={handlViewRaw} className='cursor-pointer' variant={'outline'}>
                    <span>
                        <Eye size={16} />
                    </span>
                    View Raw JSON
                </Button>
                <Button onClick={handleAddProxy} className='cursor-pointer' variant={'default'}>
                    <span>
                        <Plus size={16} />
                    </span>
                    Add Proxy
                </Button>
            </div>
            <AddProxyDialog
                open={addDialogOpen}
                onClose={() => setAddDialogOpen(false)}
            />
            <ViewRawDialog
                open={rawDialogOpen}
                onClose={() => setRawDialogOpen(false)}
            />
        </>
    )
}

export default ProxiesActions