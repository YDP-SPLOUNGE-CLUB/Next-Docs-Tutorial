export function delay(timeout = 3000): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, timeout))
}
