const fs = require("fs");

function doNothing() {
}

function createMetadata(imageFilenames) {
    console.log(imageFilenames);
    for (const [index, imgFilename] of imageFilenames.entries()) {
        const metadataFilename = `${index}`.padStart(64, "0") + ".json";
        const metadataContent = {
            name: imgFilename,
            description: `Original artwork of Ketari with ${imgFilename} fictional character.`,
            image: `https://raw.githubusercontent.com/VayKekaz/nft-metadata-storage/main/image/${imgFilename}`,
            attributes: [
                {
                    trait_type: "character",
                    value: `${imgFilename}`,
                },
            ],
        };
        fs.writeFile(`./metadata/${metadataFilename}`, JSON.stringify(metadataContent), function (err, result) {
            if (err) console.log("error", err);
        });
    }
}

fs.readdir("./image", (e, files) => {
    createMetadata(files);
});
