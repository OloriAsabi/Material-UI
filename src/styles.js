import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
      button: {
          backgroundColor: theme.palette.primary.main, 
          color: "black"
        },
        logoLg:{
            display: "none",
            [theme.breakpoints.up("sm")]:{
                display: "block"
            }
        },
        logoSm:{
            display: "block",
            [theme.breakpoints.up("sm")]:{
                display: "none"
            }
        },
        search:{
            display: "flex",
            alignItems: "center",
            backgroundColor: alpha(theme.palette.common.black, 0.15),
            '&:hover': {
             backgroundColor: alpha(theme.palette.common.black, 0.05),
            },
            borderRadius: theme.shape.borderRadius,
            width: "50%",
            [theme.breakpoints.down("sm")]:{
                display: (props)=> (props.open ? "flex" : "none"),
            },
        },
        input: {
            marginLeft: theme.spacing(2),
        },
        icons:{
            alignItems:"center",
            display: (props)=> (props.open ? "none" : "flex"),
    },
    contains: {
        paddingTop: theme.spacing(10),
      },
        badge:{
            marginRight: theme.spacing(2)
        },
        searchButton:{
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("sm")]:{
                display: "none"
            },
        },
        cancel:{
            [theme.breakpoints.up("sm")]:{
                display: "none"
            },
        },
        container: {
            height:"100vh",
            paddingTop: theme.spacing(10),
            backgroundColor: theme.palette.primary.main,
            position: "sticky",
            top: 0,
            [theme.breakpoints.up("sm")]:{
                backgroundColor: "white",
                color: "#555",
                borderRadius:"1px solid #ece7e7"
            }
        },
        item: {
            display:"flex",
            alignItems:"center",
            marginBottom: theme.spacing(6),
            [theme.breakpoints.up('sm')]:{
                marginBottom:theme.spacing(3),
                cursor: "pointer"
            },    
             
          },
          text: {
              fontWeight: 500,
              [theme.breakpoints.down('sm')]:{
                display: "none"
            },   
          },
          icon:{
              marginRight: theme.spacing(2),
              [theme.breakpoints.up('sm')]:{
               fontSize: "18px",
            },
          },
          card: {
            marginBottom: theme.spacing(5),
          },
          media: {
            height: 250,
            [theme.breakpoints.down("sm")]: {
              height: 150,
            },
          },
          fab: {
            position: "fixed",
            bottom: 20,
            right: 20,
          },
          contain: {
            width: 500,
            height: 550,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              height: "100vh",
            },
          },
          form: {
            padding: theme.spacing(2),
          },
          title: {
            fontSize: 16,
            fontWeight: 500,
            color: "#555",
          },
          link: {
            marginRight: theme.spacing(2),
            color: "#555",
            fontSize: 16,
          },
}))

export default useStyles;