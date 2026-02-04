import { Stack, Card, CardContent, CardMedia, CardActions, CardActionArea, Button } from '@mui/material';
import cloud_computing_fundamentals from '../images/cloud-computing-fundamentals.png';
import databases_advanced_topics_sql from '../images/databases-advanced-topics-sql.png';
import big_data_analytics from '../images/big-data-analytics.png';
import figma from '../images/figma.png';
import suicide_awareness_prevention from '../images/suicide-awareness-prevention.png';
import agile from '../images/agile.png';
import oop_python from '../images/oop-python.jpeg';
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
              height: "430px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                  <a 
                    href="https://www.skills.google/public_profiles/acb77369-bd50-44ee-b231-2042ad209994/badges/3152270?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                    className="badge cloud"
                  >
                    <img 
                      src={cloud_computing_fundamentals}
                      alt="Google Cloud Computing Foundations: Cloud Computing Fundamentals"
                      className="badge cloud"
                    />
                  </a>
                  <h3 className="card">Google Cloud Computing Foundations: Cloud Computing Fundamentals</h3>
                  <p className="para less-spacing">Obtained 23 January 2023</p>
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
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "430px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://courses.edx.org/certificates/e830f961250b45138c80264542a11ec2?_gl=1*1cznuwh*_ga*MTE3OTI0NzcyMi4xNjg2MzcwMzQz*_ga_D3KS4KMDT0*MTY5MDYzNDkwNi42NS4xLjE2OTA2MzY1MDQuNDIuMC4w">
                <CardMedia
                  className="center"
                  sx={{
                    height: "230px",
                    width: "450px"
                  }}
                  image={databases_advanced_topics_sql}
                  title="Databases: Advanced Topics in SQL"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                  <h3 className="card">Databases: Advanced Topics in SQL</h3>
                  <p className="para less-spacing">Obtained 29 July 2023</p>
                  <CardActions>
                    <Stack direction="row" spacing={2}>
                      <Button 
                        id="card-button"
                        href="https://courses.edx.org/certificates/e830f961250b45138c80264542a11ec2?_gl=1*1cznuwh*_ga*MTE3OTI0NzcyMi4xNjg2MzcwMzQz*_ga_D3KS4KMDT0*MTY5MDYzNDkwNi42NS4xLjE2OTA2MzY1MDQuNDIuMC4w"
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
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "395px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://courses.edx.org/certificates/cac8965d1916480fb39983de2922345c">
                <CardMedia
                  className="center"
                  sx={{
                    height: "230px",
                    width: "450px"
                  }}
                  image={big_data_analytics}
                  title="AnalyticsX: Big Data Analytics"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                  <h3 className="card">AnalyticsX: Big Data Analytics</h3>
                  <p className="para less-spacing">Obtained 30 July 2023</p>
                  <CardActions>
                    <Stack direction="row" spacing={2}>
                      <Button 
                        id="card-button"
                        href="https://courses.edx.org/certificates/cac8965d1916480fb39983de2922345c"
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
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "470px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://www.coursera.org/account/accomplishments/certificate/K2R99Z5F399P">
                <CardMedia
                  className="center"
                  sx={{
                    height: "300px",
                    width: "450px"
                  }}
                  image={figma}
                  title="Work with Components in Figma"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                    <h3 className="card">Work with Components in Figma</h3>
                    <p className="para less-spacing">Obtained 15 September 2023</p>
                    <CardActions>
                      <Stack direction="row" spacing={2}>
                        <Button 
                          id="card-button"
                          href="https://www.coursera.org/account/accomplishments/certificate/K2R99Z5F399P"
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
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "410px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                  <a 
                    href="https://credentials.nus.edu.sg/47cc4226-426e-4481-808e-8911cb50c6d0#acc.EK0u2yri"
                    className="badge suicide"
                  >
                    <img 
                      src={suicide_awareness_prevention}
                      alt="Suicide Awareness & Prevention"
                      className="badge suicide"
                    />
                  </a>
                  <h3 className="card">Suicide Awareness & Prevention</h3>
                  <p className="para less-spacing">Obtained 15 March 2024</p>
                  <CardActions>
                    <Stack direction="row" spacing={2}>
                      <Button 
                          id="card-button"
                          href="https://credentials.nus.edu.sg/47cc4226-426e-4481-808e-8911cb50c6d0#acc.EK0u2yri"
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
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "470px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant_YXefMKAeqo9No3akb_1714289895000_completion_certificate.pdf">
                <CardMedia
                  className="center"
                  sx={{
                    height: "300px",
                    width: "450px"
                  }}
                  image={agile}
                  title="Cognizant - Agile Methodology Job Simulation"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                    <h3 className="card">Cognizant - Agile Methodology Job Simulation</h3>
                    <p className="para less-spacing">Obtained 28 April 2024</p>
                    <CardActions>
                      <Stack direction="row" spacing={2}>
                        <Button 
                          id="card-button"
                          href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant_YXefMKAeqo9No3akb_1714289895000_completion_certificate.pdf"
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
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "470px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://www.coursera.org/account/accomplishments/verify/K8WSCLJFKV9L">
                <CardMedia
                  className="center"
                  sx={{
                    height: "300px",
                    width: "450px"
                  }}
                  image={oop_python}
                  title="Object-Oriented Programming in Python"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                    <h3 className="card">Object-Oriented Programming in Python</h3>
                    <p className="para less-spacing">Obtained 28 April 2024</p>
                    <CardActions>
                      <Stack direction="row" spacing={2}>
                        <Button 
                          id="card-button"
                          href="https://www.coursera.org/account/accomplishments/verify/K8WSCLJFKV9L"
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