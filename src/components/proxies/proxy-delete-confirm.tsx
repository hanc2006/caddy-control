import { useDeleteDomain } from '@/hooks/domains/domain.hooks';
import { AlertTriangle } from 'lucide-react';
import { FC } from 'react'
import { ConfirmDialog } from '../confirm-dialog';
import { DomainWithCheckResults } from '@/app/api/domain/domain-types';

type Props = {
    open: boolean;
    onCancel: VoidFunction;
    proxy: DomainWithCheckResults | null;
}

const ProxyDeleteConfirm: FC<Props> = ({
    open,
    onCancel,
    proxy,
}) => {
    const deleteDomainMutation = useDeleteDomain()
    if(!proxy) return null;
    
    const handleConfirmDelete = async () => {
        await deleteDomainMutation.mutateAsync({
            incomingAddress: proxy.incomingAddress
        })
        onCancel()
    }

    return (
        <ConfirmDialog
            open={open}
            onOpenChange={onCancel}
            handleConfirm={handleConfirmDelete}
            isLoading={deleteDomainMutation.isPending}
            title={
                <span className='text-destructive'>
                    <AlertTriangle
                        className='mr-1 inline-block stroke-destructive'
                        size={18}
                    />{' '}
                    Delete Proxy
                </span>
            }
            desc={
                <div className='space-y-4'>
                    <p className='mb-2'>
                        Are you sure you want to delete{' '}
                        <span className='font-bold'>{proxy.incomingAddress}</span>?
                        <br />
                        This cannot be undone.
                    </p>
                </div>
            }
            confirmText='Delete'
            destructive
        />
    )
}

export default ProxyDeleteConfirm