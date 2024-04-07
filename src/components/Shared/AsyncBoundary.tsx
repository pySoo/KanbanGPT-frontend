import { ComponentType, PropsWithChildren, ReactNode, Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';
import Loading from './Loading';

interface Props {
  errorFallback?: ComponentType<FallbackProps>;
  suspenseFallback?: ReactNode;
}

export default function AsyncBoundary({
  errorFallback,
  suspenseFallback,
  children,
}: PropsWithChildren<Props>) {
  return (
    <ErrorBoundary FallbackComponent={errorFallback ?? ErrorFallback}>
      <Suspense fallback={suspenseFallback ?? <Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
