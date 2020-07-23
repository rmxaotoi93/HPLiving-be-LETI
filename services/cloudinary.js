const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
fs = require("fs");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.getall = async () => {
  // cloudinary.api.resources({ prefix: "Images/" }, function (result, error) {
  //   const { resources } = result;
  //   console.log("aaa");
  //   resources.forEach((element) => {
  //     let obj = { image: element.url };
  //     fs.appendFileSync("urls.json", JSON.stringify(obj, null, 2) + ", \n");
  //   });
  // });
  cloudinary.v2.search
    .expression("folder:users")
    .max_results(30)
    .execute()
    .then(function (result) {
      const { resources } = result;
      resources.forEach((element) => {
        let obj = { avatar: element.secure_url };
        fs.appendFileSync("user_urls.json", JSON.stringify(obj, null, 2) + ", \n");
      });
    });
};

exports.uploadSingleFile = async (file, folder) => {
  const promise = new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        resource_type: "auto",
        folder: folder,
      }
    );
  });
  return await promise;
};

exports.uploadsMultiFiles = async (files, folder) => {
  if (files) {
    const allPromises = files.map(async (file) => {
      const promise = new Promise((resolve) => {
        cloudinary.uploader.upload(
          file.path,
          (result) => {
            resolve({
              url: result.url,
              public_id: result.public_id,
            });
          },
          {
            resource_type: "auto",
            folder: folder,
          }
        );
      });
      return await promise;
    });
    const results = Promise.all(allPromises);
    console.log(results);
    return results;
  }
};
