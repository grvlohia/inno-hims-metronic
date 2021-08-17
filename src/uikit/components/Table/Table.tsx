import { ButtonVariant } from '../../interfaces'
import { Button } from '../Button'

interface Props<T> {
  tableClassName: string
  headerClassName: string
  columns: { key: string; label: string; formatter?: (row: T) => React.ReactNode }[]
  data: T[]
  actionsHeaderText: string
  actions?: { label: string; action: (row: T) => void; buttonColor?: ButtonVariant }[]
  getID: (row: T) => string
  onRowClick?: (row: T) => void
}

function Table<T>(props: Props<T>) {
  const {
    tableClassName,
    headerClassName,
    columns,
    actionsHeaderText,
    actions,
    data,
    getID,
    onRowClick,
  } = props
  const table = (
    <div className='card-body py-3'>
      <div className='table-responsive'>
        <table className={tableClassName}>
          <thead className={headerClassName}>
            <tr>
              {columns.map((column) => (
                <th key={column.key as string}>{column.label}</th>
              ))}
              {actions ? <th>{actionsHeaderText}</th> : null}
            </tr>
          </thead>

          <tbody>
            {data.map((row: T) => (
              <tr
                key={getID(row)}
                onClick={() => {
                  if (onRowClick) {
                    onRowClick(row)
                  }
                }}
              >
                {columns.map((column) => {
                  const content = !column.formatter ? row[column.key as keyof T] : column.formatter(row)
                  return (
                    <td key={`${column.key}-${getID(row)}`}>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <div className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                            {content}
                          </div>
                          {/* <span className='text-muted fw-bold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span> */}

                        </div>
                      </div>
                    </td>
                  )
                })}

                {actions ? (
                  <td>
                    {actions.map(({ label, action, buttonColor }, i) => (
                      <Button
                        key={label}
                        color={buttonColor || 'primary'}
                        onClick={(e) => {
                          e.stopPropagation()
                          action(row)
                        }}
                        className={i > 0 ? 'ms-1' : ''}
                      >
                        {label}
                      </Button>
                    ))}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
  return table
}

Table.defaultProps = {
  tableClassName: 'table table-hover',
  headerClassName: 'thead-light',
  actionsHeaderText: 'Actions',
}

export { Table }
