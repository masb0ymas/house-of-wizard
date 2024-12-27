import AttendanceTable from './partials/table'

export default function AttendancePage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 font-serif tracking-wide">Attendance</h2>
      <p>List of webinars you have attended</p>

      <AttendanceTable />
    </div>
  )
}
