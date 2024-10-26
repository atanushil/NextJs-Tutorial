'use client';

export default function error ( { error, reset }: {
    error: Error;
    reset: () => void;
} )
{
    return (
        <div>
            {error.message}
            error <button onClick={ reset }>Try again</button>
        </div>
    );
}
