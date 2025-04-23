import { AlertTriangle } from 'lucide-react';
import { FC } from 'react'
import { ConfirmDialog } from '../confirm-dialog';
import { GetKeysResponse } from '@/app/api/keys/keys-schema';
import { useDeleteKey } from '@/hooks/keys/keys.hooks';

type Props = {
    open: boolean;
    onCancel: VoidFunction;
    selectedKey: GetKeysResponse | null;
}

const KeyDeleteConfirm: FC<Props> = ({
    open,
    onCancel,
    selectedKey,
}) => {
    const deleteKeyMutation = useDeleteKey()
    if (!selectedKey) return null;

    const handleConfirmDelete = async () => {
        await deleteKeyMutation.mutateAsync({
            key: selectedKey.key
        })
        onCancel()
    }

    return (
        <ConfirmDialog
            open={open}
            onOpenChange={onCancel}
            handleConfirm={handleConfirmDelete}
            isLoading={deleteKeyMutation.isPending}
            title={
                <span className='text-destructive'>
                    <AlertTriangle
                        className='mr-1 inline-block stroke-destructive'
                        size={18}
                    />{' '}
                    Delete Key
                </span>
            }
            desc={
                <div className='space-y-4'>
                    <p className='mb-2'>
                        Are you sure you want to delete{' '}
                        <span className='font-bold'>{selectedKey.name}</span>?
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

export default KeyDeleteConfirm