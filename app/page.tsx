import dynamic from 'next/dynamic'

// Replace the direct component import with dynamic import
const ComponentWithDocument = dynamic(
  () => import('../components/YourComponent'),
  { ssr: false }
)

// ...existing code...
export default function Page() {
  return (
    // ...existing code...
    <ComponentWithDocument />
    // ...existing code...
  )
}
