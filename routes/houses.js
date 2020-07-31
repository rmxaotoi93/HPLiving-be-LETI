var express = require("express");
var router = express.Router();
const upload = require("../services/multer");

const multerUpload = upload.array("images");
const {
  getAllHouse,
  addHouse,
  updateHouse,
  deleteHouse,
  getDistrict,
  getSingle,
  getAllImage,
} = require("../Controllers/houseController");
const { loginRequire } = require("../services/authService");
const {
  createReview,
  updateReview,
  deleteReview,
  getReview,
} = require("../Controllers/reviewsController");

/* GET host list. */
router
  .get("/", getAllHouse)
  .post("/", loginRequire, multerUpload, addHouse)
  .put("/:id", loginRequire, updateHouse)
  .delete("/:id", deleteHouse)
  .get("/gallery", getAllImage)
  .post("/:id/reviews", loginRequire, createReview)
  .put("/:id/reviews/:reviewsId", loginRequire, updateReview)
  .delete("/:id/reviews/:reviewsId", loginRequire, deleteReview)
  .get("/:id/reviews", getReview);
router.get("/:id", getSingle);
router.get("/district", getDistrict);

const leti = [
  [
    {
      _id: {
        $oid: "5f12e666bc8a520c10364078",
      },
      images: [
        "https://homedesignlover.com/wp-content/uploads/2015/06/1-indochina-ext1.jpg",
      ],
      location: ["District 7"],
      title: "Family Apartment",
      description:
        "Amorem ipsum dolor sit amet, consecatetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 300,
      status: "",
      createdAt: {
        $date: "2020-07-18T12:09:10.383Z",
      },
      updatedAt: {
        $date: "2020-07-18T12:09:10.383Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f12e7bdbc8a520c1036407a",
      },
      images: [
        "https://images.locanto.com.vn/mobile_4831357612/mobile_Beautiful-4-bedroom-house-for-rent-in-Van-Cao-Street-Haiphong_1.jpg",
      ],
      location: ["District 5"],
      title: "Cheap rent house",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 200,
      status: "",
      createdAt: {
        $date: "2020-07-18T12:14:53.283Z",
      },
      updatedAt: {
        $date: "2020-07-18T12:14:53.283Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f12e82ebc8a520c1036407b",
      },
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoEriWRrvKf2P6YhWihsuv2vr9sabTjk9jcw&usqp=CAU",
      ],
      location: ["District 6"],
      title: "Renting house",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Apartment",
      price: 1000,
      status: "",
      createdAt: {
        $date: "2020-07-18T12:16:46.152Z",
      },
      updatedAt: {
        $date: "2020-07-18T12:16:46.152Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f12e89cbc8a520c1036407c",
      },
      images: [
        "https://houseinhanoi.vn/wp-content/uploads/2020/03/Contemporary-one-floor-house-with-garden-for-rent-in-Tay-Ho-district-14_result.jpg",
      ],
      location: ["District 11"],
      title: "Family House",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Apartment",
      price: 500,
      status: "",
      createdAt: {
        $date: "2020-07-18T12:18:36.800Z",
      },
      updatedAt: {
        $date: "2020-07-18T12:18:36.800Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f12e985bc8a520c1036407d",
      },
      images: [
        "https://lodyhelp.com/wp-content/uploads/2019/05/long-term-apartment-for-rent-10.jpg",
      ],
      location: ["District 4"],
      title: "Cheap family house",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Apartment",
      price: 600,
      status: "",
      createdAt: {
        $date: "2020-07-18T12:22:29.285Z",
      },
      updatedAt: {
        $date: "2020-07-18T12:22:29.285Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f12ea00bc8a520c1036407e",
      },
      images: [
        "https://gialonghousing.com/images/products/a-cheap-4-bedroom-house-for-rent-in-tay-ho-district_202078162957.jpg",
      ],
      location: ["District 3"],
      title: "Fancy Apartment",
      description:
        "Amorem ipsum dolor sit,Cheap price,  amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 400,
      status: "",
      createdAt: {
        $date: "2020-07-18T12:24:32.970Z",
      },
      updatedAt: {
        $date: "2020-07-18T12:24:32.970Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f1519a3e970023e5073bd97",
      },
      images: [
        "https://images.locanto.com.vn/mobile_4831357612/mobile_Beautiful-4-bedroom-house-for-rent-in-Van-Cao-Street-Haiphong_1.jpg",
      ],
      location: ["District 7"],
      title: "Cheap rent house 3",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 300,
      status: "Hired",
      createdAt: {
        $date: "2020-07-20T04:12:19.758Z",
      },
      updatedAt: {
        $date: "2020-07-20T04:12:19.758Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f1805f7d2422931d00ab53b",
      },
      images:
        "https://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg",
      location: ["District 6"],
      title: "Cheap rent house 5",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Apartment",
      price: 100,
      status: "Hired",
      createdAt: {
        $date: "2020-07-22T09:25:11.934Z",
      },
      updatedAt: {
        $date: "2020-07-22T09:25:11.934Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f1806725d24b43294e3ce9e",
      },
      images: [
        "https://www.nottingham.ac.uk/accommodation/images-multimedia/new-test/room-3.jpg",
      ],
      location: ["District 5"],
      title: "Nha gia re",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 6,
      status: "Hired",
      createdAt: {
        $date: "2020-07-22T09:27:15.014Z",
      },
      updatedAt: {
        $date: "2020-07-22T09:27:15.014Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f1807131913e839c45a6fb8",
      },
      images: [
        "https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_180,q_auto,w_290/nbt8ybp02dmsc5sehdmk.jpg",
      ],
      location: ["District 6"],
      title: "Nha gia re",
      description: "Bao dien nuoc",
      typeRoom: "Room Sharing",
      price: 4,
      status: "Hired",
      createdAt: {
        $date: "2020-07-22T09:29:55.348Z",
      },
      updatedAt: {
        $date: "2020-07-22T09:29:55.348Z",
      },
      __v: 0,
    },
    {
      _id: {
        $oid: "5f180782baf2691c80f4d5d4",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595410310/Images/hw9foldecolvgehzsoz3.jpg",
      ],
      location: ["District 7"],
      title: "Tarot Reading and Meditation",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 4,
      status: "Hired",
      createdAt: {
        $date: "2020-07-22T09:31:46.440Z",
      },
      updatedAt: {
        $date: "2020-07-22T09:31:49.291Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f180c74baf2691c80f4d5d5",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595411575/Images/cbzrmjlael0mjek1cduu.jpg",
      ],
      location: ["District 11"],
      title: "Cheap rent house 3333",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 100,
      status: "Hired",
      createdAt: {
        $date: "2020-07-22T09:52:52.962Z",
      },
      updatedAt: {
        $date: "2020-07-22T09:52:54.523Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f180e6e056eaf24f0c8c2b8",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595412082/Images/pxfwtntv74oepw4mz05f.jpg",
      ],
      location: ["District 3"],
      title: "Cheap rent house 5",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 300,
      status: "Hired",
      createdAt: {
        $date: "2020-07-22T10:01:18.954Z",
      },
      updatedAt: {
        $date: "2020-07-22T10:01:21.245Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1913f3562fac0ff4af904c",
      },
      images: [
        "https://www.capitalliving.co.uk/data/cache/pentney_room_mobile_version-jpg_671_385_b0_s0_10.jpg",
      ],
      location: ["District 13"],
      title: "Nha gia mac 111",
      description: "Free Wifi",
      typeRoom: "Villa",
      price: 200,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T04:37:07.165Z",
      },
      updatedAt: {
        $date: "2020-07-23T04:37:08.532Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f191585562fac0ff4af904d",
      },
      images: [null],
      location: ["District 14"],
      title: "Nha gia mac 1",
      description: "Free Wifi , high security",
      typeRoom: "Luxury House",
      price: 1000,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T04:43:49.276Z",
      },
      updatedAt: {
        $date: "2020-07-23T04:43:50.374Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1945f6bef5473d4ca46ae8",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595491833/Images/ky23g5vylyw07vkbjeaq.jpg",
      ],
      location: ["District 4"],
      title: "Nha gia reeeeeeeeeee",
      description: "Free Wifi 2",
      typeRoom: "Apartment",
      price: 1500,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T08:10:30.532Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:10:33.476Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f194652bef5473d4ca46aea",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595491926/Images/gaegxqqmiaumse4epgmc.jpg",
      ],
      location: ["District 6"],
      title: "Tarot Reading and Meditation",
      description: "Bao dien nuoc",
      typeRoom: "Room Sharing",
      price: 1500,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T08:12:02.613Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:12:05.919Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1946f3bef5473d4ca46aeb",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492086/Images/pjhc0h8zdwn01hsfr00k.jpg",
      ],
      location: ["District 7"],
      title: "Tarot Reading and Meditation",
      description: "Cheap price",
      typeRoom: "Villa",
      price: 1500,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T08:14:43.616Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:14:46.598Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f194747bef5473d4ca46aee",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492170/Images/ueshxzzhrwpsltie1v5h.jpg",
      ],
      location: ["District 11"],
      title: "Nha gia re",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Apartment",
      price: 2000,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T08:16:07.006Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:16:09.843Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1947f6bef5473d4ca46af0",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492346/Images/ukzldpunnzyvxcdoagjo.jpg",
      ],
      location: ["District 5"],
      title: "Nha gia re",
      description: "Bao dien nuoc",
      typeRoom: "Room Sharing",
      price: 10000,
      status: "Hired",
      createdAt: {
        $date: "2020-07-23T08:19:02.866Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:19:05.867Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f194892bef5473d4ca46af3",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492501/Images/wzo7vm4uezmhnxfymgcb.jpg",
      ],
      location: ["District 11"],
      title: "Nha gia re",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 1909,
      status: "Hired",
      createdAt: {
        $date: "2020-07-23T08:21:38.622Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:21:41.129Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1948f1bef5473d4ca46af4",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492596/Images/pj6xj6gclleu7f51deak.jpg",
      ],
      location: ["District 6"],
      title: "Cheap rent house 50",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Apartment",
      price: 3001,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T08:23:13.515Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:23:16.400Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1949bdbef5473d4ca46af5",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492800/Images/wao2cpr6wtasszixt0md.jpg",
      ],
      location: ["Binh Thanh District"],
      title: "Nha gia re",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 5000,
      status: "Hired",
      createdAt: {
        $date: "2020-07-23T08:26:37.794Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:26:39.770Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f194a15bef5473d4ca46af6",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595492888/Images/qwtyb29eubtsvz0nkn1b.jpg",
      ],
      location: ["District 5"],
      title: "Nha gia re",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 3500,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T08:28:05.121Z",
      },
      updatedAt: {
        $date: "2020-07-23T08:28:07.680Z",
      },
      __v: 1,
    },
    {
      _id: {
        $oid: "5f1956496e2de906e4d8c5f6",
      },
      images: [
        "http://res.cloudinary.com/dlkokcwpe/image/upload/v1595496013/Images/hgnstqktro6fsesgufui.jpg",
      ],
      location: ["65 Truong Chinh"],
      title: "Nha gia mac vl",
      description:
        "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.",
      typeRoom: "Room Sharing",
      price: 6000,
      status: "Active",
      createdAt: {
        $date: "2020-07-23T09:20:09.648Z",
      },
      updatedAt: {
        $date: "2020-07-23T09:20:12.601Z",
      },
      __v: 1,
    },
  ],
];

router.get("/test", async (req, res, next) => {
  try {
    leti.forEach((e) => delete e._id);
    const House = require("../models/house");
    await House.insertMany(leti);
    res.send("ok");
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
