import Link from 'next/link'
import { formatDate, getReports } from 'app/articles/utils'

export function Reports() {
  let allReports = getReports()

  return (
    <div className="reports-grid">
      {allReports.map((report) => (
        <Link key={report.slug} href={`/articles/${report.slug}`} className="report-card">
          {report.metadata.image && (
            <img src={report.metadata.image} alt={report.metadata.title} className="report-image"/>
          )}
          <div className="report-details">
            <h3>{report.metadata.title}</h3>
            <p>{report.metadata.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
