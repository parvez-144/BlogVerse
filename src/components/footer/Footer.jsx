import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-[#02042A] text-white border border-[#02042A] border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className="text-sm">
                                    &copy; Copyright 2023.
                                    All Rights Reserved by BlogVerse.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase hover:text-blue-400">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-white hover:text-blue-400">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase hover:text-blue-400">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-white hover:text-blue-400"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-[#02042A]"></div>
        </section>
    )
}

export default Footer
