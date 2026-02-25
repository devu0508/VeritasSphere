import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) setPosts(posts.documents)
        })
    }, [])

    // ── Guest / Empty state ──────────────────────────────────────
    if (!authStatus || posts.length === 0) {
        return (
            <div className="bg-white">
                {/* Hero */}
                <section className="border-b border-gray-100">
                    <Container>
                        <div className="py-24 md:py-32 max-w-3xl">
                            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6 border border-gray-200 px-3 py-1 rounded-full">
                                Est. 2026 · Ideas Worth Sharing
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tight mb-6">
                                Words that<br />
                                <span className="relative inline-block">
                                    matter.
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-black/10 -z-10 rounded"></span>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
                                A curated space for ideas, stories, and perspectives — written by people who care deeply about what they create.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/signup')}
                                    className="px-8 py-3.5 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-sm"
                                >
                                    Start reading →
                                </button>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="px-8 py-3.5 bg-white text-black text-sm font-semibold tracking-wide border border-gray-300 hover:border-black transition-colors duration-200 rounded-sm"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Features strip */}
                <section className="border-b border-gray-100 bg-gray-50">
                    <Container>
                        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: '✍️',
                                    title: 'Write freely',
                                    desc: 'A distraction-free editor so you can focus on what you have to say.'
                                },
                                {
                                    icon: '🌐',
                                    title: 'Reach readers',
                                    desc: 'Publish instantly and share your work with an engaged community.'
                                },
                                {
                                    icon: '🗂️',
                                    title: 'Stay organised',
                                    desc: 'Manage all your posts in one place with full edit and delete control.'
                                },
                            ].map(f => (
                                <div key={f.title} className="flex gap-4">
                                    <span className="text-3xl mt-0.5">{f.icon}</span>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 mb-1">{f.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA banner */}
                <section className="bg-black text-white">
                    <Container>
                        <div className="py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-1">Ready to share your story?</h2>
                                <p className="text-gray-400 text-sm">Join today and publish your first post in minutes.</p>
                            </div>
                            <button
                                onClick={() => navigate('/signup')}
                                className="shrink-0 px-7 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-sm"
                            >
                                Create free account
                            </button>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }

    // ── Authenticated: Posts Grid ────────────────────────────────
    return (
        <div className="bg-white min-h-full">
            {/* Page header */}
            <div className="border-b border-gray-100 py-10">
                <Container>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Latest Posts</h1>
                    <p className="text-gray-400 text-sm mt-1">Fresh stories from the community</p>
                </Container>
            </div>

            {/* Grid */}
            <Container>
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
