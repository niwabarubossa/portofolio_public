import { Grid } from "@material-ui/core"
import { Typography } from '@mui/material';
import { Img } from "../components/StyledParts"

export default function Photo() {
  var photoUrls = ["https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2Fg_MZaIDGgC.JPG?alt=media&token=6369c6ff-6ea6-40c8-8d8d-cb03d639272c",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2FnUbA-DFC95.JPG?alt=media&token=6a73c9aa-2ad1-4c67-a1f7-fb65c17e3786",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2FqeTjpnm7lW.JPG?alt=media&token=2c34631b-669c-4e3f-9f36-b655d4873245",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2Fo54H0eu2Md.JPG?alt=media&token=dab8c153-1114-429d-9c66-8d41fe40f5de",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2F2RIjPCimNr.JPG?alt=media&token=26db4088-a5ee-437d-bfa3-c60bb2c563f1",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2FuFGQWqCCF9.JPG?alt=media&token=5bfe65e1-fe7d-482c-a2f7-72ddc2a1222e",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2FBJW1uYxmaf.JPG?alt=media&token=5d78315b-831d-4a18-95a4-fbd4d1eedbee",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2FF5cGlFUnZb.JPG?alt=media&token=67b7ecc9-22ae-49c4-a9ef-b0e36d3f78fc"
  ];

  const photos = photoUrls.map((photoUrl) =>
    <Grid item xs={12} md={6}>
      <Img src={photoUrl}
        alt="photo" />
    </Grid>
  )

  return (
    <>
      <Typography variant="subtitle1">Photo</Typography>
      <Grid container spacing={1}>
        {photos}
      </Grid>
    </>
  )

}


