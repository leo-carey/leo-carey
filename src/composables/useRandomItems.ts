export const useRandomItems = <T>(listItems: T[], count = 5) => {
  const shuffledArray = listItems.sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, count)
}
