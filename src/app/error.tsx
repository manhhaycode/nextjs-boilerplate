'use client';

import ErrorComponent from '@/components/common/Error';

export default function Error({ error }: { error: Error; reset: () => void }) {
    console.error(error);
    return <ErrorComponent />;
}
