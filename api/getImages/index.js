require('dotenv').config()

module.exports = async function (context, req) {
    const {BlobServiceClient, StorageSharedKeyCredential} = require('@azure/storage-blob'),
    account = process.env.ACCOUNT_NAME,
    accountKey = process.env.ACCOUNT_KEY,
    sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey),
    blobUrl = `https://${account}.blob.core.windows.net`
    blobServiceClient = new BlobServiceClient(blobUrl, sharedKeyCredential)

    context.log(blobServiceClient)

    context.log('\nListing containers...');

    // List the blob(s) in the container.
    let i = 1;
    for await (const container of blobServiceClient.listContainers()) {
        context.log(`Container ${i++}: ${container.name}`);
    }

    // context.log(blobServiceClient.listContainers())

    // const containerClient = blobServiceClient.getContainerClient('images');

    // context.log('\nListing blobs...');

    // // List the blob(s) in the container.
    // for await (const blob of containerClient.listBlobsFlat()) {
    //     context.log('\t', blob.name);
    // }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify({
            blobServiceClient,
            containers: blobServiceClient.listContainers()
        }),
    };
}