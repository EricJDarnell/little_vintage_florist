const {
    client,
    createTables,
    addToGallery,
    fetchGallery
} = require("./db");

const cloudinary = require('cloudinary').v2;
const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const app = express();
app.use(express.json());

const path = require("path");
const { start } = require("repl");

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);
app.use(
    "/assets",
    express.static(path.join(__dirname, "../client/dist/assets"))
);

cloudinary.config({
    cloud_name: 'dekkpjwfz',
    secure: true
});

app.get("/api/gallery", async (req, res, next) => {
    try {
        res.send(await fetchGallery());
    } catch (err) {
        next(err);
    }
});

const init = async () => {
    const port = process.env.PORT || 3000;
    await client.connect();
    console.log("connected to little vintage database");

    await createTables();
    console.log("tables created");

    const [ pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30 ] = await Promise.all([
        addToGallery({
            title: '001',
            image_url: cloudinary.url('PXL_20250411_012037333.PORTRAIT.ORIGINAL_2_dtaoic', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '002',
            image_url: cloudinary.url('PXL_20250411_005148844.PORTRAIT.ORIGINAL_2_s8apiy', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '003',
            image_url: cloudinary.url('PXL_20250411_002939534.PORTRAIT_2_gwdnmf', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '004',
            image_url: cloudinary.url('PXL_20250411_002956356.PORTRAIT.ORIGINAL_3_fmsvsj', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '005',
            image_url: cloudinary.url('PXL_20250411_000945524.PORTRAIT.ORIGINAL_3_p5hpsc', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '006',
            image_url: cloudinary.url('PXL_20250411_000922138.PORTRAIT.ORIGINAL_2_eymwli', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '007',
            image_url: cloudinary.url('PXL_20250408_201540273.PORTRAIT_apq8xk', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '008',
            image_url: cloudinary.url('PXL_20250405_172143208.PORTRAIT_3_qmkcpc', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '009',
            image_url: cloudinary.url('PXL_20250408_201433984.PORTRAIT.ORIGINAL_2_yndhad', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '010',
            image_url: cloudinary.url('PXL_20250408_201359528.PORTRAIT_jbdszg', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '011',
            image_url: cloudinary.url('PXL_20250405_175652037.PORTRAIT_2_lpvcch', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '012',
            image_url: cloudinary.url('PXL_20250405_175546285.PORTRAIT_2_sogf6p', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '013',
            image_url: cloudinary.url('PXL_20250405_171728233.PORTRAIT_2_aojjl6', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '014',
            image_url: cloudinary.url('PXL_20250405_011523554.PORTRAIT_lyizzn', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '015',
            image_url: cloudinary.url('PXL_20250405_010710202.PORTRAIT.ORIGINAL_3_taoeay', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '016',
            image_url: cloudinary.url('PXL_20250405_011501450.RAW-01.COVER_kejrwf', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '017',
            image_url: cloudinary.url('PXL_20250405_003732057.PORTRAIT.ORIGINAL_3_ajs4oe', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '018',
            image_url: cloudinary.url('PXL_20250405_001416989.PORTRAIT_2_ntyige', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '019',
            image_url: cloudinary.url('PXL_20250313_202208170.RAW-01.COVER_jegoa1', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '020',
            image_url: cloudinary.url('PXL_20250313_173440376.PORTRAIT_mscwjt', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '021',
            image_url: cloudinary.url('PXL_20250312_200550746.RAW-01.COVER_iafapo', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '022',
            image_url: cloudinary.url('PXL_20250312_011017768.PORTRAIT_2_euczfj', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '023',
            image_url: cloudinary.url('PXL_20250312_014354130.PORTRAIT_zyoebs', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '024',
            image_url: cloudinary.url('PXL_20250312_180956923.RAW-01.COVER_apw9dl', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '025',
            image_url: cloudinary.url('PXL_20250312_011914167.PORTRAIT_fnxup1', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '026',
            image_url: cloudinary.url('PXL_20250312_014154326.RAW-01.COVER_fajglb', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '027',
            image_url: cloudinary.url('PXL_20250311_200452636.PORTRAIT.ORIGINAL_dvrfyl', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '028',
            image_url: cloudinary.url('PXL_20250310_045439356.PORTRAIT_plydrl', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '029',
            image_url: cloudinary.url('PXL_20250310_045739456.PORTRAIT_2_bycbdm', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        }),
        addToGallery({
            title: '030',
            image_url: cloudinary.url('PXL_20250310_045209579.PORTRAIT.ORIGINAL_v2fn14', {
                transformation: [
                    {
                        fetch_format: 'auto'
                    }
                ]
                        }),
            category: 'arrangement'
        })
    ]);
    console.log(`gallery seeded`);
    app.listen(port, () => console.log(`Server running on port ${port}`));
};

init();