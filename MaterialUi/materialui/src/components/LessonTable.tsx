import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'


const rows = [
    { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 40, protein: 6.0, },
    { name: 'Eclair', calories: 262, fat: 5.0, carbs: 50, protein: 3.0 },
    { name: 'Cupcake', calories: 305, fat: 4.0, carbs: 44, protein: 5.0 },
    { name: 'Gingerbread', calories: 356, fat: 6.0, carbs: 14, protein: 6.0 },
];

export const LessonTable = () => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Dessert</TableCell>
                    <TableCell>Calories</TableCell>
                    <TableCell>Fat</TableCell>
                    <TableCell>Carbonhidrats</TableCell>
                    <TableCell>Protein</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((item) => (
                    <TableRow key={item.name}>
                        <TableCell >{item.name}</TableCell>
                        <TableCell >{item.calories}</TableCell>
                        <TableCell >{item.fat}</TableCell>
                        <TableCell >{item.carbs}</TableCell>
                        <TableCell >{item.protein}</TableCell>
                    </TableRow>
                ))}
            </TableBody>


        </Table>
    )
}
