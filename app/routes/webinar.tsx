import { Outlet } from "@remix-run/react"
import Layout from "~/components/layouts"

export default function WebinarLayout() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 pt-36">
        <Outlet />
      </div>
    </Layout>
  )
}
