import { Breadcrumbs, Link, Typography } from '@mui/material';

export const BreadcrumbsComponent = ({ options = [] }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb:2 }}>
      {
        options.map(option =>  (
          ( option.link )
            ?
            <Link key={option.id}
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit" to={option.link} href='#'// TODO: link it's not working
            >
              { option.icon }
              { option.text }
            </Link>
            :
            <Typography key={option.id}
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              { option.icon }
              { option.text }
            </Typography>
        ))

      }

    </Breadcrumbs>
  );
}