export interface ConvictProps {
  env: string;
  server: {
    port: string;
  };
  mongoose: {
    uri: string;
    database: string;
  }
}
