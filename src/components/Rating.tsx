'use client'

import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

interface Review {
  name: string
  rating: number
}

export default function Rating() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-reviews')
    if (saved) setReviews(JSON.parse(saved))
  }, [])

  const submitReview = () => {
    if (!name.trim()) return alert('Name is required')
    if (rating === 0) return alert('Please select a rating')

    const updated = [{ name: name.trim(), rating }, ...reviews]
    setReviews(updated)
    localStorage.setItem('portfolio-reviews', JSON.stringify(updated))
    setName('')
    setRating(0)
  }

  const average =
    reviews.length > 0
      ? (
          reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
        ).toFixed(1)
      : '0.0'

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-foreground">
        Let’s build something{' '}
        <span className="text-purple-400">on-chain</span>
      </h2>

      <p className="mt-3 text-gray-400">
        Treat this portfolio like a product — rate your experience
      </p>

      {/* SUMMARY (HEIGHT LOCKED) */}
      <div className="mt-4 h-6">
        <p
          className={`text-purple-400 text-sm transition-opacity ${
            reviews.length > 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ⭐ {average} / 5 — {reviews.length} reviews
        </p>
      </div>

      {/* FORM */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-64 rounded-md bg-black/40 border border-white/10
            px-4 py-2 text-white placeholder-gray-500
            focus:border-purple-400 focus:outline-none
          "
        />

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={26}
              onClick={() => setRating(star)}
              className={`cursor-pointer transition ${
                rating >= star
                  ? 'text-purple-400'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={submitReview}
          className="
            rounded-md bg-purple-500 px-6 py-2
            font-medium text-black hover:bg-purple-400 transition
          "
        >
          Submit Review
        </button>
      </div>

      {/* REVIEWS (HEIGHT LOCKED) */}
      <div className="mt-10 max-w-md mx-auto h-[160px] overflow-hidden">
        <div
          className={`space-y-3 transition-opacity duration-300 ${
            reviews.length > 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="
                flex justify-between rounded-md
                bg-black/30 border border-white/10 px-4 py-2
              "
            >
              <span className="text-white">{r.name}</span>
              <span className="text-purple-400">
                {'⭐'.repeat(r.rating)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
