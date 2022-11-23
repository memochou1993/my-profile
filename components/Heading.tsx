import React from 'react';

interface Props {
  text: string;
}

export default function Heading({
  text,
}: Props) {
  return (
    <div className="my-8 text-xl font-medium tracking-wider text-center uppercase text-slate-800 dark:text-slate-200 sm:my-10 sm:text-2xl md:my-12 md:text-3xl">
      {text}
    </div>
  );
}
