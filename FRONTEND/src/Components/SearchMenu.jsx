import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Checkbox, FormControlLabel, FormGroup, Container, Grid } from '@mui/material';
export default function SearchMenu(props) {
    const filterBrand = (prop) => {
        props.setShoeList((props.shoeList.filter((shoe)=> shoe.brand === prop)))
    }
    const filterMaterial = (prop) => {
        props.setShoeList((props.shoeList.filter((shoe)=> shoe.material === prop)))
    }
    const filterCut = (prop) => {
        props.setShoeList((props.shoeList.filter((shoe)=> shoe.cut === prop)))
    }
    const filterHeel = (prop) => {
        props.setShoeList((props.shoeList.filter((shoe)=> shoe.heel === prop)))
    }
    const filterPrice = (low, high) => {
        if (!high) {props.shoeList.filter((shoe)=> shoe.price_nzd <= low)}
        props.setShoeList((props.shoeList.filter((shoe)=> shoe.price_nzd >= low && shoe.price_nzd <= high)))
    }
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                mx: 0,
                position: 'sticky',
                // maxWidth: 345,
                alignItems: 'center',
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item><Card>
                        <CardActionArea sx={{ color: 'transparent' }} >
                            <CardContent >
                                <Typography gutterBottom variant="h5" fontFamily="League Spartan" color='black'>
                                    brand.
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('Adidas')}/>} label="adidas." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('Asics')}/>} label="asics." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('Converse')}/>} label="converse." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('Lacoste')}/>} label="lacoste." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('New Balance')}/>} label="new balance." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('Nike')}/>} label="nike." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterBrand('Reebok')}/>} label="reebok." sx={{ color: 'black' }} />
                                </FormGroup>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item><Card>
                        <CardActionArea sx={{ color: 'transparent' }} >
                            <CardContent >
                                <Typography gutterBottom variant="h5" fontFamily="League Spartan" color='black'>
                                    material.
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={e => filterMaterial('Canvas')}/>} label="canvas." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterMaterial('Leather')}/>} label="leather." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterMaterial('Synthetic')}/>} label="synthetic." sx={{ color: 'black' }} />
                                </FormGroup>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item><Card>
                        <CardActionArea sx={{ color: 'transparent' }} >
                            <CardContent >
                                <Typography gutterBottom variant="h5" fontFamily="League Spartan" color='black'>
                                    cut.
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={e => filterCut('Hi-top')} />} label="hi-top." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterCut('Lo-cut')} />} label="lo-cut." sx={{ color: 'black' }} />
                                </FormGroup>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item><Card>
                        <CardActionArea sx={{ color: 'transparent' }} >
                            <CardContent >
                                <Typography gutterBottom variant="h5" fontFamily="League Spartan" color='black'>
                                    heel.
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={e => filterHeel('Chunky')} />} label="chunky." sx={{ color: 'black' }} /> 
                                    <FormControlLabel control={<Checkbox onClick={e => filterHeel('Flat')} />} label="flat." sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterHeel('Platform')} />} label="platform." sx={{ color: 'black' }} />                                     
                                </FormGroup>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item><Card>
                        <CardActionArea sx={{ color: 'transparent' }} >
                            <CardContent >
                                <Typography gutterBottom variant="h5" fontFamily="League Spartan" color='black'>
                                    price.
                                </Typography>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={e => filterPrice(50,100)} />} label="$50 - $100" sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterPrice(101, 150)} />} label="$101 - $150" sx={{ color: 'black' }} />
                                    <FormControlLabel control={<Checkbox onClick={e => filterPrice(151)} />} label="$151+" sx={{ color: 'black' }} />
                                </FormGroup>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}