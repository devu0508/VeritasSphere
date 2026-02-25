import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-wrap -mx-4">
                    {/* Brand col */}
                    <div className="w-full md:w-5/12 px-4 mb-10 md:mb-0">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Logo width="48px" />
                                    <span className="text-white font-bold text-xl tracking-tight">VeritasSphere</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                    A place for ideas, stories, and perspectives worth sharing.
                                </p>
                            </div>
                            <p className="text-gray-600 text-xs mt-8">
                                &copy; {new Date().getFullYear()} VeritasSphere. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="w-full sm:w-1/3 md:w-2/12 px-4 mb-8 md:mb-0">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map(item => (
                                <li key={item}>
                                    <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="w-full sm:w-1/3 md:w-2/12 px-4 mb-8 md:mb-0">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {['Account', 'Help', 'Contact Us', 'Customer Support'].map(item => (
                                <li key={item}>
                                    <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="w-full sm:w-1/3 md:w-3/12 px-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map(item => (
                                <li key={item}>
                                    <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
