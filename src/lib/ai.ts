export function askAI(question: string) {
  const q = question.toLowerCase()

  if (q.includes("what is web3")) {
    return "Web3 is a new version of the internet where users control their own data and assets using blockchain, not big companies."
  }

  if (q.includes("what can i do")) {
    return "You can explore Web3 projects, see how blockchain apps work, and connect your wallet to interact with decentralized features."
  }

  if (q.includes("projects")) {
    return "This portfolio showcases Web3 apps like wallet connections, blockchain UI components, and modern frontend experiments."
  }

  if (q.includes("wallet")) {
    return "A wallet lets you securely log in and interact with blockchain apps, similar to using Google Login but decentralized."
  }

  return "I'm here to help! You can ask about Web3, projects, or how this site works."
}
