'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterType?: number
}

export default function TypingText({
  texts,
  typingSpeed = 110,
  deletingSpeed = 20,
  delayAfterType = 900,
}: TypingTextProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!texts || texts.length === 0) return

    const currentText = texts[textIndex] ?? ''
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)

    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1)
      }, deletingSpeed)

    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayAfterType)

    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayAfterType,
  ])

  return (
    <h1 className="text-purple-400">
      {(texts[textIndex] ?? '').slice(0, charIndex)}
      <span className="ml-1 inline-block h-5 w-[4px] bg-purple-100 animate-pulse align-middle" />
    </h1>
  )
}
