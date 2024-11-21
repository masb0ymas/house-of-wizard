import Layout from '../layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col gap-2 justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-36 sm:h-screen">
        <h2 className="text-2xl font-medium">Requested source not found</h2>
      </div>
    </Layout>
  )
}
