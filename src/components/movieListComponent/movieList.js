import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import yellow from '@material-ui/core/colors/purple';
import SvgIcon from '@material-ui/core/SvgIcon';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import image from './endgame.jpg';
const star = yellow[500];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      cursor: 'pointer',
      maxWidth:'300px',
      margin: '30px auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
  }));

const MovieList = (props) => {
    console.log(props.moviesData)
    const classes = useStyles();
    return(
        <div>
            {
                props.moviesData.map((value) => {
                    let elements = [];
                    for(let i=0; i < value.rating; i++){
                        elements.push(<GradeIcon color={star}/>)
                    }
                    return(
                        <div>
                            {/* <div>{value.name}</div>
                            <div>{value.cast[0].name1}, {value.cast[0].name2}</div>
                            <div>{elements}</div> */}
                            <Grid container spacing = {4}>
                              <Grid item md>
                                 <Card className={classes.root} onClick={()=>{props.detailsPageFlag(true, value)}}>
                                    <CardActionArea>
                                    <CardMedia
                                       component="img"
                                       className={classes.cover}
                                       image={image}
                                       title="Live from space album cover"
                                    />
                                    <div className={classes.details}>
                                       <CardContent className={classes.content}>
                                          <Typography component="h5" variant="h5">
                                             {value.name}
                                          </Typography>
                                          <Typography variant="subtitle1" color="textSecondary">
                                             {value.cast[0].name1}, {value.cast[0].name2}
                                          </Typography>
                                          <Typography variant="subtitle1" color="textSecondary">
                                             {elements}
                                          </Typography>
                                       </CardContent>
                                    </div>
                                    </CardActionArea>
                                 </Card>
                              </Grid>
                            </Grid>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieList;