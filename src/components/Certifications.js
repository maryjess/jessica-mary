import { Stack, Card, CardContent, CardMedia, CardActions, CardActionArea, Button } from '@mui/material';
import mew from '../images/mew.png';
import qr_bookmark from '../images/qr-bookmark.jpg';
import internconnect from '../images/internconnect.png';
import cloud_computing_fundamentals from '../images/cloud-computing-fundamentals.png';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const Certifications = () => {
  const isMobileScreen = useCheckMobileScreen();
  return (
    <Stack spacing={isMobileScreen ? 0 : 2} justifyContent="center" alignItems="center">
      <div className={isMobileScreen? "card-header mobile works" : "card-header works"} id="certifications">
        <h1 className="card-title">Certifications</h1>
      </div>  
      <Stack
        flexDirection={{xs:"column", xl:"row"}}
        justifyContent="center"
        alignItems="center"
        spacing={{xs: 2, xl: 0}}
      >
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "450px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://www.skills.google/public_profiles/acb77369-bd50-44ee-b231-2042ad209994/badges/3152270?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
                <CardMedia
                  className="center"
                  sx={{
                    height: "230px",
                    width: "450px"
                  }}
                  image={cloud_computing_fundamentals}
                  title="Google Cloud Computing Foundations: Cloud Computing Fundamentals"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                    <h3 className="card">Google Cloud Computing Foundations: Cloud Computing Fundamentals</h3>
                    <p className="para less-spacing">Obtained 23 January 2023</p>
                    <p className="para less-spacing">Credential ID 3152270</p>
                    <CardActions>
                        <Stack direction="row" spacing={2}>
                            <Button 
                                id="card-button"
                                href="https://www.skills.google/public_profiles/acb77369-bd50-44ee-b231-2042ad209994/badges/3152270?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                                sx={{fontFamily: "Work Sans", textTransform: "none"}} 
                                variant="contained" 
                                color="success" 
                                size="small"
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </CardActions>
                </Stack>
              </CardContent>
            </div>
          </Card>
        </div>
      </Stack>
    </Stack>
  );
}

export default Certifications;