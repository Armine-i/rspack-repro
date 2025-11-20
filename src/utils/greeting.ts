export const getGreeting = (name: string = 'World'): string => {
  return `Hello, ${name}! Welcome to Rspack with TypeScript.`;
};

export const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString();
};
