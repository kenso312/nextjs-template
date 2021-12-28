import { NextPageContext } from 'next';

function Error({ statusCode }: { statusCode: number }): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-5xl">{statusCode} - Sorry</h1>
    </div>
  );
}

Error.getInitialProps = (context: NextPageContext) => {
  const statusCode = context?.res?.statusCode || context?.err?.statusCode;
  return { statusCode };
};

export default Error;
