'use client';

import React from 'react';

function StyleguideSubnav() {
  return (
    <nav className='sticky top-0 z-10 border-b bg-white/80 backdrop-blur'>
      <div className='container mx-auto flex gap-4 px-4 py-3'>
        <a href='#typography' className='underline underline-offset-4'>Typography</a>
        <a href='#buttons' className='underline underline-offset-4'>Buttons</a>
        <a href='#colors' className='underline underline-offset-4'>Colors</a>
      </div>
    </nav>
  );
}

export default function StyleguidePage() {
  return (
    <main
      id='main'
      className='scroll-smooth min-h-screen bg-white text-gray-900'
    >
      <StyleguideSubnav />

      <section id='typography' className='container mx-auto px-4 py-12 space-y-6'>
        <h1 className='text-4xl font-bold'>Styleguide</h1>
        <p className='text-gray-600'>
          Reference page for typography, colors, and UI atoms.
        </p>

        <div className='space-y-2'>
          <h2 className='text-3xl font-semibold'>Headings</h2>
          <h1 className='text-4xl font-bold'>H1 Heading</h1>
          <h2 className='text-3xl font-semibold'>H2 Heading</h2>
          <h3 className='text-2xl font-semibold'>H3 Heading</h3>
          <p>Paragraph text with <a href='#' className='underline'>a link</a>.</p>
        </div>
      </section>

      <section id='buttons' className='container mx-auto px-4 py-12 space-y-4'>
        <h2 className='text-2xl font-semibold'>Buttons</h2>
        <div className='flex flex-wrap gap-3'>
          <button className='rounded-lg border px-4 py-2 hover:bg-gray-50'>Default</button>
          <button className='rounded-lg bg-black px-4 py-2 text-white hover:opacity-90'>Primary</button>
          <button className='rounded-lg bg-gray-100 px-4 py-2 text-gray-800 hover:bg-gray-200'>Muted</button>
        </div>
      </section>

      <section id='colors' className='container mx-auto px-4 py-12 space-y-3'>
        <h2 className='text-2xl font-semibold'>Colors</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3'>
          {[
            { name: 'Slate', class: 'bg-slate-600' },
            { name: 'Teal', class: 'bg-teal-500' },
            { name: 'Steel', class: 'bg-slate-500' },
            { name: 'Charcoal', class: 'bg-slate-800' },
            { name: 'Aqua', class: 'bg-cyan-400' },
            { name: 'White', class: 'bg-white border' },
          ].map((c) => (
            <div key={c.name} className={'h-16 rounded-xl border ' + c.class}>
              <div className='px-3 py-2 text-sm'>{c.name}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
