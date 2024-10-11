import { Typography } from "@mui/material";
import { env } from "./env";
import TypographyLearn from "./TypographyLearn";

function App() {
  return (
    <>
    <div>
      <Typography
          variant='h1' 
          sx={{
            textAlign : 'center',
            color : 'black',
          }}
      >
        Hello World from {env.REACT_APP_ENV}
      </Typography>
      <Typography  sx={{
          textAlign : 'center',
          color : 'red',
          fontSize : '24px'
        }}
      >
        Versi {env.REACT_APP_VERSION}
      </Typography >
    </div>
    {/* <div>
      <TypographyLearn/>
    </div> */}
    </>
  );
}

export default App;
