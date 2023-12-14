'use client'

import React, { useState } from 'react';
import { Carousal } from 'acme-carousal'

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center">
        <button
            className="px-4 py-2 font-bold text-white rounded bg-gradient-to-br from-sky-200 to-blue-200"
            onClick={() => setIsOpen(true)}
        >
            Open
        </button>
        {/* method 1 */}
        <Carousal isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* method 2 */}
        {isOpen && <Carousal />}
        </div>
    )}