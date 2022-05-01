// export const config = {
//   'username': process.env.POSTGRES_USERNAME,
//   'password': 'adminadmin',
//   'database': process.env.POSTGRES_DB,
//   'host': 'database-1.clrxzcplzyra.us-east-1.rds.amazonaws.com',
//   'dialect': 'postgres',
//   'aws_region': process.env.AWS_REGION,
//   'aws_profile': process.env.AWS_PROFILE,
//   'aws_media_bucket': process.env.AWS_BUCKET,
//   'url': process.env.URL,
//   'jwt': {
//     'secret': process.env.JWT_SECRET,
//   },
// };
export const config = {
  'username': 'root',
  'password': 'adminadmin',
  'database': 'postgres',
  'host': 'database-1.clrxzcplzyra.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'default',
  'aws_media_bucket': 'arn:aws:s3:::test-636561002921-app3',
  'url': 'http://localhost:8100',
  'jwt': {
    'secret': 'testing',
  },
};
// POSTGRES_USERNAME=postgres
// POSTGRES_PASSWORD=adminadmin
// POSTGRES_HOST=database-1.clrxzcplzyra.us-east-1.rds.amazonaws.com
// POSTGRES_DB=postgres
// AWS_BUCKET=arn:aws:s3:::test-636561002921-app3
// AWS_REGION=us-east-1
// AWS_PROFILE=default
// JWT_SECRET=testing
// URL=http://localhost:8100