import * as React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Paper, IconButton } from '@mui/material'
import { ActionStop, EnterID, Sort } from '../icons/uiKit'
import { BlockStatus } from '../status/BlockStatus'
import { Processing } from '../progress/Processing'

interface Data {
    calories: string;
    carbs: string;
    fat: number;
    name: string;
    protein: number;
    operator: string;
    user: string;
    datatime: string;
}

function createData(
    name: string,
    calories: string,
    fat: number,
    carbs: string,
    protein: number,
    operator: string,
    user: string,
    datatime: string
): Data {
    return { name, calories, fat, carbs, protein, operator, user, datatime }
}

const rows = [
  createData('Ошибка', 'Москва, ул. Комсомольский проспект, 32', 67, 'Выбор зон информирования', 40, 'ИМПЕРКОМ', 'Сергеев Григорий Михаилович', '22.05.2023 08:12'),
  createData('В процессе', 'Москва, Северо-Восточный административный', 51, 'Выбор зон информирования', 19, 'ИМПЕРКОМ', 'Савин Василий Богуславович', '12.05.2023 16:23'),
  createData('Успешно', 'Москва, Северо-Восточный административный', 24, 'Выбор зон информирования', 60, 'ИМПЕРКОМ', 'Горбунов Игнатий Вадимович', '26.05.2023 23:32'),
  createData('Ошибка', 'Москва, ул. Комсомольский проспект, 159', 24, 'Выбор зон информирования', 40, 'ИМПЕРКОМ', '', '22.05.2023 08:12'),
  createData('Успешно', 'Москва, ул. Комсомольский проспект, 356', 49, 'Выбор зон информирования', 39, 'ИМПЕРКОМ', '', '12.05.2023 16:23'),
  createData('Успешно', 'Москва, ул. Комсомольский проспект, 408', 87, 'Выбор зон информирования', 65, 'ИМПЕРКОМ', '', '26.05.2023 23:32'),
  createData('Успешно', 'Москва, ул. Комсомольский проспект, 237', 37, 'Выбор зон информирования', 43, 'ИМПЕРКОМ', '', '22.05.2023 08:12'),
  createData('Ошибка', 'Москва, ул. Комсомольский проспект, 375', 94, 'Выбор зон информирования', 0, 'ИМПЕРКОМ', '', '12.05.2023 16:23'),
  createData('Ошибка', 'Москва, ул. Комсомольский проспект, 518', 65, 'Выбор зон информирования', 70, 'ИМПЕРКОМ', '', '26.05.2023 23:32'),
  createData('В процессе', 'Москва, ул. Комсомольский проспект, 392', 98, 'Выбор зон информирования', 0, 'ИМПЕРКОМ', '', '22.05.2023 08:12'),
  createData('В процессе', 'Москва, ул. Комсомольский проспект, 318', 81, 'Выбор зон информирования', 20, 'ИМПЕРКОМ', '', '12.05.2023 16:23'),
  createData('Успешно', 'Москва, ул. Комсомольский проспект, 360', 9, 'Выбор зон информирования', 37, 'ИМПЕРКОМ', '', '26.05.2023 23:32'),
  createData('Успешно', 'Москва, ул. Комсомольский проспект, 437',  63,'Выбор зон информирования', 40, 'ИМПЕРКОМ', '', '22.05.2023 08:12'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Статус'
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Локация'
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Кол-во оповещений'
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Вид оповещения'
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Операция'
    },
    {
        id: 'operator',
        numeric: true,
        disablePadding: false,
        label: 'Оператор'
    },
    {
        id: 'user',
        numeric: true,
        disablePadding: false,
        label: 'Пользователь'
    },
    {
        id: 'datatime',
        numeric: true,
        disablePadding: false,
        label: 'Дата и время'
    }
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{color: '#000', fontWeight: 600, borderBottom: '1px solid #F6F6F6'}}>
                    ID
                </TableCell>
                <TableCell sx={{borderBottom: '1px solid #F6F6F6'}}></TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        sx={{color: '#000', fontWeight: 600, borderBottom: '1px solid #F6F6F6'}}
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            sx={{color: '#000', fontWeight: 600}}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            //hideSortIcon={false}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? ( //...visuallyHidden, 
                                <Box component="span" sx={{color: '#000'}}>
                                {/* {order === 'desc' ? 'sorted descending' : 'sorted ascending'} */}
                                    {headCell.label}
                                    &#160;<Sort />
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


export function TableNotofication() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
        stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
        ),
        [order, orderBy, page, rowsPerPage],
    );

    const tablebody = {color: '#7C7C7C', borderBottom: '1px solid #F6F6F6'}

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', my: 3, color: '#000', bgcolor: '#fff', boxShadow: 3  }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750, color: '#000' }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                        {visibleRows.map((row, index) => {
                            const isItemSelected = isSelected(row.name);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, row.name)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.name}
                                selected={isItemSelected}
                                sx={{ cursor: 'pointer'}}
                            >
                                <TableCell sx={{color: '#000', fontWeight: 600, borderBottom: '1px solid #F6F6F6'}} style={{width: '70px'}}>
                                    0{index+1}&#160;&#160; <EnterID />
                                </TableCell>
                                <TableCell sx={{borderBottom: '1px solid #F6F6F6'}}>
                                    <IconButton sx={{bgcolor: '#F6F6F6'}}>
                                        <ActionStop />
                                    </IconButton>
                                </TableCell>
                                <TableCell
                                    component="th"
                                    id={labelId}
                                    padding="none"
                                    sx={tablebody}
                                    style={{width: '130px'}}
                                >
                                    <BlockStatus text={row.name} />
                                </TableCell>
                                <TableCell align="right" sx={tablebody}>{row.calories}</TableCell>
                                <TableCell align="right" sx={tablebody}>{row.fat}</TableCell>
                                <TableCell align="right" sx={tablebody} style={{width: '250px'}}>{row.carbs}</TableCell>
                                <TableCell align="right" sx={tablebody} style={{width: '200px'}}>
                                    <Processing start={row.protein} />
                                </TableCell>
                                <TableCell align="right" sx={tablebody}>{row.operator}</TableCell>
                                <TableCell align="right" sx={tablebody}>{row.user}</TableCell>
                                <TableCell align="right" sx={tablebody} style={{width: '180px'}}>{row.datatime}</TableCell>
                            </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow>
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{color: '#000'}}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}