// 1d - edge & nodejs runtimes

// app/page.tsx
export const runtime = 'edge'

// app/layout.tsx it will make all routes under the layout run on the edge runtime
export const runtime1 = 'edge'

// if the segment is not set, it will run on the nodejs runtime