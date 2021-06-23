import React from 'react';

export interface ExampleProps {
  yourName: String;
}

export function Example({ yourName }: ExampleProps) {
  return <div>Hola mundo, {yourName}! </div>;
}
