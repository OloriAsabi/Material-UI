import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    Typography,
    Divider,
  } from  "@material-ui/core";
  import { AvatarGroup } from "@material-ui/lab";
import React from 'react'
import useStyles from "../styles";

export const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt=""
          src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fela1.jpg"
        />
        <Avatar
          alt=""
          src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/images-1.jpg"
        />
        <Avatar
          alt=""
          src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/images-2.jpg"
        />
        <Avatar alt="" src="" />
        <Avatar
          alt=""
          src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/images-3.jpg"
        />
        <Avatar
          alt=""
          src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/images-7.jpg"
        />
        <Avatar
          alt=""
          src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/fashion/images-7.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/travel-wella.png"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/ProjectImages/AshabiPieShopHome.png"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/ProjectImages/E-commerce.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/ProjectImages/redux-app.png"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/ProjectImages/GbeduApp.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/ProjectImages/Dashboard.png"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
    )
}
