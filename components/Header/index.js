import styles from './Header.module.css'
import React from 'react';
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import ClearIcon from '@mui/icons-material/Clear';
import DehazeIcon from '@mui/icons-material/Dehaze';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const Header = () => {
    const matches = useMediaQuery('(min-width:376px)')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [authed, setAuthed] = React.useState(false)

    return (

        <div className={styles.header}>
            <div className={styles.nav} >
                <div className={styles.leftbar}>
                    <p className={styles.leftbar1}>8-911-113-93-95</p>
                    <p className={styles.leftbar2}>ПН-ВС 10:00 - 20:00 </p>
                </div>

                {matches ? <div className={styles.ebuch}>
                    <Link href="/"><a className={styles.item}>Наши услуги</a></Link>
                    <Link href="/"><a className={styles.item}>Цены</a></Link>
                    <Link href="/"><a className={styles.item}> Контакты</a></Link>
                    <Link href="/"><a className={styles.item}>Наши работы</a></Link>
                </div>
                    : <div className={styles.bar}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}



                        >
                            {open ? <ClearIcon sx={{ color: pink[500] }} fontSize="large" /> : <DehazeIcon sx={{ color: pink[50] }} fontSize="large" />}

                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Наши услуги</MenuItem>
                            <MenuItem onClick={handleClose}>Цены</MenuItem>
                            <MenuItem onClick={handleClose}>Контакты</MenuItem>
                            <MenuItem onClick={handleClose}>Наши работы</MenuItem>
                        </Menu>
                    </div>}
            </div>
        </div>
    )
}

export default Header