var imageStore = new FS.Store.S3("images", {
  region: "my-s3-region", //optional in most cases
  accessKeyId: "account or IAM key", //required if environment variables are not set
  secretAccessKey: "account or IAM secret", //required if environment variables are not set
  bucket: "wheatposter_posters", //required
  ACL: public //optional, default is 'private', but you can allow public or secure access routed through your app URL
  // The rest are generic store options supported by all storage adapters
  transformWrite: myTransformWriteFunction, //optional
  transformRead: myTransformReadFunction, //optional
  maxTries: 1 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});
