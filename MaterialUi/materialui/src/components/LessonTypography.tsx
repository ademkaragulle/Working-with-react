import { Typography } from '@mui/material';


export const LessonTypography = () => {
    return (
        <div>
            <Typography variant='body1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem quisquam exercitationem atque temporibus animi odio deserunt, earum qui saepe fugiat enim eius iusto aspernatur nobis provident, possimus at sed.</Typography>

            <Typography variant='h1'>H1 Görünümü</Typography>
            <Typography variant='h2'>H2 Görünümü</Typography>
            <Typography variant='h3'>H3 Görünümü</Typography>
            <Typography variant='h4'>H4 Görünümü</Typography>
            <Typography variant='h5'>H5 Görünümü</Typography>
            <Typography variant='h6'>H6 Görünümü</Typography>

            {/* h1 etiketlerinin css özelliklerini al ama html için h4 yaz */}
            <Typography variant='h1' component='h4'>H1 görünümlü h4 etiketi</Typography>


            {/* Text Align css özelliği sağlar. */}
            <Typography variant='h4' component='h2' align='right'>h4 görünümlü h2 etiketi</Typography>
            <Typography variant='h4' component='h2' align='left'>h4 görünümlü h2 etiketi</Typography>


            <Typography variant='subtitle1'>Alt Başlık-1</Typography>
            <Typography variant='subtitle2'>Alt Başlık-2</Typography>


        </div>
    )
}