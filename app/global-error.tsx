"use client";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError(props: GlobalErrorProps) {
  const { error, reset } = props;
  return (
    <html>
      <body>
        <main>
          <h2>Something went wrong!</h2>
          <span>{error.name}</span>
          <span>{error.message}</span>
          <span>{error.stack}</span>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
