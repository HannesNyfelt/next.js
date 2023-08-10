import * as React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

export default function FamousCards() {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcXfUMNwesmyZR1HSU2ky6LTP4rNsR8Z1BA&usqp=CAU' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Dwayne 'the rock' Johnson
          </Typography>
          <Typography>
            Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name the Rock, is an American actor, film producer, and retired professional wrestler.
            Widely regarded as one of the greatest professional wrestlers of all time, he was integral to the development and success of the World Wrestling Federation (WWF, now WWE)
            during the Attitude Era, an industry boom period in the late 1990s and early 2000s.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://en.wikipedia.org/wiki/Dwayne_Johnson' size='small'>Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image='https://www.economist.com/img/b/1280/720/90/sites/default/files/20201128_BKP505.jpg' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Wolfgang Amadeus Mozart
          </Typography>
          <Typography>
            Wolfgang Amadeus Mozart (27 January 1756 - 5 December 1791) was a prolific and influential composer of the Classical period.
            Despite his short life, his rapid pace of composition resulted in more than 800 works of virtually every genre of his time.
            Many of these compositions are acknowledged as pinnacles of the symphonic, concertante, chamber, operatic, and choral repertoire.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart' size='small'>Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/330px-Jim_Carrey_2008.jpg' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Jim Carrey
          </Typography>
          <Typography>
            James Eugene Carrey (born January 17, 1962) is a Canadian and American actor and comedian.
            Known for his energetic slapstick performances, Carrey first gained recognition in 1990,
            after landing a role in the American sketch comedy television series In Living Color (1990-1994).
            He broke out as a star in motion pictures with Ace Ventura: Pet Detective, The Mask and Dumb and Dumber (all 1994).
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='https://en.wikipedia.org/wiki/Jim_Carrey' size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
