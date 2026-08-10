import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Typography
} from "@mui/material";

function AssetTable({ assets }) {

    return (
        <div style={{ marginTop: "30px" }}>



            <TableContainer component={Paper} sx={{ borderRadius: 3 }}>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell><b>Asset Name</b></TableCell>
                            <TableCell><b>Type</b></TableCell>
                            <TableCell><b>Status</b></TableCell>
                            <TableCell><b>CPU</b></TableCell>
                            <TableCell><b>Memory</b></TableCell>
                            <TableCell><b>Disk</b></TableCell>
                            <TableCell><b>Location</b></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {assets.map((asset) => (

                            <TableRow key={asset.id}>

                                <TableCell>
                                    {asset.assetName}
                                </TableCell>

                                <TableCell>
                                    {asset.assetType}
                                </TableCell>

                                <TableCell>
                                    <Chip
                                        label={asset.status}
                                        size="small"
                                        color={
                                            asset.status === "ONLINE" || asset.status === "Active"
                                                ? "success"
                                                : asset.status === "WARNING"
                                                    ? "warning"
                                                    : "error"
                                        }
                                    />
                                </TableCell>

                                <TableCell>
                                    {asset.cpuUsage}%
                                </TableCell>

                                <TableCell>
                                    {asset.memoryUsage}%
                                </TableCell>

                                <TableCell>
                                    {asset.diskUsage}%
                                </TableCell>

                                <TableCell>
                                    {asset.location || "—"}
                                </TableCell>

                            </TableRow>

                        ))}

                    </TableBody>

                </Table>

            </TableContainer>

        </div>
    );
}

export default AssetTable;