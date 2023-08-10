import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import {
	CardContent,
} from '@mui/material';

function CTable(props) {
	const { columns, rows, page, setPage, size, setSize } = props

	return (
		<>
			<CardContent>
				<DataGrid
					autoHeight
					rows={rows || []}
					columns={columns}
					getRowId={(row) => row._id}
					pageSize={size}
					rowsPerPageOptions={[7, 10, 25, 50, 100]}
					page={page}
					disableSelectionOnClick
					onPageChange={page => {
						setPage(page)
					}}
					onPageSizeChange={newPageSize => setSize(newPageSize)}
					checkboxSelection
					slots={{
						toolbar: GridToolbar,
					}}
				/>
			</CardContent>
		</>
	)
}

export default CTable
