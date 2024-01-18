import ErrorComponent from '@/components/common/Error';

export default function NotFound({ error }: { error: Error & { digest?: string }; reset: () => void }) {
    return <ErrorComponent />;
}
