'use client';

import ErrorComponent from '@/components/common/Error';

export default function GlobalError({ error }: { error: Error & { digest?: string }; reset: () => void }) {
    console.error(error);
    return <ErrorComponent />;
}
