import React from 'react'
import TableData from './TableData'
import TableHeader from './TableHeaders'

export default function Table() {
    return (
        <div>
            <table className = 'table'>
                <thead>
                    <TableHeader/>
                    <TableData/>
                </thead>
            </table>
        </div>
    )
}
